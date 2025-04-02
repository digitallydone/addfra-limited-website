import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Mail, Calendar, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getUserById } from "@/app/actions/user"
import ChangeRoleForm from "./change-role-form"

export default async function UserDetailPage({ params }: { params: { id: string } }) {
  try {
    const user = await getUserById(params.id)

    return (
      <div className="space-y-6">
        <div className="flex items-center">
          <Link href="/admin/users">
            <Button variant="ghost" className="mr-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Users
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">User Details</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User Profile */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center">
                <div className="h-24 w-24 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                  {user.image ? (
                    <img
                      src={user.image || "/placeholder.svg"}
                      alt={user.name || "User"}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl font-medium">{user.name?.charAt(0) || "U"}</span>
                  )}
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-xl font-bold">{user.name || "Unnamed User"}</h2>
                <Badge className={user.role === "admin" ? "bg-purple-500 mt-1" : "bg-blue-500 mt-1"}>{user.role}</Badge>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-slate-500" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-slate-500" />
                  <span>Joined {new Date(user.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <ShoppingBag className="h-4 w-4 mr-2 text-slate-500" />
                  <span>{user._count.orders} orders</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <ChangeRoleForm userId={user.id} currentRole={user.role} />
            </CardFooter>
          </Card>

          {/* Recent Orders */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>This user's most recent orders</CardDescription>
            </CardHeader>
            <CardContent>
              {user.orders.length > 0 ? (
                <div className="space-y-4">
                  {user.orders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div>
                        <div className="font-medium">{order.orderNumber}</div>
                        <div className="text-sm text-slate-500">{new Date(order.createdAt).toLocaleDateString()}</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <div className="font-medium">${order.total.toFixed(2)}</div>
                        </div>
                        <Badge
                          className={
                            order.status === "completed"
                              ? "bg-green-500"
                              : order.status === "processing"
                                ? "bg-blue-500"
                                : "bg-amber-500"
                          }
                        >
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4 text-slate-500">This user hasn't placed any orders yet.</div>
              )}
            </CardContent>
            <CardFooter>
              <Link href={`/admin/users/${user.id}/orders`} className="w-full">
                <Button variant="outline" className="w-full">
                  View All Orders
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  } catch (error) {
    notFound()
  }
}

