import Link from "next/link"
import { Filter, Search, ChevronDown, ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
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

// Sample product data
const products = [
  {
    id: 1,
    title: "Refrigeration Unit",
    image: "/placeholder.svg?height=300&width=300",
    price: "$1,200",
    category: "Parts",
    rating: 4.5,
    description: "High-quality refrigeration unit for commercial vehicles, energy-efficient and reliable.",
  },
  {
    id: 2,
    title: "Heavy-Duty Toolbox",
    image: "/placeholder.svg?height=300&width=300",
    price: "$250",
    category: "Accessories",
    rating: 4.8,
    description: "Durable toolbox designed for commercial vehicles, with secure locking mechanism.",
  },
  {
    id: 3,
    title: "LED Work Light Kit",
    image: "/placeholder.svg?height=300&width=300",
    price: "$85",
    category: "Accessories",
    rating: 4.7,
    description: "Bright LED work lights for improved visibility during night operations.",
  },
  {
    id: 4,
    title: "Hydraulic Lift System",
    image: "/placeholder.svg?height=300&width=300",
    price: "$1,800",
    category: "Parts",
    rating: 4.6,
    description: "Powerful hydraulic lift system for loading and unloading heavy cargo.",
  },
  {
    id: 5,
    title: "Digital Temperature Controller",
    image: "/placeholder.svg?height=300&width=300",
    price: "$320",
    category: "Parts",
    rating: 4.4,
    description: "Precise digital temperature controller for refrigerated vehicles.",
  },
  {
    id: 6,
    title: "Vehicle Tracking System",
    image: "/placeholder.svg?height=300&width=300",
    price: "$450",
    category: "Electronics",
    rating: 4.9,
    description: "Advanced GPS tracking system for fleet management and vehicle security.",
  },
  {
    id: 7,
    title: "Heavy-Duty Floor Mats",
    image: "/placeholder.svg?height=300&width=300",
    price: "$120",
    category: "Accessories",
    rating: 4.3,
    description: "Durable rubber floor mats designed for commercial vehicles.",
  },
  {
    id: 8,
    title: "Cargo Securing Kit",
    image: "/placeholder.svg?height=300&width=300",
    price: "$180",
    category: "Accessories",
    rating: 4.7,
    description: "Complete kit for securing cargo during transport, includes straps and hooks.",
  },
  {
    id: 9,
    title: "Backup Camera System",
    image: "/placeholder.svg?height=300&width=300",
    price: "$280",
    category: "Electronics",
    rating: 4.8,
    description: "High-resolution backup camera system for improved safety during reversing.",
  },
  {
    id: 10,
    title: "Air Compressor",
    image: "/placeholder.svg?height=300&width=300",
    price: "$350",
    category: "Tools",
    rating: 4.6,
    description: "Portable air compressor for tire inflation and pneumatic tool operation.",
  },
  {
    id: 11,
    title: "Insulation Material (Roll)",
    image: "/placeholder.svg?height=300&width=300",
    price: "$95",
    category: "Materials",
    rating: 4.5,
    description: "High-quality insulation material for refrigerated vehicle customization.",
  },
  {
    id: 12,
    title: "Power Inverter",
    image: "/placeholder.svg?height=300&width=300",
    price: "$220",
    category: "Electronics",
    rating: 4.7,
    description: "Reliable power inverter for converting DC to AC power in vehicles.",
  },
]

export default function ShopPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full bg-gradient-to-r from-slate-900 to-slate-800 flex items-center">
        <div className="absolute inset-0 opacity-30 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Shop</h1>
            <p className="text-xl text-slate-200">
              Browse our selection of high-quality parts, accessories, and tools for your vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-slate-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-auto flex items-center gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filters <ChevronDown className="h-4 w-4" />
              </Button>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="parts">Parts</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="tools">Tools</SelectItem>
                  <SelectItem value="materials">Materials</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="0-100">$0 - $100</SelectItem>
                  <SelectItem value="100-500">$100 - $500</SelectItem>
                  <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                  <SelectItem value="1000+">$1,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full md:w-auto flex items-center gap-2">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                <Input type="search" placeholder="Search products..." className="pl-9" />
              </div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                  >
                    <Heart className="h-4 w-4 text-slate-700" />
                  </Button>
                </div>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{product.title}</CardTitle>
                    <Badge variant="outline" className="ml-2">
                      {product.category}
                    </Badge>
                  </div>
                  <p className="text-slate-700 text-sm mb-2 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-xl font-bold text-primary">{product.price}</p>
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm ml-1">{product.rating}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href={`/shop/products/${product.id}`}>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </Link>
                  <Button size="sm" className="flex items-center gap-1">
                    <ShoppingCart className="h-4 w-4" /> Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12">
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
      </section>

      {/* Featured Categories */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Shop by Category</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md group">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Vehicle Parts"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Vehicle Parts</h3>
                <p className="text-slate-200 mb-4">High-quality parts for all types of commercial vehicles</p>
                <Link href="/shop/category/parts">
                  <Button variant="secondary" size="sm">
                    Browse Parts
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-md group">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Accessories"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Accessories</h3>
                <p className="text-slate-200 mb-4">Enhance your vehicle with our range of accessories</p>
                <Link href="/shop/category/accessories">
                  <Button variant="secondary" size="sm">
                    Browse Accessories
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-md group">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Tools & Equipment"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Tools & Equipment</h3>
                <p className="text-slate-200 mb-4">Professional tools for maintenance and repairs</p>
                <Link href="/shop/category/tools">
                  <Button variant="secondary" size="sm">
                    Browse Tools
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest product updates, special offers, and promotions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button variant="secondary" className="bg-white text-primary hover:bg-slate-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

