import Link from "next/link"
import { ArrowRight, CheckCircle, Users, Award, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full bg-gradient-to-r from-slate-900 to-slate-800 flex items-center">
        <div className="absolute inset-0 opacity-30 bg-[url('/worker-about1.jpg?height=800&width=1600')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About ADDFRA Limited</h1>
            <p className="text-xl text-slate-200">
              Ghana's premier automobile customization company with a commitment to quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Story</h2>
              <p className="text-lg text-slate-700 mb-6">
                Founded in 2010, ADDFRA Limited began as a small workshop specializing in vehicle repairs. Over the
                years, we have grown into a leading automobile customization company in Ghana, serving clients both
                locally and internationally.
              </p>
              <p className="text-lg text-slate-700 mb-6">
                Our journey has been driven by a passion for innovation and a commitment to quality. We identified a gap
                in the market for specialized vehicles, particularly refrigerated trucks and trailers, and set out to
                fill this need with custom-built solutions that meet the highest standards.
              </p>
              <p className="text-lg text-slate-700">
                Today, ADDFRA Limited is recognized as a trusted partner for businesses and individuals seeking
                customized automobile solutions. Our team of skilled engineers, technicians, and designers work together
                to create vehicles that not only meet but exceed our clients' expectations.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="/worker-about2.jpg?height=600&width=800" alt="ADDFRA workshop" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-white shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-lg text-slate-700 mb-6">
                To provide high-quality, customized automobile solutions that meet the specific needs of our clients,
                while maintaining the highest standards of craftsmanship, innovation, and customer service.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Deliver exceptional quality in every vehicle we build</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Provide personalized solutions tailored to client needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Maintain transparent communication throughout the process</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Ensure timely delivery and excellent after-sales support</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-white shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-lg text-slate-700 mb-6">
                To be the leading provider of customized automobile solutions in Africa, recognized for our innovation,
                quality, and commitment to customer satisfaction.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Expand our reach across the African continent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Continuously innovate and improve our designs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Invest in sustainable and eco-friendly solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Build lasting relationships with clients and partners</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-slate-700">
                  We strive for excellence in everything we do, from the quality of our materials to the precision of
                  our craftsmanship and the service we provide to our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Integrity</h3>
                <p className="text-slate-700">
                  We conduct our business with honesty, transparency, and ethical practices, building trust with our
                  clients, partners, and employees.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-slate-700">
                  We embrace innovation and continuously seek new ways to improve our designs, processes, and services
                  to deliver the best possible solutions to our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Our Leadership Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            Team Member 1
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img src="/placeholder.svg?height=400&width=300" alt="CEO" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Daniel Addo</h3>
                <p className="text-primary mb-4">Founder & CEO</p>
                <p className="text-slate-700 text-sm">
                  With over 20 years of experience in the automotive industry, Daniel leads our company with vision and
                  expertise.
                </p>
              </div>
            </div>

            Team Member 2
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img src="/placeholder.svg?height=400&width=300" alt="CTO" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Francis Mensah</h3>
                <p className="text-primary mb-4">Chief Technical Officer</p>
                <p className="text-slate-700 text-sm">
                  Francis oversees all technical aspects of our vehicle customization, bringing innovation to every
                  project.
                </p>
              </div>
            </div>

            Team Member 3
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Operations Director"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Abena Frimpong</h3>
                <p className="text-primary mb-4">Operations Director</p>
                <p className="text-slate-700 text-sm">
                  Abena ensures smooth operations across all departments, maintaining our high standards of quality.
                </p>
              </div>
            </div>

            Team Member 4
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Sales Manager"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Kwame Osei</h3>
                <p className="text-primary mb-4">Sales & Marketing Director</p>
                <p className="text-slate-700 text-sm">
                  Kwame leads our sales and marketing efforts, building strong relationships with clients across Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Our Journey</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {/* 2010 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-xl font-bold text-primary">2010</h3>
                    <h4 className="text-lg font-semibold mb-2">Company Founded</h4>
                    <p className="text-slate-700">
                      ADDFRA Limited was established as a small vehicle repair workshop in Accra, Ghana.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <img
                      src="/abour-222.jpg?height=300&width=400"
                      alt="Company founding"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* 2013 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 md:order-1 order-2">
                    <img
                      src="/shop-img.jpg?height=300&width=400"
                      alt="First refrigerated truck"
                      className="rounded-lg shadow-md md:ml-auto"
                    />
                  </div>
                  <div className="md:pl-12 md:order-2 order-1">
                    <h3 className="text-xl font-bold text-primary">2013</h3>
                    <h4 className="text-lg font-semibold mb-2">First Custom Refrigerated Truck</h4>
                    <p className="text-slate-700">
                      Completed our first custom refrigerated truck project, marking our entry into specialized vehicle
                      customization.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2016 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-xl font-bold text-primary">2016</h3>
                    <h4 className="text-lg font-semibold mb-2">Expanded Facility</h4>
                    <p className="text-slate-700">
                      Moved to a larger facility to accommodate growing demand and expanded our team of skilled
                      technicians.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <img
                      src="/site-facilty1.jpg?height=300&width=400"
                      alt="Expanded facility"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* 2019 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 md:order-1 order-2">
                    <img
                      src="/team-int1.jpg?height=300&width=400"
                      alt="International expansion"
                      className="rounded-lg shadow-md md:ml-auto"
                    />
                  </div>
                  <div className="md:pl-12 md:order-2 order-1">
                    <h3 className="text-xl font-bold text-primary">2019</h3>
                    <h4 className="text-lg font-semibold mb-2">International Expansion</h4>
                    <p className="text-slate-700">
                      Began serving clients in neighboring countries, establishing ADDFRA as a regional leader in
                      vehicle customization.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2022 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-xl font-bold text-primary">2022</h3>
                    <h4 className="text-lg font-semibold mb-2">E-commerce Launch</h4>
                    <p className="text-slate-700">
                      Launched our e-commerce platform to offer vehicle parts, accessories, and tools to customers
                      across Africa.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <img
                      src="/trunk-ecom1.jpg?height=300&width=400"
                      alt="E-commerce launch"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* Today */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 md:order-1 order-2">
                    <img
                      src="/worker-about3.jpg?height=300&width=400"
                      alt="Present day"
                      className="rounded-lg shadow-md md:ml-auto"
                    />
                  </div>
                  <div className="md:pl-12 md:order-2 order-1">
                    <h3 className="text-xl font-bold text-primary">Today</h3>
                    <h4 className="text-lg font-semibold mb-2">Leading the Industry</h4>
                    <p className="text-slate-700">
                      Today, ADDFRA Limited stands as a leader in automobile customization, with a reputation for
                      quality, innovation, and exceptional customer service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your custom vehicle needs or to learn more about our services.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-slate-100">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

