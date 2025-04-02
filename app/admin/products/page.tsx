import Link from "next/link"
import { Plus, Search, Filter, Edit, ChevronDown, ArrowUpDown } from "lucide-react"
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
import { getProducts } from "@/app/actions/product"
import DeleteProductButton from "./delete-product-button"

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Parse search parameters
  const category = typeof searchParams.category === "string" ? searchParams.category : undefined
  const status = typeof searchParams.status === "string" ? searchParams.status : undefined
  const search = typeof searchParams.search === "string" ? searchParams.search : undefined
  const sort = typeof searchParams.sort === "string" ? searchParams.sort : "newest"
  const page = typeof searchParams.page === "string" ? Number.parseInt(searchParams.page) : 1
  const limit = 10

  // Fetch products from database
  const { products, pagination } = await getProducts({
    category,
    status,
    search,
    sort,
    page,
    limit,
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link href="/admin/products/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </Link>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="w-full md:w-auto flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" /> Filters <ChevronDown className="h-4 w-4" />
          </Button>

          <Select defaultValue={category || "all"}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="parts">Parts</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="tools">Tools</SelectItem>
              <SelectItem value="vehicles">Vehicles</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue={status || "all"}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="out-of-stock">Out of Stock</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-auto flex items-center gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input type="search" placeholder="Search products..." className="pl-9" />
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">ID</TableHead>
              <TableHead>
                <div className="flex items-center">
                  Product Name
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">
                <div className="flex items-center justify-end">
                  Price
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="text-right">Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.length > 0 ? (
              products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.id.substring(0, 8)}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell className="text-right">${product.price.toFixed(2)}</TableCell>
                  <TableCell className="text-right">{product.quantity}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        product.status === "active"
                          ? "bg-green-500"
                          : product.status === "draft"
                            ? "bg-amber-500"
                            : "bg-red-500"
                      }
                    >
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <Link href={`/admin/products/${product.id}`}>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/shop/products/${product.id}`} className="cursor-pointer">
                              View Details
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/products/duplicate/${product.id}`} className="cursor-pointer">
                              Duplicate
                            </Link>
                          </DropdownMenuItem>
                          <DeleteProductButton productId={product.id} productName={product.name} />
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-4 text-slate-500">
                  No products found. Try adjusting your filters or add a new product.
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
            <span className="font-medium">{pagination.total}</span> products
          </div>
          <Pagination>
            <PaginationContent>
              {pagination.page > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    href={`/admin/products?page=${pagination.page - 1}&sort=${sort}${category ? `&category=${category}` : ""}${status ? `&status=${status}` : ""}${search ? `&search=${search}` : ""}`}
                  />
                </PaginationItem>
              )}

              {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                const pageNumber = i + 1
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href={`/admin/products?page=${pageNumber}&sort=${sort}${category ? `&category=${category}` : ""}${status ? `&status=${status}` : ""}${search ? `&search=${search}` : ""}`}
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
                    href={`/admin/products?page=${pagination.page + 1}&sort=${sort}${category ? `&category=${category}` : ""}${status ? `&status=${status}` : ""}${search ? `&search=${search}` : ""}`}
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

