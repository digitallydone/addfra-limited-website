import Link from "next/link"
import { ArrowRight, Truck, PenToolIcon as Tools, ShoppingBag, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import FeaturedVehicles from "@/components/featured-vehicles"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full bg-gradient-to-r from-slate-900 to-slate-800 flex items-center">
        <div className="absolute inset-0 opacity-30 bg-[url('/trunk-sm.jpg?height=1080&width=1920')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Customized Automobile Solutions</h1>
            <p className="text-xl text-slate-200 mb-8">
              Specializing in refrigerated trucks, trailers, and vans serving clients in Ghana and internationally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Vehicles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">
                Ghana's Premier Automobile Customization Company
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                At ADDFRA Limited, we specialize in designing and building customized automobiles that meet the specific
                needs of our clients. With years of experience and a commitment to quality, we deliver exceptional
                vehicles that exceed expectations.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                Our expertise spans refrigerated trucks, specialized trailers, and custom vans, all built to the highest
                standards of quality and durability.
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="/trunk1.jpg" alt="ADDFRA workshop" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Our Services</h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              We offer a comprehensive range of services to meet all your automobile needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Custom Vehicle Building</CardTitle>
                <CardDescription>Specialized vehicles built to your exact specifications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  From refrigerated trucks to specialized trailers, we design and build vehicles that perfectly match
                  your operational requirements.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/services/custom-building">
                  <Button variant="ghost" className="text-primary hover:text-primary/90 p-0">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Tools className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Vehicle Repairs</CardTitle>
                <CardDescription>Expert repair services for all types of commercial vehicles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Our skilled technicians provide comprehensive repair services to keep your vehicles in optimal
                  condition and minimize downtime.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/services/repairs">
                  <Button variant="ghost" className="text-primary hover:text-primary/90 p-0">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Parts & Accessories</CardTitle>
                <CardDescription>Quality parts and accessories for commercial vehicles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  We offer a wide range of high-quality parts and accessories to enhance the performance and
                  functionality of your vehicles.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/shop">
                  <Button variant="ghost" className="text-primary hover:text-primary/90 p-0">
                    Visit Shop <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Featured Vehicles</h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Explore our latest custom vehicle builds and available units for purchase.
            </p>
          </div>

          <FeaturedVehicles />

          <div className="text-center mt-12">
            <Link href="/vehicles">
              <Button size="lg">
                View All Vehicles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">What Our Clients Say</h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from our satisfied clients.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your custom vehicle needs or to learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-slate-100">
              <Phone className="mr-2 h-4 w-4" /> Call Us: +233 123 456 789
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Form
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

