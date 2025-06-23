// Path: components\footer.jsx
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src="/logo.jpg" 
                className="h-10 w-auto mr-3" 
                alt="ADDFRA Logo"
              />
              <span className="text-xl font-bold text-white">ADDFRA</span>
            </div>
            <p className="leading-relaxed">
              Specializing in customized automobiles, refrigerated trucks,
              trailers, and vans with premium quality and service.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, url: "https://facebook.com" },
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Linkedin, url: "https://linkedin.com" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Vehicles", href: "/vehicles" },
                { name: "Repair Services", href: "/repairs" },
                { name: "Shop", href: "/shop" },
                { name: "Blog", href: "/blog" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-primary flex items-center"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="flex-shrink-0 w-5 h-5 mt-1 text-primary" />
                <div className="ml-3">
                  <p className="text-sm leading-relaxed">
                    Dansoman Road, Mataheko
                    <br />
                    Akwei Link
                    <br />
                    Accra, Ghana
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="flex-shrink-0 w-5 h-5 text-primary" />
                <div className="ml-3 space-y-1">
                  <a href="tel:+233552822437" className="block hover:text-primary transition-colors">
                    +233 55 282 2437
                  </a>
                  <a href="tel:+233243858008" className="block hover:text-primary transition-colors">
                    +233 24 385 8008
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="flex-shrink-0 w-5 h-5 text-primary" />
                <div className="ml-3 space-y-1">
                  <a href="mailto:info@addfra.com" className="block hover:text-primary transition-colors">
                    info@addfra.com
                  </a>
                  <a href="mailto:addfra2@yahoo.com" className="block hover:text-primary transition-colors">
                    addfra2@yahoo.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="flex-shrink-0 w-5 h-5 mt-1 text-primary" />
                <div className="ml-3">
                  <p className="text-sm">Mon-Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-sm">Sat: 9:00 AM - 1:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">
              Newsletter
            </h3>
            <p className="leading-relaxed">
              Subscribe to our newsletter for the latest updates, offers, and automotive tips.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white focus:ring-primary focus:border-primary"
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-12 mt-12 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm">
              © {new Date().getFullYear()} ADDFRA Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}