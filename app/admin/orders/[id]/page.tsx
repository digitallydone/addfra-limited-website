import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getOrderById } from "@/app/actions/order"
import UpdateOrderStatusForm from "./update-order-status-form"
import UpdatePaymentStatusForm from "./update-payment-status-form"

export default async function OrderDetailPage({ params }: { params: { id: string } }) {
  try {
    const order = await getOrderById(params.id)

    // Format shipping and billing addresses
    const shippingAddress = order.shippingAddress as any
    const billingAddress = order.billingAddress as any

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/admin/orders">
              <Button variant="ghost" className="mr-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Orders
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Order Details</h1>
          </div>
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Print Invoice
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Order #{order.orderNumber}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-500">Date:</span>
                <span>{new Date(order.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Customer:</span>
                <span>{order.user?.name || "Unknown User"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Email:</span>
                <span>{order.user?.email || "No email"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Payment Method:</span>
                <span>{order.paymentMethod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Status:</span>
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
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Payment Status:</span>
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
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Subtotal:</span>
                  <span>${order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Shipping:</span>
                  <span>${order.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Tax:</span>
                  <span>${order.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <UpdateOrderStatusForm orderId={order.id} currentStatus={order.status} />
              <UpdatePaymentStatusForm orderId={order.id} currentStatus={order.paymentStatus} />
            </CardFooter>
          </Card>

          {/* Addresses */}
          <Card>
            <CardHeader>
              <CardTitle>Addresses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Shipping Address</h3>
                <div className="bg-slate-50 p-4 rounded-md">
                  <p>
                    {shippingAddress.firstName} {shippingAddress.lastName}
                  </p>
                  <p>{shippingAddress.address}</p>
                  <p>
                    {shippingAddress.city}, {shippingAddress.state} {shippingAddress.zip}
                  </p>
                  <p>{shippingAddress.country}</p>
                  <p>{shippingAddress.phone}</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Billing Address</h3>
                <div className="bg-slate-50 p-4 rounded-md">
                  <p>
                    {billingAddress.firstName} {billingAddress.lastName}
                  </p>
                  <p>{billingAddress.address}</p>
                  <p>
                    {billingAddress.city}, {billingAddress.state} {billingAddress.zip}
                  </p>
                  <p>{billingAddress.country}</p>
                  <p>{billingAddress.phone}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
              <CardDescription>{order.items.length} items in this order</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">Qty</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {order.items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="h-10 w-10 rounded-md bg-slate-100 overflow-hidden">
                            {item.image ? (
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="h-full w-full bg-slate-200"></div>
                            )}
                          </div>
                          <div>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-xs text-slate-500">SKU: {item.product?.sku || "N/A"}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                      <TableCell className="text-right">{item.quantity}</TableCell>
                      <TableCell className="text-right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  } catch (error) {
    notFound()
  }
}

