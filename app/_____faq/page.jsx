import Link from "next/link"
import { Search, ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample FAQ data
const faqCategories = [
  {
    id: "general",
    name: "General Questions",
    faqs: [
      {
        question: "What services does ADDFRA Limited offer?",
        answer:
          "ADDFRA Limited specializes in customized automobile solutions, including the design and building of refrigerated trucks, trailers, and vans. We also offer vehicle repair services, parts and accessories sales, and maintenance programs for commercial vehicles.",
      },
      {
        question: "Where is ADDFRA Limited located?",
        answer:
          "Our main facility is located in the Industrial Area of Accra, Ghana. We serve clients throughout Ghana and across other African countries.",
      },
      {
        question: "What are your business hours?",
        answer:
          "Our office and workshop are open Monday to Friday from 8am to 5pm, and Saturday from 9am to 2pm. We are closed on Sundays and public holidays.",
      },
      {
        question: "Do you offer international shipping for your vehicles?",
        answer:
          "Yes, we offer international shipping and delivery services for our custom vehicles. The cost and timeline depend on the destination country. Our logistics team handles all necessary paperwork and arrangements for a smooth delivery process.",
      },
      {
        question: "How can I contact ADDFRA Limited?",
        answer:
          "You can contact us by phone at +233 123 456 789, by email at info@addfra.com, or by visiting our facility in person. You can also use the contact form on our website to send us a message.",
      },
    ],
  },
  {
    id: "vehicles",
    name: "Custom Vehicles",
    faqs: [
      {
        question: "What types of custom vehicles do you build?",
        answer:
          "We specialize in refrigerated trucks, specialized trailers, delivery vans, mobile workshops, and other customized commercial vehicles. We can build vehicles according to your specific requirements and operational needs.",
      },
      {
        question: "How long does it take to build a custom vehicle?",
        answer:
          "The timeline for building a custom vehicle typically ranges from 4 to 12 weeks, depending on the complexity of the customization, the availability of parts, and our current production schedule. We provide a detailed timeline during the initial consultation.",
      },
      {
        question: "Can you customize existing vehicles?",
        answer:
          "Yes, we can customize existing vehicles to meet your specific requirements. This includes adding refrigeration systems, specialized storage compartments, loading equipment, and other modifications to enhance functionality.",
      },
      {
        question: "What warranty do you offer on custom vehicles?",
        answer:
          "All our custom vehicles come with a standard 1-year warranty covering manufacturing defects and workmanship. Extended warranty options are available for purchase. Please contact our sales team for more details.",
      },
      {
        question: "Do you offer financing options for vehicle purchases?",
        answer:
          "Yes, we work with several financial institutions to provide flexible financing options for our customers. Our team can help you find the best financing solution based on your budget and requirements.",
      },
    ],
  },
  {
    id: "repairs",
    name: "Repairs & Maintenance",
    faqs: [
      {
        question: "What types of repairs do you offer?",
        answer:
          "We offer a comprehensive range of repair services, including mechanical repairs, refrigeration system maintenance, electrical system diagnostics, hydraulic system repairs, and general vehicle maintenance. Our skilled technicians are trained to work on various types of commercial vehicles.",
      },
      {
        question: "How long does a typical repair take?",
        answer:
          "The duration of repairs varies depending on the complexity of the issue and the availability of parts. Minor repairs can be completed within a day, while more complex repairs may take 2-5 business days. We always provide an estimated timeline during the initial diagnosis.",
      },
      {
        question: "Do you provide warranty on repairs?",
        answer:
          "Yes, all our repairs come with a standard 90-day warranty covering both parts and labor. For certain components, extended warranties may be available. Our maintenance plans also include enhanced warranty options.",
      },
      {
        question: "Do you offer mobile repair services?",
        answer:
          "Yes, we offer mobile repair services for emergency situations and for clients with our Premium Maintenance Plan. Our mobile technicians can perform many repairs on-site, minimizing downtime for your vehicles.",
      },
      {
        question: "What maintenance plans do you offer?",
        answer:
          "We offer three maintenance plans: Basic, Standard, and Premium. The Basic Plan covers essential maintenance services like oil changes and safety inspections. The Standard Plan includes more comprehensive services such as brake system maintenance and air conditioning checks. The Premium Plan offers the most complete coverage, including refrigeration system maintenance and 24/7 emergency roadside assistance.",
      },
    ],
  },
  {
    id: "shop",
    name: "Shop & Parts",
    faqs: [
      {
        question: "What types of parts and accessories do you sell?",
        answer:
          "We sell a wide range of parts and accessories for commercial vehicles, including refrigeration components, hydraulic systems, electrical parts, tools, and general vehicle accessories. All our products are sourced from reputable manufacturers and meet industry standards.",
      },
      {
        question: "Do you ship parts internationally?",
        answer:
          "Yes, we ship parts and accessories to customers internationally. Shipping costs and delivery times vary depending on the destination. Please contact our sales team for specific shipping information for your location.",
      },
      {
        question: "What is your return policy for parts and accessories?",
        answer:
          "We accept returns of unused and unopened parts within 30 days of purchase. Custom-ordered parts may not be eligible for return unless they are defective. Please contact our customer service team for assistance with returns.",
      },
      {
        question: "Do you offer bulk discounts for parts orders?",
        answer:
          "Yes, we offer discounts for bulk orders of parts and accessories. The discount percentage depends on the order value and the specific items ordered. Please contact our sales team for more information on bulk pricing.",
      },
      {
        question: "Can you source specific parts that are not listed in your shop?",
        answer:
          "Yes, we can source specific parts that may not be listed in our shop. Our extensive network of suppliers allows us to find rare or specialized parts for various vehicle makes and models. Please contact us with your specific requirements.",
      },
    ],
  },
  {
    id: "payment",
    name: "Payment & Shipping",
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept various payment methods, including credit/debit cards, bank transfers, mobile money, and Paystack payments. For large orders or custom vehicle projects, we also offer payment plans and financing options.",
      },
      {
        question: "Is my payment information secure?",
        answer:
          "Yes, we use industry-standard encryption and security measures to protect your payment information. Our payment processing is handled by secure third-party providers like Paystack, ensuring that your financial data is kept safe.",
      },
      {
        question: "Do you offer free shipping?",
        answer:
          "We offer free shipping on orders over $500 within Ghana. For international shipping and orders below $500, shipping costs are calculated based on weight, dimensions, and destination. Shipping costs are displayed at checkout before payment.",
      },
      {
        question: "How long does shipping take?",
        answer:
          "Shipping times vary depending on your location. Orders within Accra typically arrive within 1-2 business days. Orders to other parts of Ghana may take 2-5 business days. International shipping can take 7-21 business days, depending on the destination and customs processing.",
      },
      {
        question: "Can I track my order?",
        answer:
          "Yes, once your order is shipped, you will receive a tracking number via email. You can use this tracking number on our website or the carrier's website to track the status and location of your order.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full bg-gradient-to-r from-slate-900 to-slate-800 flex items-center">
        <div className="absolute inset-0 opacity-30 bg-[url('/faqs.jpg?height=800&width=1600')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-slate-200">
              Find answers to common questions about our services, products, and processes.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">How can we help you?</h2>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <Input type="search" placeholder="Search for answers..." className="pl-10 py-6 text-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              {faqCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {faqCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-slate-700">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Still Have Questions?</h2>
            <p className="text-slate-700">
              If you couldn't find the answer to your question, please contact us directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-slate-700 mb-4">Speak directly with our customer service team.</p>
              <p className="font-medium">+233 123 456 789</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-slate-700 mb-4">Send us your questions and we'll respond promptly.</p>
              <p className="font-medium">info@addfra.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Link href="/contact" className="block">
                <ArrowRight className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Contact Form</h3>
                <p className="text-slate-700 mb-4">Fill out our contact form with your specific inquiry.</p>
                <Button>Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

