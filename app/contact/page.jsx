import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full bg-gradient-to-r from-slate-900 to-slate-800 flex items-center">
        <div className="absolute inset-0 opacity-30 bg-[url('/contact-us.jpg?height=800&width=1600')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-slate-200">Get in touch with our team for inquiries, quotes, or support.</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-slate-700">+233 123 456 789</p>
                <p className="text-slate-700">+233 987 654 321</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-slate-700">info@addfra.com</p>
                <p className="text-slate-700">sales@addfra.com</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-slate-700">123 Industrial Area</p>
                <p className="text-slate-700">Accra, Ghana</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                <p className="text-slate-700">Monday - Friday: 8am - 5pm</p>
                <p className="text-slate-700">Saturday: 9am - 2pm</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email address" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Select>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="sales">Sales Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="custom">Custom Vehicle Request</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" rows={6} required />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Location</h2>
              <div className="h-[400px] bg-slate-200 rounded-lg overflow-hidden">
                {/* Replace with actual Google Map embed */}
                <div className="w-full h-full flex items-center justify-center bg-slate-300">
                  <p className="text-slate-600">Google Map would be embedded here</p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Directions</h3>
                <p className="text-slate-700 mb-4">
                  Our facility is located in the Industrial Area of Accra, easily accessible from the main highway. Look
                  for the blue ADDFRA sign at the entrance.
                </p>
                <p className="text-slate-700">
                  Parking is available on-site for visitors. If you need assistance finding us, please call our office
                  at +233 123 456 789.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">What are your business hours?</h3>
              <p className="text-slate-700">
                Our office and workshop are open Monday to Friday from 8am to 5pm, and Saturday from 9am to 2pm. We are
                closed on Sundays and public holidays.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">How long does it take to get a quote?</h3>
              <p className="text-slate-700">
                For standard inquiries, we typically provide quotes within 24-48 hours. For more complex custom vehicle
                requests, it may take 3-5 business days to prepare a detailed quote.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Do you offer after-sales service?</h3>
              <p className="text-slate-700">
                Yes, we provide comprehensive after-sales service for all our vehicles. This includes maintenance,
                repairs, and technical support to ensure your vehicle continues to perform optimally.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Can I visit your workshop?</h3>
              <p className="text-slate-700">
                Yes, clients are welcome to visit our workshop by appointment. This gives you the opportunity to see our
                facilities, meet our team, and discuss your requirements in person.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

