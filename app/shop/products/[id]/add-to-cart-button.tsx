"use client"

import type React from "react"

import { useState } from "react"
import { ShoppingCart, Minus, Plus, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/context/cart-context"
import { toast } from "@/hooks/use-toast"

interface AddToCartButtonProps {
  product: {
    id: string
    name: string
    price: number
    images?: string[]
    quantity: number
  }
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const [adding, setAdding] = useState(false)
  const { addItem } = useCart()

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value > 0 && value <= product.quantity) {
      setQuantity(value)
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    if (quantity < product.quantity) {
      setQuantity(quantity + 1)
    }
  }

  const handleAddToCart = () => {
    if (product.quantity <= 0) {
      toast({
        title: "Out of stock",
        description: "This product is currently out of stock.",
        variant: "destructive",
      })
      return
    }

    setAdding(true)

    // Add item to cart
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images?.[0] || "/placeholder.svg",
      quantity,
    })

    // Show success message
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart.`,
    })

    // Reset state
    setTimeout(() => {
      setAdding(false)
      setQuantity(1)
    }, 1000)
  }

  return (
    <div className="flex flex-col space-y-4 flex-1">
      <div className="flex items-center">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={decreaseQuantity}
          disabled={quantity <= 1 || product.quantity <= 0}
          className="h-10 w-10"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          min="1"
          max={product.quantity}
          value={quantity}
          onChange={handleQuantityChange}
          disabled={product.quantity <= 0}
          className="h-10 w-20 mx-2 text-center"
        />
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={increaseQuantity}
          disabled={quantity >= product.quantity || product.quantity <= 0}
          className="h-10 w-10"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button onClick={handleAddToCart} disabled={product.quantity <= 0 || adding} className="flex-1">
        {adding ? (
          <>
            <Check className="mr-2 h-4 w-4" /> Added to Cart
          </>
        ) : (
          <>
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </>
        )}
      </Button>
    </div>
  )
}

