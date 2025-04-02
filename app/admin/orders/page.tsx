import Link from "next/link"
import { Search, Filter, ChevronDown, ArrowUpDown, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
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
import { getOrders } from "@/app/actions/order"

export default async function OrdersPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Parse search parameters
  const status = typeof searchParams.status === "string" ? searchParams.status : undefined
  const paymentStatus = typeof searchParams.paymentStatus === "string" ? searchParams.paymentStatus : undefined
  const search = typeof searchParams.search === "string" ? searchParams.search : undefined
  const sort = typeof searchParams.sort === "string" ? searchParams.sort : "newest"
  const page = typeof searchParams.page === "string" ? Number.parseInt(searchParams.page) : 1
  const limit = 10

  // Fetch orders from database
  const { orders, pagination } = await getOrders({
    status,
    paymentStatus,
    search,
    sort,
    page,
    limit,
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Orders</h1>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="w-full md:w-auto flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" /> Filters <ChevronDown className="h-4 w-4" />
          </Button>

          <Select defaultValue={status || "all"}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue={paymentStatus || "all"}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Payment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Payments</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="refunded">Refunded</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-auto flex items-center gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input type="search" placeholder="Search orders..." className="pl-9" />
          </div>
          <Select defaultValue={sort}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="total-high">Amount: High to Low</SelectItem>
              <SelectItem value="total-low">Amount: Low to High</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                <div className="flex items-center">
                  Order ID
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>
                <div className="flex items-center">
                  Date
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="text-right">
                <div className="flex items-center justify-end">
                  Amount
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead className="text-center">Items</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.orderNumber}</TableCell>
                  <TableCell>
                    <div>{order.user?.name || "Unknown User"}</div>
                    <div className="text-sm text-slate-500">{order.user?.email || "No email"}</div>
                  </TableCell>
                  <TableCell>{new Date(order.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        order.status === "completed"
                          ? "bg-green-500"
                          : order.status === "processing"
                            ? "bg-blue-500"
                            : order.status === "shipped"
                              ? "bg-purple-500"
                              : order.status === "pending"
                                ? "bg-amber-500"
                                : "bg-red-500"
                      }
                    >
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        order.paymentStatus === "paid"
                          ? "border-green-500 text-green-500"
                          : order.paymentStatus === "pending"
                            ? "border-amber-500 text-amber-500"
                            : "border-red-500 text-red-500"
                      }
                    >
                      {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">{order.items.length}</TableCell>
                  <TableCell className="text-right">
                    <Link href={`/admin/orders/${order.id}`}>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-4 text-slate-500">
                  No orders found. Try adjusting your filters.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-slate-500">
            Showing <span className="font-medium">{(pagination.page - 1) * pagination.limit + 1}</span> to{" "}
            <span className="font-medium">{Math.min(pagination.page * pagination.limit, pagination.total)}</span> of{" "}
            <span className="font-medium">{pagination.total}</span> orders
          </div>
          <Pagination>
            <PaginationContent>
              {pagination.page > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    href={`/admin/orders?page=${pagination.page - 1}&sort=${sort}${status ? `&status=${status}` : ""}${paymentStatus ? `&paymentStatus=${paymentStatus}` : ""}${search ? `&search=${search}` : ""}`}
                  />
                </PaginationItem>
              )}

              {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                const pageNumber = i + 1
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href={`/admin/orders?page=${pageNumber}&sort=${sort}${status ? `&status=${status}` : ""}${paymentStatus ? `&paymentStatus=${paymentStatus}` : ""}${search ? `&search=${search}` : ""}`}
                      isActive={pageNumber === pagination.page}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                )
              })}

              {pagination.totalPages > 5 && <PaginationEllipsis />}

              {pagination.page < pagination.totalPages && (
                <PaginationItem>
                  <PaginationNext
                    href={`/admin/orders?page=${pagination.page + 1}&sort=${sort}${status ? `&status=${status}` : ""}${paymentStatus ? `&paymentStatus=${paymentStatus}` : ""}${search ? `&search=${search}` : ""}`}
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

