import Link from "next/link"
import { Wrench, PenToolIcon as Tool, Clock, CheckCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RepairsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full bg-gradient-to-r from-slate-900 to-slate-800 flex items-center">
        <div className="absolute inset-0 opacity-30 bg-[url('/trunk-rep2.jpg?height=800&width=1600')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Vehicle Repairs & Maintenance</h1>
            <p className="text-xl text-slate-200">
              Professional repair services for all types of commercial vehicles, from routine maintenance to major
              repairs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Repair Services</h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              At ADDFRA Limited, we provide comprehensive repair and maintenance services for all types of commercial
              vehicles, ensuring they operate at peak performance and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Mechanical Repairs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Engine diagnostics and repairs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Transmission service and repair</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Brake system maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Suspension and steering repairs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Exhaust system service</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/contact?service=mechanical">
                  <Button variant="outline" className="w-full">
                    Request Service
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Tool className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Specialized Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Refrigeration system repairs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Hydraulic system maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Electrical system diagnostics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Lift gate and loading equipment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Power take-off (PTO) systems</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/contact?service=specialized">
                  <Button variant="outline" className="w-full">
                    Request Service
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Preventive Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Scheduled maintenance programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Oil and filter changes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Fluid level checks and top-ups</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Battery testing and replacement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Tire rotation and replacement</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/contact?service=maintenance">
                  <Button variant="outline" className="w-full">
                    Request Service
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Repair Process</h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              We follow a systematic approach to ensure efficient and effective repairs for all vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mt-4 mb-3">Diagnosis</h3>
              <p className="text-slate-600">
                Our technicians perform a thorough inspection and diagnostics to identify the issue.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mt-4 mb-3">Cost Estimate</h3>
              <p className="text-slate-600">
                We provide a detailed cost estimate for the required repairs before proceeding.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mt-4 mb-3">Repair</h3>
              <p className="text-slate-600">
                Our skilled technicians perform the necessary repairs using quality parts and equipment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mt-4 mb-3">Quality Check</h3>
              <p className="text-slate-600">
                We conduct thorough testing to ensure all repairs meet our high-quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Plans */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Maintenance Plans</h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Choose from our range of maintenance plans designed to keep your vehicles in optimal condition.
            </p>
          </div>

          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="basic">Basic Plan</TabsTrigger>
              <TabsTrigger value="standard">Standard Plan</TabsTrigger>
              <TabsTrigger value="premium">Premium Plan</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="border rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Basic Maintenance Plan</h3>
                  <p className="text-lg mb-6">
                    Our Basic Plan covers essential maintenance services to keep your vehicle running smoothly.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Quarterly oil and filter changes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Fluid level checks and top-ups</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Tire pressure checks and adjustments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Basic safety inspection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>10% discount on additional repairs</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <p className="text-3xl font-bold text-primary mb-2">
                      $499<span className="text-sm text-slate-600">/year</span>
                    </p>
                    <Link href="/contact?plan=basic">
                      <Button className="mt-4">Get Started</Button>
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Basic Maintenance"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="standard" className="border rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Standard Maintenance Plan</h3>
                  <p className="text-lg mb-6">
                    Our Standard Plan provides comprehensive maintenance for commercial vehicles with moderate usage.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>All Basic Plan services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Bi-monthly comprehensive inspections</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Brake system maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Air conditioning system check</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Battery testing and maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>15% discount on additional repairs</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <p className="text-3xl font-bold text-primary mb-2">
                      $899<span className="text-sm text-slate-600">/year</span>
                    </p>
                    <Link href="/contact?plan=standard">
                      <Button className="mt-4">Get Started</Button>
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Standard Maintenance"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="premium" className="border rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Premium Maintenance Plan</h3>
                  <p className="text-lg mb-6">
                    Our Premium Plan offers the most comprehensive maintenance for high-usage commercial vehicles.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>All Standard Plan services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Monthly comprehensive inspections</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Refrigeration system maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Hydraulic system service</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>24/7 emergency roadside assistance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Priority scheduling for repairs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>25% discount on additional repairs</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <p className="text-3xl font-bold text-primary mb-2">
                      $1,499<span className="text-sm text-slate-600">/year</span>
                    </p>
                    <Link href="/contact?plan=premium">
                      <Button className="mt-4">Get Started</Button>
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Premium Maintenance"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How long does a typical repair take?</AccordionTrigger>
                <AccordionContent>
                  The duration of repairs varies depending on the complexity of the issue and the availability of parts.
                  Minor repairs can be completed within a day, while more complex repairs may take 2-5 business days. We
                  always provide an estimated timeline during the initial diagnosis.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Do you provide warranty on repairs?</AccordionTrigger>
                <AccordionContent>
                  Yes, all our repairs come with a standard 90-day warranty covering both parts and labor. For certain
                  components, extended warranties may be available. Our maintenance plans also include enhanced warranty
                  options.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Can you repair specialized refrigeration systems?</AccordionTrigger>
                <AccordionContent>
                  Yes, we specialize in repairing and maintaining refrigeration systems for commercial vehicles. Our
                  technicians are certified and experienced in working with various refrigeration systems, including
                  Thermo King, Carrier, and custom-built units.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Do you offer mobile repair services?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer mobile repair services for emergency situations and for clients with our Premium
                  Maintenance Plan. Our mobile technicians can perform many repairs on-site, minimizing downtime for
                  your vehicles.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>How do I schedule a repair service?</AccordionTrigger>
                <AccordionContent>
                  You can schedule a repair service by calling our service department at +233 123 456 789, using our
                  online booking form on the contact page, or visiting our facility in person. For maintenance plan
                  members, we also offer priority scheduling.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Emergency Repairs?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is available 24/7 for emergency repair services. Contact us now for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-slate-100">
              <Phone className="mr-2 h-4 w-4" /> Call: +233 123 456 789
            </Button>
            <Link href="/contact?emergency=true">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Request Emergency Service
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

