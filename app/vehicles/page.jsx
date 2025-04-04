import Link from "next/link"
import { Filter, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Sample vehicle data
const vehicles = [
  {
    id: 1,
    title: "Refrigerated Delivery Van",
    image: "/placeholder.svg?height=400&width=600",
    price: "$45,000",
    status: "Available",
    category: "Refrigerated",
    year: 2023,
    description: "Custom-built refrigerated van with temperature control system, perfect for food delivery businesses.",
  },
  {
    id: 2,
    title: "Heavy Duty Trailer",
    image: "/placeholder.svg?height=400&width=600",
    price: "$78,500",
    status: "Available",
    category: "Trailer",
    year: 2023,
    description: "Durable trailer designed for heavy loads with reinforced chassis and advanced braking system.",
  },
  {
    id: 3,
    title: "Mobile Workshop Truck",
    image: "/placeholder.svg?height=400&width=600",
    price: "$62,000",
    status: "Available",
    category: "Specialized",
    year: 2022,
    description: "Fully equipped mobile workshop with integrated tools, power supply, and storage compartments.",
  },
  {
    id: 4,
    title: "Insulated Transport Truck",
    image: "/placeholder.svg?height=400&width=600",
    price: "$55,000",
    status: "Available",
    category: "Refrigerated",
    year: 2023,
    description: "Medium-sized transport truck with insulated cargo area, ideal for temperature-sensitive goods.",
  },
  {
    id: 5,
    title: "Customized Delivery Van",
    image: "/placeholder.svg?height=400&width=600",
    price: "$38,000",
    status: "Available",
    category: "Van",
    year: 2022,
    description: "Compact delivery van with customizable interior layout and fuel-efficient engine.",
  },
  {
    id: 6,
    title: "Flatbed Trailer",
    image: "/placeholder.svg?height=400&width=600",
    price: "$42,000",
    status: "Available",
    category: "Trailer",
    year: 2023,
    description: "Versatile flatbed trailer suitable for transporting construction materials and equipment.",
  },
  {
    id: 7,
    title: "Refrigerated Box Truck",
    image: "/placeholder.svg?height=400&width=600",
    price: "$68,000",
    status: "Available",
    category: "Refrigerated",
    year: 2022,
    description: "Large refrigerated box truck with dual temperature zones for transporting various perishable goods.",
  },
  {
    id: 8,
    title: "Cargo Van",
    image: "/placeholder.svg?height=400&width=600",
    price: "$35,000",
    status: "Available",
    category: "Van",
    year: 2023,
    description: "Spacious cargo van with reinforced interior and easy-access rear and side doors.",
  },
  {
    id: 9,
    title: "Tanker Trailer",
    image: "/placeholder.svg?height=400&width=600",
    price: "$82,000",
    status: "Available",
    category: "Trailer",
    year: 2022,
    description:
      "Specialized tanker trailer for liquid transport with advanced safety features and corrosion-resistant materials.",
  },
]

export default function VehiclesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full bg-gradient-to-r from-slate-900 to-slate-800 flex items-center">
        <div className="absolute inset-0 opacity-30 bg-[url('/trunk-v.jpg?height=800&width=1600')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Vehicle Fleet</h1>
            <p className="text-xl text-slate-200">
              Browse our selection of custom-built vehicles designed for your specific needs.
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
                  <SelectItem value="refrigerated">Refrigerated</SelectItem>
                  <SelectItem value="trailer">Trailer</SelectItem>
                  <SelectItem value="van">Van</SelectItem>
                  <SelectItem value="specialized">Specialized</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full md:w-auto flex items-center gap-2">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                <Input type="search" placeholder="Search vehicles..." className="pl-9" />
              </div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
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
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{vehicle.title}</CardTitle>
                    <Badge variant="outline" className="ml-2">
                      {vehicle.category}
                    </Badge>
                  </div>
                  <p className="text-slate-700 mb-2">{vehicle.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    {/* <p className="text-xl font-bold text-primary">{vehicle.price}</p> */}
                    <Badge variant="secondary">Year: {vehicle.year}</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href={`/vehicles/${vehicle.id}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                  <Link href={`/contact?inquiry=${vehicle.id}`}>
                    <Button>Inquire Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Do you offer customization for all vehicles?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer customization services for all types of vehicles in our inventory. Our team works
                  closely with you to understand your specific requirements and implements the necessary modifications
                  to meet your needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What is the warranty period for your vehicles?</AccordionTrigger>
                <AccordionContent>
                  All our vehicles come with a standard 1-year warranty covering manufacturing defects and workmanship.
                  Extended warranty options are available for purchase. Please contact our sales team for more details.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Do you offer financing options?</AccordionTrigger>
                <AccordionContent>
                  Yes, we work with several financial institutions to provide flexible financing options for our
                  customers. Our team can help you find the best financing solution based on your budget and
                  requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Can you deliver vehicles internationally?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer international shipping and delivery services. The cost and timeline depend on the
                  destination country. Our logistics team will handle all the necessary paperwork and arrangements for a
                  smooth delivery process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What is the lead time for custom vehicle orders?</AccordionTrigger>
                <AccordionContent>
                  The lead time for custom vehicle orders typically ranges from 4 to 12 weeks, depending on the
                  complexity of the customization and the availability of parts. We provide a detailed timeline during
                  the initial consultation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team to discuss custom vehicle solutions tailored to your specific requirements.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-slate-100">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

