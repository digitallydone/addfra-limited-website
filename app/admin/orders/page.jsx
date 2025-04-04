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

// Sample order data
const orders = [
  {
    id: "ORD-001",
    customer: "John Mensah",
    email: "john.mensah@example.com",
    date: "2023-10-15",
    amount: 1200,
    status: "Completed",
    paymentStatus: "Paid",
    items: 3,
  },
  {
    id: "ORD-002",
    customer: "Akosua Boateng",
    email: "akosua.b@example.com",
    date: "2023-10-14",
    amount: 850,
    status: "Processing",
    paymentStatus: "Paid",
    items: 2,
  },
  {
    id: "ORD-003",
    customer: "Emmanuel Osei",
    email: "emmanuel.o@example.com",
    date: "2023-10-13",
    amount: 320,
    status: "Completed",
    paymentStatus: "Paid",
    items: 1,
  },
  {
    id: "ORD-004",
    customer: "Fatima Ibrahim",
    email: "fatima.i@example.com",
    date: "2023-10-12",
    amount: 1450,
    status: "Pending",
    paymentStatus: "Pending",
    items: 4,
  },
  {
    id: "ORD-005",
    customer: "Daniel Addo",
    email: "daniel.a@example.com",
    date: "2023-10-11",
    amount: 720,
    status: "Completed",
    paymentStatus: "Paid",
    items: 2,
  },
  {
    id: "ORD-006",
    customer: "Grace Owusu",
    email: "grace.o@example.com",
    date: "2023-10-10",
    amount: 950,
    status: "Shipped",
    paymentStatus: "Paid",
    items: 3,
  },
  {
    id: "ORD-007",
    customer: "Kwame Asante",
    email: "kwame.a@example.com",
    date: "2023-10-09",
    amount: 1800,
    status: "Processing",
    paymentStatus: "Paid",
    items: 5,
  },
  {
    id: "ORD-008",
    customer: "Abena Mensah",
    email: "abena.m@example.com",
    date: "2023-10-08",
    amount: 450,
    status: "Cancelled",
    paymentStatus: "Refunded",
    items: 1,
  },
  {
    id: "ORD-009",
    customer: "Kofi Annan",
    email: "kofi.a@example.com",
    date: "2023-10-07",
    amount: 680,
    status: "Completed",
    paymentStatus: "Paid",
    items: 2,
  },
  {
    id: "ORD-010",
    customer: "Ama Serwaa",
    email: "ama.s@example.com",
    date: "2023-10-06",
    amount: 1250,
    status: "Shipped",
    paymentStatus: "Paid",
    items: 4,
  },
]

export default function OrdersPage() {
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

          <Select>
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

          <Select>
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
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="amount-high">Amount: High to Low</SelectItem>
              <SelectItem value="amount-low">Amount: Low to High</SelectItem>
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
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>
                  <div>{order.customer}</div>
                  <div className="text-sm text-slate-500">{order.email}</div>
                </TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell className="text-right">${order.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      order.status === "Completed"
                        ? "bg-green-500"
                        : order.status === "Processing"
                          ? "bg-blue-500"
                          : order.status === "Shipped"
                            ? "bg-purple-500"
                            : order.status === "Pending"
                              ? "bg-amber-500"
                              : "bg-red-500"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      order.paymentStatus === "Paid"
                        ? "border-green-500 text-green-500"
                        : order.paymentStatus === "Pending"
                          ? "border-amber-500 text-amber-500"
                          : "border-red-500 text-red-500"
                    }
                  >
                    {order.paymentStatus}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">{order.items}</TableCell>
                <TableCell className="text-right">
                  <Link href={`/admin/orders/${order.id}`}>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-500">
          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{" "}
          <span className="font-medium">50</span> orders
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

