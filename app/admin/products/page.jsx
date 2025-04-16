// import Link from "next/link"
// import { Plus, Search, Filter, Edit, Trash2, ChevronDown, ArrowUpDown } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Badge } from "@/components/ui/badge"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"
// import { getProducts } from "@/app/actions/product"

// // Sample product data
// const products = [
//   {
//     id: 1,
//     name: "Refrigeration Unit",
//     category: "Parts",
//     price: 1200,
//     stock: 15,
//     status: "In Stock",
//   },
//   {
//     id: 2,
//     name: "Heavy-Duty Toolbox",
//     category: "Accessories",
//     price: 250,
//     stock: 28,
//     status: "In Stock",
//   },
//   {
//     id: 3,
//     name: "LED Work Light Kit",
//     category: "Accessories",
//     price: 85,
//     stock: 42,
//     status: "In Stock",
//   },
//   {
//     id: 4,
//     name: "Hydraulic Lift System",
//     category: "Parts",
//     price: 1800,
//     stock: 8,
//     status: "In Stock",
//   },
//   {
//     id: 5,
//     name: "Digital Temperature Controller",
//     category: "Parts",
//     price: 320,
//     stock: 3,
//     status: "Low Stock",
//   },
//   {
//     id: 6,
//     name: "Vehicle Tracking System",
//     category: "Electronics",
//     price: 450,
//     stock: 0,
//     status: "Out of Stock",
//   },
//   {
//     id: 7,
//     name: "Heavy-Duty Floor Mats",
//     category: "Accessories",
//     price: 120,
//     stock: 35,
//     status: "In Stock",
//   },
//   {
//     id: 8,
//     name: "Cargo Securing Kit",
//     category: "Accessories",
//     price: 180,
//     stock: 22,
//     status: "In Stock",
//   },
//   {
//     id: 9,
//     name: "Backup Camera System",
//     category: "Electronics",
//     price: 280,
//     stock: 0,
//     status: "Out of Stock",
//   },
//   {
//     id: 10,
//     name: "Air Compressor",
//     category: "Tools",
//     price: 350,
//     stock: 12,
//     status: "In Stock",
//   },
// ]

// export default async function ProductsPage() {

//   const products = await getProducts()

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl font-bold">Products</h1>
//         <Link href="/admin/products/new">
//           <Button>
//             <Plus className="mr-2 h-4 w-4" />
//             Add Product
//           </Button>
//         </Link>
//       </div>

//       {/* Filters and Search */}
//       <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//         <div className="w-full md:w-auto flex items-center gap-2">
//           <Button variant="outline" className="flex items-center gap-2">
//             <Filter className="h-4 w-4" /> Filters <ChevronDown className="h-4 w-4" />
//           </Button>

//           <Select>
//             <SelectTrigger className="w-[180px]">
//               <SelectValue placeholder="Category" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Categories</SelectItem>
//               <SelectItem value="parts">Parts</SelectItem>
//               <SelectItem value="accessories">Accessories</SelectItem>
//               <SelectItem value="electronics">Electronics</SelectItem>
//               <SelectItem value="tools">Tools</SelectItem>
//             </SelectContent>
//           </Select>

//           <Select>
//             <SelectTrigger className="w-[180px]">
//               <SelectValue placeholder="Status" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Status</SelectItem>
//               <SelectItem value="in-stock">In Stock</SelectItem>
//               <SelectItem value="low-stock">Low Stock</SelectItem>
//               <SelectItem value="out-of-stock">Out of Stock</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="w-full md:w-auto flex items-center gap-2">
//           <div className="relative w-full md:w-64">
//             <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
//             <Input type="search" placeholder="Search products..." className="pl-9" />
//           </div>
//         </div>
//       </div>

//       {/* Products Table */}
//       <div className="border rounded-md">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead className="w-[50px]">ID</TableHead>
//               <TableHead>
//                 <div className="flex items-center">
//                   Product Name
//                   <ArrowUpDown className="ml-2 h-4 w-4" />
//                 </div>
//               </TableHead>
//               <TableHead>Category</TableHead>
//               <TableHead className="text-right">
//                 <div className="flex items-center justify-end">
//                   Price
//                   <ArrowUpDown className="ml-2 h-4 w-4" />
//                 </div>
//               </TableHead>
//               <TableHead className="text-right">Stock</TableHead>
//               <TableHead>Status</TableHead>
//               <TableHead className="text-right">Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {products?.map((product) => (
//               <TableRow key={product.id}>
//                 <TableCell className="font-medium">{product.id}</TableCell>
//                 <TableCell>{product.name}</TableCell>
//                 <TableCell>{product.category}</TableCell>
//                 <TableCell className="text-right">${product.price.toFixed(2)}</TableCell>
//                 <TableCell className="text-right">{product.stock}</TableCell>
//                 <TableCell>
//                   <Badge
//                     className={
//                       product.status === "In Stock"
//                         ? "bg-green-500"
//                         : product.status === "Low Stock"
//                           ? "bg-amber-500"
//                           : "bg-red-500"
//                     }
//                   >
//                     {product.status}
//                   </Badge>
//                 </TableCell>
//                 <TableCell className="text-right">
//                   <div className="flex items-center justify-end space-x-2">
//                     <Link href={`/admin/products/${product.id}`}>
//                       <Button variant="ghost" size="icon">
//                         <Edit className="h-4 w-4" />
//                       </Button>
//                     </Link>
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button variant="ghost" size="icon">
//                           <ChevronDown className="h-4 w-4" />
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuItem>View Details</DropdownMenuItem>
//                         <DropdownMenuItem>Duplicate</DropdownMenuItem>
//                         <DropdownMenuItem className="text-red-600">
//                           <Trash2 className="h-4 w-4 mr-2" />
//                           Delete
//                         </DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </div>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>

//       {/* Pagination */}
//       <div className="flex items-center justify-end">
//         <Pagination>
//           <PaginationContent>
//             <PaginationItem>
//               <PaginationPrevious href="#" />
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationLink href="#" isActive>
//                 1
//               </PaginationLink>
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationLink href="#">2</PaginationLink>
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationLink href="#">3</PaginationLink>
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationEllipsis />
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationNext href="#" />
//             </PaginationItem>
//           </PaginationContent>
//         </Pagination>
//       </div>
//     </div>
//   )
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  ChevronDown,
  ArrowUpDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getProducts } from "@/app/actions/product";

export default function ProductsPage() {
  // State for filters and pagination
  // const [filters, setFilters] = useState({
  //   category: "all",
  //   status: "all",
  //   search: "",
  //   sort: "newest",
  // });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalPages: 1,
    total: 0,
  });
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch products when filters or pagination changes
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const { products, pagination: serverPagination } = await getProducts({
          ...filters,
          page: pagination.page,
          limit: pagination.limit,
        });

        setProducts(products);
        setPagination((prev) => ({
          ...prev,
          totalPages: serverPagination.totalPages,
          total: serverPagination.total,
        }));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [filters, pagination.page, pagination.limit]);

  // Handle filter changes
  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
    setPagination((prev) => ({ ...prev, page: 1 })); // Reset to first page when filters change
  };

  // Handle pagination
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setPagination((prev) => ({ ...prev, page: newPage }));
    }
  };

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

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-9"
            value={filters.search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
          />
        </div>

        <Select
          value={filters.category}
          onValueChange={(value) => handleFilterChange("category", value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="parts">parts</SelectItem>
            <SelectItem value="accessories">Accessories</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="tools">Tools</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.status}
          onValueChange={(value) => handleFilterChange("status", value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="in_stock">In Stock</SelectItem>
            <SelectItem value="low_stock">Low Stock</SelectItem>
            <SelectItem value="out_of_stock">Out of Stock</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.sort}
          onValueChange={(value) => handleFilterChange("sort", value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
            <SelectItem value="price_asc">Price: Low to High</SelectItem>
            <SelectItem value="price_desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Product Table */}
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
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8">
                  Loading products...
                </TableCell>
              </TableRow>
            ) : products.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8">
                  No products found
                </TableCell>
              </TableRow>
            ) : (
              products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell className="text-right">
                    ${product.price.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">{product.stock}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        product.status === "In Stock"
                          ? "default"
                          : product.status === "Low Stock"
                          ? "secondary"
                          : "destructive"
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
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex items-center justify-between px-2">
          <div className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-medium">
              {(pagination.page - 1) * pagination.limit + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {Math.min(pagination.page * pagination.limit, pagination.total)}
            </span>{" "}
            of <span className="font-medium">{pagination.total}</span> products
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(pagination.page - 1)}
                  className={
                    pagination.page === 1
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>

              {Array.from(
                { length: Math.min(5, pagination.totalPages) },
                (_, i) => {
                  let pageNum;
                  if (pagination.totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (pagination.page <= 3) {
                    pageNum = i + 1;
                  } else if (pagination.page >= pagination.totalPages - 2) {
                    pageNum = pagination.totalPages - 4 + i;
                  } else {
                    pageNum = pagination.page - 2 + i;
                  }

                  return (
                    <PaginationItem key={pageNum}>
                      <PaginationLink
                        onClick={() => handlePageChange(pageNum)}
                        isActive={pageNum === pagination.page}
                      >
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }
              )}

              {pagination.totalPages > 5 &&
                pagination.page < pagination.totalPages - 2 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}

              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(pagination.page + 1)}
                  className={
                    pagination.page === pagination.totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
