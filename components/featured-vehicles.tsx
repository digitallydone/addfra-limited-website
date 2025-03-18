"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample vehicle data
const vehicles = [
  {
    id: 1,
    title: "Refrigerated Delivery Van",
    image: "/placeholder.svg?height=400&width=600",
    price: "$45,000",
    status: "Available",
    description: "Custom-built refrigerated van with temperature control system, perfect for food delivery businesses.",
  },
  {
    id: 2,
    title: "Heavy Duty Trailer",
    image: "/placeholder.svg?height=400&width=600",
    price: "$78,500",
    status: "Available",
    description: "Durable trailer designed for heavy loads with reinforced chassis and advanced braking system.",
  },
  {
    id: 3,
    title: "Mobile Workshop Truck",
    image: "/placeholder.svg?height=400&width=600",
    price: "$62,000",
    status: "Available",
    description: "Fully equipped mobile workshop with integrated tools, power supply, and storage compartments.",
  },
  {
    id: 4,
    title: "Insulated Transport Truck",
    image: "/placeholder.svg?height=400&width=600",
    price: "$55,000",
    status: "Available",
    description: "Medium-sized transport truck with insulated cargo area, ideal for temperature-sensitive goods.",
  },
  {
    id: 5,
    title: "Customized Delivery Van",
    image: "/placeholder.svg?height=400&width=600",
    price: "$38,000",
    status: "Available",
    description: "Compact delivery van with customizable interior layout and fuel-efficient engine.",
  },
  {
    id: 6,
    title: "Flatbed Trailer",
    image: "/placeholder.svg?height=400&width=600",
    price: "$42,000",
    status: "Available",
    description: "Versatile flatbed trailer suitable for transporting construction materials and equipment.",
  },
]

export default function FeaturedVehicles() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3
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

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {currentVehicles.map((vehicle) => (
          <Card key={vehicle.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img
                src={vehicle.image || "/placeholder.svg"}
                alt={vehicle.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <Badge className="absolute top-3 right-3 bg-green-500">{vehicle.status}</Badge>
            </div>
            <CardContent className="pt-6">
              <CardTitle className="text-xl mb-2">{vehicle.title}</CardTitle>
              <p className="text-slate-700 mb-2">{vehicle.description}</p>
              <p className="text-xl font-bold text-primary mt-4">{vehicle.price}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={`/vehicles/${vehicle.id}`}>
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

