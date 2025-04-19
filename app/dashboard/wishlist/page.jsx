import Link from "next/link"
import { Heart, ShoppingCart, Trash2, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"
import { formatPrice } from "@/lib/utils"

export default async function WishlistPage() {
  // Get current user
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    redirect("/auth/login?callbackUrl=/dashboard/wishlist")
  }

  // Get user's wishlist
  let wishlist = await prisma.wishlist.findUnique({
    where: { userId: session.user.id },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  })

  // If wishlist doesn't exist, create it
  if (!wishlist) {
    wishlist = await prisma.wishlist.create({
      data: {
        userId: session.user.id,
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Wishlist</h1>
        <Link href="/shop">
          <Button variant="outline">Continue Shopping</Button>
        </Link>
      </div>

      {wishlist.items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.items.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.product.images?.[0] || "/placeholder.svg?height=400&width=600&text=No+Image"}
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
                {item.product.comparePrice && item.product.comparePrice > item.product.price && (
                  <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>
                )}
                {item.product.quantity <= 0 && (
                  <Badge className="absolute top-2 right-2 bg-gray-500">Out of Stock</Badge>
                )}
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg line-clamp-1">{item.product.name}</h3>
                  <div className="flex items-center">
                    {item.product.comparePrice && item.product.comparePrice > item.product.price ? (
                      <div className="flex flex-col items-end">
                        <span className="text-red-500 font-bold">{formatPrice(item.product.price)}</span>
                        <span className="text-gray-500 text-sm line-through">
                          {formatPrice(item.product.comparePrice)}
                        </span>
                      </div>
                    ) : (
                      <span className="font-bold">{formatPrice(item.product.price)}</span>
                    )}
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.product.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <form action={`/api/wishlist/remove?id=${item.id}`} method="POST">
                      <Button variant="outline" size="sm" type="submit" className="text-red-500">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                    </form>
                    <Link href={`/shop/products/${item.product.id}`}>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </Link>
                  </div>
                  <form action={`/api/cart/add?id=${item.product.id}`} method="POST">
                    <input type="hidden" name="quantity" value="1" />
                    <Button
                      size="sm"
                      type="submit"
                      disabled={item.product.quantity <= 0}
                      className={item.product.quantity <= 0 ? "opacity-50 cursor-not-allowed" : ""}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border rounded-lg bg-gray-50">
          <Heart className="h-12 w-12 mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-medium mb-2">Your wishlist is empty</h3>
          <p className="text-gray-500 mb-6">Save items you love to your wishlist and review them anytime.</p>
          <Link href="/shop">
            <Button>Browse Products</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
