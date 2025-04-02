import Link from "next/link"
import { Search, Eye, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// Sample order data
const orders = [
  {
    id: "ORD-001",
    date: "2023-10-15",
    amount: 1200,
    status: "Completed",
    paymentStatus: "Paid",
    items: 3,
  },
  {
    id: "ORD-002",
    date: "2023-10-14",
    amount: 850,
    status: "Processing",
    paymentStatus: "Paid",
    items: 2,
  },
  {
    id: "ORD-003",
    date: "2023-10-13",
    amount: 320,
    status: "Completed",
    paymentStatus: "Paid",
    items: 1,
  },
  {
    id: "ORD-004",
    date: "2023-10-12",
    amount: 1450,
    status: "Pending",
    paymentStatus: "Pending",
    items: 4,
  },
  {
    id: "ORD-005",
    date: "2023-10-11",
    amount: 720,
    status: "Completed",
    paymentStatus: "Paid",
    items: 2,
  },
  {
    id: "ORD-006",
    date: "2023-10-10",
    amount: 950,
    status: "Shipped",
    paymentStatus: "Paid",
    items: 3,
  },
  {
    id: "ORD-007",
    date: "2023-10-09",
    amount: 1800,
    status: "Processing",
    paymentStatus: "Paid",
    items: 5,
  },
  {
    id: "ORD-008",
    date: "2023-10-08",
    amount: 450,
    status: "Cancelled",
    paymentStatus: "Refunded",
    items: 1,
  },
]

export default function UserOrdersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Orders</h1>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="w-full md:w-auto flex items-center gap-2">
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
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="last-3-months">Last 3 Months</SelectItem>
              <SelectItem value="last-6-months">Last 6 Months</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-auto flex items-center gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input type="search" placeholder="Search orders..." className="pl-9" />
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
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
                  <div className="flex items-center justify-end space-x-2">
                    <Link href={`/dashboard/orders/${order.id}`}>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </Link>
                    {order.status === "Completed" && (
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Invoice
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-500">
          Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{" "}
          <span className="font-medium">12</span> orders
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
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

