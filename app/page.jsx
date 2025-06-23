// Path: app\page.jsx
import Link from "next/link";
import {
  ArrowRight,
  Truck,
  PenToolIcon as Tools,
  ShoppingBag,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TestimonialCarousel from "@/components/testimonial-carousel";
import FeaturedVehicles from "@/components/featured-vehicles";
import VehiclesComponent from "@/components/Vihecle-component";
import { HeroCarousel } from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroCarousel/>

      {/* Hero Section */}

     {/*  <section className="relative h-[80vh] w-full bg-gradient-to-r from-slate-900 to-slate-800 flex items-center">
        <div className="absolute inset-0 opacity-30 bg-[url('/trunk-sm.jpg?height=1080&width=1920')] bg-cover bg-center"></div>
        <div className="container z-10 px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
              Customized Automobile Solutions
            </h1>
            <p className="mb-8 text-xl text-slate-200">
              We Specialized in refrigerated trucks, trailers and vans, serving
              clients in Ghana and internationally.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Vehicles <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white bg-transparent border-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section> */}


      <VehiclesComponent />

       {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Our Services
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-700">
              We offer a comprehensive range of services to meet all your
              automobile needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="transition-shadow bg-white shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Custom Vehicle Building</CardTitle>
                <CardDescription>
                  Specialized vehicles built to your exact specifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  From refrigerated trucks to specialized trailers, we design
                  and build vehicles that perfectly match your operational
                  requirements.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/repairs">
                  <Button
                    variant="ghost"
                    className="p-0 text-primary hover:text-primary/90"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="transition-shadow bg-white shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <Tools className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Vehicle Repairs</CardTitle>
                <CardDescription>
                  Expert repair services for all types of commercial vehicles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Our skilled technicians provide comprehensive repair services
                  to keep your vehicles in optimal condition and minimize
                  downtime.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/repairs">
                  <Button
                    variant="ghost"
                    className="p-0 text-primary hover:text-primary/90"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="transition-shadow bg-white shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Parts & Accessories</CardTitle>
                <CardDescription>
                  Quality parts and accessories for commercial vehicles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  We offer a wide range of high-quality parts and accessories to
                  enhance the performance and functionality of your vehicles.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/shop">
                  <Button
                    variant="ghost"
                    className="p-0 text-primary hover:text-primary/90"
                  >
                    Visit Shop <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                Ghana's Premier Automobile Customization Company
              </h2>
              <p className="mb-6 text-lg text-slate-700">
                At ADDFRA Limited, we specialize in designing and building
                customized automobiles that meet the specific needs of our
                clients. With years of experience and a commitment to quality,
                we deliver exceptional vehicles that exceed expectations.
              </p>
              <p className="mb-8 text-lg text-slate-700">
                Our expertise spans refrigerated trucks, specialized trailers,
                and custom vans, all built to the highest standards of quality
                and durability.
              </p>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img
                src="/trunk1.jpg"
                alt="ADDFRA workshop"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

     

      {/* Featured Vehicles */}
      {/* <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Featured Vehicles
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-700">
              Explore our latest custom vehicle builds and available units for
              purchase.
            </p>
          </div>

          <FeaturedVehicles />

          <div className="mt-12 text-center">
            <Link href="/vehicles">
              <Button size="lg">
                View All Vehicles <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              What Our Clients Say
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-700">
              Don't just take our word for it. Hear from our satisfied clients.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white bg-primary">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Contact us today to discuss your custom vehicle needs or to learn
            more about our services.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-slate-100"
            >
              <Phone className="w-4 h-4 mr-2" /> Call Us: +233 123 456 789
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-black border-white hover:bg-white/10"
              >
                Contact Form
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
