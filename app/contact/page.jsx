// Path: app\contact\page.jsx
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full bg-gradient-to-r from-slate-900 to-slate-800 flex items-center">
        <div className="absolute inset-0 opacity-30 bg-[url('/contact-us.jpg?height=800&width=1600')] bg-cover bg-center"></div>
        <div className="container z-10 px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Contact Us
            </h1>
            <p className="text-xl text-slate-200">
              Get in touch with our team for inquiries, quotes, or support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <Card className="transition-shadow bg-white shadow-md hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Phone</h3>
                <p className="text-slate-700"> +233 55 28 22 437</p>
                <p className="text-slate-700"> +233 24 38 58 008</p>
                <p className="text-slate-700"></p>
              </CardContent>
            </Card>
            <Card className="transition-shadow bg-white shadow-md hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Email</h3>
                <p className="text-slate-700">info@addfra.com</p>
                <p className="text-slate-700"> addfra2@yahoo.com</p>
              </CardContent>
            </Card>
            <Card className="transition-shadow bg-white shadow-md hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Location</h3>
                <p className="text-slate-700"> Dansoman road Mataheko</p>
                <p className="text-slate-700">Akwei Link</p>
                <p className="text-slate-700">Accra, Ghana</p>
              </CardContent>
            </Card>
            <Card className="transition-shadow bg-white shadow-md hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Business Hours</h3>
                <p className="text-slate-700">Monday - Friday: 8am - 5pm</p>
                <p className="text-slate-700">Saturday: 9am - 2pm</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-12 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
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
                      <SelectItem value="custom">
                        Custom Vehicle Request
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Our Location</h2>
              <div className="overflow-hidden aspect-video rounded-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0209959115814!2d-0.25397392501478405!3d5.563905494416596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf97b82c735065%3A0x8a8c9acd75a08eef!2sADDFRA%20LTD!5e0!3m2!1sen!2sgh!4v1745015267750!5m2!1sen!2sgh"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Venue Location"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-6">
                <h3 className="mb-2 text-lg font-semibold">Directions</h3>
                <p className="mb-4 text-slate-700">
                  Our facility is located in Dansoman road Mataheko Akwei Link,
                  easily accessible from the main highway. Look for the blue
                  ADDFRA sign at the entrance.
                </p>
                <p className="text-slate-700">
                  Parking is available on-site for visitors. If you need
                  assistance finding us, please call our office at  +233 55 28 22 437
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-6 text-2xl font-bold text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                What are your business hours?
              </h3>
              <p className="text-slate-700">
                Our office and workshop are open Monday to Friday from 8am to
                5pm, and Saturday from 9am to 2pm. We are closed on Sundays and
                public holidays.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                How long does it take to get a quote?
              </h3>
              <p className="text-slate-700">
                For standard inquiries, we typically provide quotes within 24-48
                hours. For more complex custom vehicle requests, it may take 3-5
                business days to prepare a detailed quote.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                Do you offer after-sales service?
              </h3>
              <p className="text-slate-700">
                Yes, we provide comprehensive after-sales service for all our
                vehicles. This includes maintenance, repairs, and technical
                support to ensure your vehicle continues to perform optimally.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                Can I visit your workshop?
              </h3>
              <p className="text-slate-700">
                Yes, clients are welcome to visit our workshop by appointment.
                This gives you the opportunity to see our facilities, meet our
                team, and discuss your requirements in person.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
