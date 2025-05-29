// Path: app\repairs\page.jsx
import Link from "next/link";
import {
  Wrench,
  PenToolIcon as Tool,
  Clock,
  CheckCircle,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RepairsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full bg-gradient-to-r from-slate-900 to-slate-800 flex items-center">
        <div className="absolute inset-0 opacity-30 bg-[url('/trunk-rep2.jpg?height=800&width=1600')] bg-cover bg-center"></div>
        <div className="container z-10 px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Vehicle Repairs & Maintenance
            </h1>
            <p className="text-xl text-slate-200">
              Professional repair services for all types of commercial vehicles,
              from routine maintenance to major repairs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Repair Services</h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-700">
              At ADDFRA Limited, we provide comprehensive repair and maintenance
              services for all types of commercial vehicles, ensuring they
              operate at peak performance and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="transition-shadow bg-white shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <Wrench className="w-6 h-6 text-primary" />
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

            <Card className="transition-shadow bg-white shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <Tool className="w-6 h-6 text-primary" />
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

            <Card className="transition-shadow bg-white shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <Clock className="w-6 h-6 text-primary" />
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
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Repair Process</h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-700">
              We follow a systematic approach to ensure efficient and effective
              repairs for all vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="relative p-6 text-center bg-white rounded-lg shadow-md">
              <div className="absolute flex items-center justify-center w-8 h-8 font-bold text-white transform -translate-x-1/2 rounded-full -top-4 left-1/2 bg-primary">
                1
              </div>
              <h3 className="mt-4 mb-3 text-xl font-bold">Diagnosis</h3>
              <p className="text-slate-600">
                Our technicians perform a thorough inspection and diagnostics to
                identify the issue.
              </p>
            </div>

            <div className="relative p-6 text-center bg-white rounded-lg shadow-md">
              <div className="absolute flex items-center justify-center w-8 h-8 font-bold text-white transform -translate-x-1/2 rounded-full -top-4 left-1/2 bg-primary">
                2
              </div>
              <h3 className="mt-4 mb-3 text-xl font-bold">Cost Estimate</h3>
              <p className="text-slate-600">
                We provide a detailed cost estimate for the required repairs
                before proceeding.
              </p>
            </div>

            <div className="relative p-6 text-center bg-white rounded-lg shadow-md">
              <div className="absolute flex items-center justify-center w-8 h-8 font-bold text-white transform -translate-x-1/2 rounded-full -top-4 left-1/2 bg-primary">
                3
              </div>
              <h3 className="mt-4 mb-3 text-xl font-bold">Repair</h3>
              <p className="text-slate-600">
                Our skilled technicians perform the necessary repairs using
                quality parts and equipment.
              </p>
            </div>

            <div className="relative p-6 text-center bg-white rounded-lg shadow-md">
              <div className="absolute flex items-center justify-center w-8 h-8 font-bold text-white transform -translate-x-1/2 rounded-full -top-4 left-1/2 bg-primary">
                4
              </div>
              <h3 className="mt-4 mb-3 text-xl font-bold">Quality Check</h3>
              <p className="text-slate-600">
                We conduct thorough testing to ensure all repairs meet our
                high-quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Plans */}
      {/* <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Maintenance Plans</h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-700">
              Choose from our range of maintenance plans designed to keep your vehicles in optimal condition.
            </p>
          </div>

          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-1 mb-8 md:grid-cols-3">
              <TabsTrigger value="basic">Basic Plan</TabsTrigger>
              <TabsTrigger value="standard">Standard Plan</TabsTrigger>
              <TabsTrigger value="premium">Premium Plan</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="p-6 border rounded-lg">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-primary">Basic Maintenance Plan</h3>
                  <p className="mb-6 text-lg">
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
                    <p className="mb-2 text-3xl font-bold text-primary">
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

            <TabsContent value="standard" className="p-6 border rounded-lg">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-primary">Standard Maintenance Plan</h3>
                  <p className="mb-6 text-lg">
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
                    <p className="mb-2 text-3xl font-bold text-primary">
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

            <TabsContent value="premium" className="p-6 border rounded-lg">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-primary">Premium Maintenance Plan</h3>
                  <p className="mb-6 text-lg">
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
                    <p className="mb-2 text-3xl font-bold text-primary">
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
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How long does a typical repair take?
                </AccordionTrigger>
                <AccordionContent>
                  The duration of repairs varies depending on the complexity of
                  the issue and the availability of parts. Minor repairs can be
                  completed within a day, while more complex repairs may take
                  2-5 business days. We always provide an estimated timeline
                  during the initial diagnosis.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Do you provide warranty on repairs?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, all our repairs come with a standard 90-day warranty
                  covering both parts and labor. For certain components,
                  extended warranties may be available. Our maintenance plans
                  also include enhanced warranty options.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can you repair specialized refrigeration systems?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we specialize in repairing and maintaining refrigeration
                  systems for commercial vehicles. Our technicians are certified
                  and experienced in working with various refrigeration systems,
                  including Carrier and all custom-built units.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Do you offer mobile repair services?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer mobile repair services for emergency situations
                  and for clients with our Premium Maintenance Plan. Our mobile
                  technicians can perform many repairs on-site, minimizing
                  downtime for your vehicles.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  How do I schedule a repair service?
                </AccordionTrigger>
                <AccordionContent>
                  You can schedule a repair service by calling our service
                  department at +233 55 28 22 437, using our online booking form
                  on the contact page, or visiting our facility in person. For
                  maintenance plan members, we also offer priority scheduling.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white bg-primary">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">Need Emergency Repairs?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Our team is available 24/7 for emergency repair services. Contact us
            now for immediate assistance.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-slate-100"
            >
              <Phone className="w-4 h-4 mr-2" /> Call: +233 55 28 22 437
            </Button>
            <Link href="/contact?emergency=true">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                Request Emergency Service
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
