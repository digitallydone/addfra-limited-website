// Path: app\about\page.jsx
import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full bg-gradient-to-r from-slate-900 to-slate-800 flex items-center">
        <div className="absolute inset-0 opacity-30 bg-[url('/worker-about1.jpg?height=800&width=1600')] bg-cover bg-center"></div>
        <div className="container z-10 px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              About ADDFRA Limited
            </h1>
            <p className="text-xl text-slate-200">
              Ghana's premier automobile customization company with a commitment
              to quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                Our Story
              </h2>
              <p className="mb-6 text-lg text-slate-700">
                ADDFRA LTD began in 2011, focusing on high-quality truck bodies
                and insulated boxes. We partnered with CARRIER TRANSICOLD EUROPE
                (France) as their sole distributor and official service center
                in Ghana, with our technicians trained by their experts.
              </p>
              <p className="mb-6 text-lg text-slate-700">
                In 2016, we became a Limited Liability Company. We've served
                clients in Togo, Benin, Nigeria, and Sierra Leone, and now
                produce up to 500 vehicles annually with a team of over 60
                staff.
              </p>

              {/*        <p className="mb-6 text-lg text-slate-700">
                ADDFRA LTD was established in the year 2011 as an enterprise.
                Based on quality improvement on our special truck bodies and
                also into insulated boxes we entered into a partnership
                agreement with CARRIER TRANSICOLD EUROPE (France) as the sole
                distributor & official service center for CARRIER TRANSICOLD
                Transport refrigeration system in Ghana with well-trained
                technicians trained by our partners from CARRIER TRANSICOLD
                EUROPE (FRANCE).
              </p>
              <p className="mb-6 text-lg text-slate-700">
                In 2016, we registered as a Limited Liability Company. We have
                built truck bodies and refrigeration units for clients in other
                countries like Togo, Benin, Nigeria, and Sierra Leone. With our
                current production capacity of 500 vehicles per year, we have
                added over 60 employees (Both permanent and contract workers) to
                our workforce.
              </p> */}
              {/*  <p className="mb-6 text-lg text-slate-700">
                Founded in 2011, ADDFRA Limited began as a small workshop,
                specializing in vehicle body fabrications. Over the years, we
                have grown into a leading automobile customization company in
                Ghana, serving clients both locally and internationally.
              </p>
              <p className="mb-6 text-lg text-slate-700">
                Our journey has been driven by a passion for innovation and a
                committed to delivering quality services. We identified a gap in
                the market for specialized vehicles, particularly trucks bodies,
                and set out to fill this need with custom-built solutions that
                meet the highest standards.
              </p> */}
              <p className="text-lg text-slate-700">
                Today, ADDFRA Limited is recognized as a trusted partner for
                businesses and individuals seeking customized automobile
                solutions. Our team of skilled engineers, technicians, and
                designers work together to create vehicles that not only meet
                but exceed our clients' expectations.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img
                // src="/worker-about2.jpg?height=600&width=800"
                src="/worker-about3.jpg?height=600&width=800"
                alt="ADDFRA workshop"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <Card className="p-8 bg-white shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-primary">
                Our Mission
              </h3>
              <p className="mb-6 text-lg text-slate-700">
                To provide high-quality, customized automobile solutions that
                meet the specific needs of our clients, while maintaining the
                highest standards of craftsmanship, innovation, and customer
                service.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    Deliver exceptional quality in every vehicle we build
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    Provide personalized solutions tailored to client needs
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    Maintain transparent communication throughout the process
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    Ensure timely delivery and excellent after-sales support
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-white shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-primary">
                Our Vision
              </h3>
              <p className="mb-6 text-lg text-slate-700">
                To be the leading provider of customized automobile solutions in
                Africa, recognized for our innovation, quality, and commitment
                to customer satisfaction.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    Expand our reach across the African continent
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    Continuously innovate and improve our designs
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    Invest in sustainable and eco-friendly solutions
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                  <span className="text-slate-700">
                    Build lasting relationships with clients and partners
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-slate-900">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="p-8 text-center transition-shadow bg-white shadow-lg hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-4 text-xl font-bold">Excellence</h3>
                <p className="text-slate-700">
                  We strive for excellence in everything we do, from the quality
                  of our materials to the precision of our craftsmanship and the
                  service we provide to our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center transition-shadow bg-white shadow-lg hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-4 text-xl font-bold">Integrity</h3>
                <p className="text-slate-700">
                  We conduct our business with honesty, transparency, and
                  ethical practices, building trust with our clients, partners,
                  and employees.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center transition-shadow bg-white shadow-lg hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-4 text-xl font-bold">Innovation</h3>
                <p className="text-slate-700">
                  We embrace innovation and continuously seek new ways to
                  improve our designs, processes, and services to deliver the
                  best possible solutions to our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-slate-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-slate-900">Our Leadership Team</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            Team Member 1
            <div className="overflow-hidden bg-white rounded-lg shadow-lg">
              <div className="h-64 overflow-hidden">
                <img src="/placeholder.svg?height=400&width=300" alt="CEO" className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">Daniel Addo</h3>
                <p className="mb-4 text-primary">Founder & CEO</p>
                <p className="text-sm text-slate-700">
                  With over 20 years of experience in the automotive industry, Daniel leads our company with vision and
                  expertise.
                </p>
              </div>
            </div>

            Team Member 2
            <div className="overflow-hidden bg-white rounded-lg shadow-lg">
              <div className="h-64 overflow-hidden">
                <img src="/placeholder.svg?height=400&width=300" alt="CTO" className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">Francis Mensah</h3>
                <p className="mb-4 text-primary">Chief Technical Officer</p>
                <p className="text-sm text-slate-700">
                  Francis oversees all technical aspects of our vehicle customization, bringing innovation to every
                  project.
                </p>
              </div>
            </div>

            Team Member 3
            <div className="overflow-hidden bg-white rounded-lg shadow-lg">
              <div className="h-64 overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Operations Director"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">Abena Frimpong</h3>
                <p className="mb-4 text-primary">Operations Director</p>
                <p className="text-sm text-slate-700">
                  Abena ensures smooth operations across all departments, maintaining our high standards of quality.
                </p>
              </div>
            </div>

            Team Member 4
            <div className="overflow-hidden bg-white rounded-lg shadow-lg">
              <div className="h-64 overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Sales Manager"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">Kwame Osei</h3>
                <p className="mb-4 text-primary">Sales & Marketing Director</p>
                <p className="text-sm text-slate-700">
                  Kwame leads our sales and marketing efforts, building strong relationships with clients across Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-slate-900">
            Our Journey
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute w-1 h-full transform -translate-x-1/2 left-1/2 bg-primary/20"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {/* 2011 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-primary">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-xl font-bold text-primary">2011</h3>
                    <h4 className="mb-2 text-lg font-semibold">
                      Company Founded
                    </h4>
                    <p className="text-slate-700">
                      ADDFRA Limited was established as a small fabrication
                      workshop in Accra, Ghana.
                    </p>
                  </div>
                  {/* <div className="md:pl-12">
                    <img
                      src="/our-journey-1.jpg?height=300&width=400"
                      alt="Company founding"
                      className="rounded-lg shadow-md"
                    />
                  </div> */}
                </div>
              </div>

              {/* 2013 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-primary">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/*  <div className="order-2 md:text-right md:pr-12 md:order-1">
                    <img
                      src="/shop-img.jpg?height=300&width=400"
                      alt="First refrigerated truck"
                      className="rounded-lg shadow-md md:ml-auto"
                    />
                  </div> */}
                  <div className="order-1 md:pl-12 md:order-2">
                    <h3 className="text-xl font-bold text-primary">2013</h3>
                    <h4 className="mb-2 text-lg font-semibold">
                      First Custom Refrigerated Truck
                    </h4>
                    <p className="text-slate-700">
                      Completed our first custom refrigerated truck project,
                      marking our entry into specialized vehicle customization.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2016 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-primary">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-xl font-bold text-primary">2016</h3>
                    <h4 className="mb-2 text-lg font-semibold">
                      Expanded Facility
                    </h4>
                    <p className="text-slate-700">
                      Moved to a larger facility to accommodate growing demand
                      and expanded our team of skilled technicians.
                    </p>
                  </div>
                  {/*  <div className="md:pl-12">
                    <img
                      src="/site-facilty1.jpg?height=300&width=400"
                      alt="Expanded facility"
                      className="rounded-lg shadow-md"
                    />
                  </div> */}
                </div>
              </div>

              {/* 2019 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-primary">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/*   <div className="order-2 md:text-right md:pr-12 md:order-1">
                    <img
                      src="/team-int1.jpg?height=300&width=400"
                      alt="International expansion"
                      className="rounded-lg shadow-md md:ml-auto"
                    />
                  </div> */}
                  <div className="order-1 md:pl-12 md:order-2">
                    <h3 className="text-xl font-bold text-primary">2019</h3>
                    <h4 className="mb-2 text-lg font-semibold">
                      International Expansion
                    </h4>
                    <p className="text-slate-700">
                      Began serving clients in neighboring countries,
                      establishing ADDFRA as a regional leader in vehicle
                      customization.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2022 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-primary">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-xl font-bold text-primary">2022</h3>
                    <h4 className="mb-2 text-lg font-semibold">
                      E-commerce Launch
                    </h4>
                    <p className="text-slate-700">
                      Launched our e-commerce platform to offer vehicle parts,
                      accessories, and tools to customers across Africa.
                    </p>
                  </div>
                  {/*   <div className="md:pl-12">
                    <img
                      src="/ecom-p.jpg?height=300&width=400"
                      alt="E-commerce launch"
                      className="rounded-lg shadow-md"
                    />
                  </div> */}
                </div>
              </div>

              {/* Today */}
              <div className="relative">
                <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-primary">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/*     <div className="order-2 md:text-right md:pr-12 md:order-1">
                    <img
                      src="/trunk-h.jpg?height=300&width=400"
                      alt="Present day"
                      className="rounded-lg shadow-md md:ml-auto"
                    />
                  </div> */}
                  <div className="order-1 md:pl-12 md:order-2">
                    <h3 className="text-xl font-bold text-primary">Today</h3>
                    <h4 className="mb-2 text-lg font-semibold">
                      Leading the Industry
                    </h4>
                    <p className="text-slate-700">
                      Today, ADDFRA Limited stands as a leader in automobile
                      customization, with a reputation for quality, innovation,
                      and exceptional customer service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white bg-primary">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Work With Us?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Contact our team today to discuss your custom vehicle needs or to
            learn more about our services.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-slate-100"
            >
              Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
