import Link from "next/link"
import { Search, Filter, ChevronDown, ArrowUpDown, Edit, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import prisma from "@/lib/prisma"

export default async function UsersPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Parse search parameters
  const role = typeof searchParams.role === "string" ? searchParams.role : undefined
  const search = typeof searchParams.search === "string" ? searchParams.search : undefined
  const sort = typeof searchParams.sort === "string" ? searchParams.sort : "newest"
  const page = typeof searchParams.page === "string" ? Number.parseInt(searchParams.page) : 1
  const limit = 10

  // Build where clause for filtering
  const where: any = {}

  if (role && role !== "all") {
    where.role = role
  }

  if (search) {
    where.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { email: { contains: search, mode: "insensitive" } },
    ]
  }

  // Build orderBy for sorting
  let orderBy: any = {}

  switch (sort) {
    case "newest":
      orderBy = { createdAt: "desc" }
      break
    case "oldest":
      orderBy = { createdAt: "asc" }
      break
    case "name-asc":
      orderBy = { name: "asc" }
      break
    case "name-desc":
      orderBy = { name: "desc" }
      break
    default:
      orderBy = { createdAt: "desc" }
  }

  // Calculate pagination
  const skip = (page - 1) * limit

  // Fetch users
  const users = await prisma.user.findMany({
    where,
    orderBy,
    skip,
    take: limit,
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      role: true,
      createdAt: true,
      emailVerified: true,
      _count: {
        select: {
          orders: true,
        },
      },
    },
  })

  // Get total count for pagination
  const total = await prisma.user.count({ where })

  // Calculate pagination info
  const totalPages = Math.ceil(total / limit)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Users</h1>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="w-full md:w-auto flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" /> Filters <ChevronDown className="h-4 w-4" />
          </Button>

          <Select defaultValue={role || "all"}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="user">User</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-auto flex items-center gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input type="search" placeholder="Search users..." className="pl-9" />
          </div>
          <Select defaultValue={sort}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="name-asc">Name: A to Z</SelectItem>
              <SelectItem value="name-desc">Name: Z to A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Users Table */}
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">
                <div className="flex items-center">
                  User
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>
                <div className="flex items-center">
                  Joined
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="text-right">Orders</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length > 0 ? (
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                        {user.image ? (
                          <img
                            src={user.image || "/placeholder.svg"}
                            alt={user.name || "User"}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <span className="text-sm font-medium">{user.name?.charAt(0) || "U"}</span>
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{user.name || "Unnamed User"}</div>
                        <div className="text-xs text-slate-500">ID: {user.id.substring(0, 8)}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {user.email}
                      {user.emailVerified && (
                        <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200">
                          Verified
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={user.role === "admin" ? "bg-purple-500" : "bg-blue-500"}>{user.role}</Badge>
                  </TableCell>
                  <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">{user._count.orders}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <Link href={`/admin/users/${user.id}`}>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/users/${user.id}/orders`} className="cursor-pointer">
                              View Orders
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/users/${user.id}/edit-role`} className="cursor-pointer">
                              Change Role
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-4 text-slate-500">
                  No users found. Try adjusting your filters.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-slate-500">
            Showing <span className="font-medium">{(page - 1) * limit + 1}</span> to{" "}
            <span className="font-medium">{Math.min(page * limit, total)}</span> of{" "}
            <span className="font-medium">{total}</span> users
          </div>
          <Pagination>
            <PaginationContent>
              {page > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    href={`/admin/users?page=${page - 1}&sort=${sort}${role ? `&role=${role}` : ""}${search ? `&search=${search}` : ""}`}
                  />
                </PaginationItem>
              )}

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNumber = i + 1
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href={`/admin/users?page=${pageNumber}&sort=${sort}${role ? `&role=${role}` : ""}${search ? `&search=${search}` : ""}`}
                      isActive={pageNumber === page}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                )
              })}

              {totalPages > 5 && <PaginationEllipsis />}

              {page < totalPages && (
                <PaginationItem>
                  <PaginationNext
                    href={`/admin/users?page=${page + 1}&sort=${sort}${role ? `&role=${role}` : ""}${search ? `&search=${search}` : ""}`}
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  )
}

