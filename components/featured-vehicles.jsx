"use client"
// Path: components\featured-vehicles.jsx

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getProducts } from "@/app/actions/product"

export default function FeaturedVehicles() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [vehicles, setVehicles] = useState([])
  const [loading, setLoading] = useState(true)
  const itemsPerPage = 3

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const { products } = await getProducts({
          // category: "vehicles",
          status: "active",
          limit: 6,
        })

        setVehicles(products)
      } catch (error) {
        console.error("Error fetching featured vehicles:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchVehicles()
  }, [])

  const totalPages = Math.ceil(vehicles.length / itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage >= vehicles.length ? 0 : prevIndex + itemsPerPage))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0 ? Math.max(0, vehicles.length - itemsPerPage) : prevIndex - itemsPerPage,
    )
  }

  const currentVehicles = vehicles.slice(currentIndex, currentIndex + itemsPerPage)

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden shadow-lg">
            <div className="h-48 bg-slate-200 animate-pulse"></div>
            <CardContent className="pt-6">
              <div className="h-6 bg-slate-200 animate-pulse mb-2 w-3/4"></div>
              <div className="h-4 bg-slate-200 animate-pulse mb-2"></div>
              <div className="h-4 bg-slate-200 animate-pulse mb-2 w-1/2"></div>
              <div className="h-6 bg-slate-200 animate-pulse mt-4 w-1/4"></div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="h-9 bg-slate-200 animate-pulse w-24"></div>
              <div className="h-9 bg-slate-200 animate-pulse w-24"></div>
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }

  if (vehicles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-slate-500">No featured vehicles available at the moment.</p>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {currentVehicles.map((vehicle) => (
          <Card key={vehicle.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img
                src={vehicle.images?.[0] || "/placeholder.svg?height=400&width=600"}
                alt={vehicle.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <Badge className="absolute top-3 right-3 bg-green-500">
                {vehicle.quantity > 0 ? "Available" : "Out of Stock"}
              </Badge>
            </div>
            <CardContent className="pt-6">
              <CardTitle className="text-xl mb-2">{vehicle.name}</CardTitle>
              <p className="text-slate-700 mb-2">{vehicle.description}</p>
              <p className="text-xl font-bold text-primary mt-4">${vehicle.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={`/shop/products/${vehicle.id}`}>
                <Button variant="outline" size="sm">
                  <Info className="mr-2 h-4 w-4" /> Details
                </Button>
              </Link>
              <Link href={`/contact?inquiry=${vehicle.id}`}>
                <Button size="sm">Inquire Now</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}

