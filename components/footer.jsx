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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="text-white bg-slate-900">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">ADDFRA Limited</h3>
            <p className="text-slate-300">
              Specializing in customized automobiles, refrigerated trucks,
              trailers, and vans.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="transition-colors text-slate-300 hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/vehicles"
                  className="transition-colors text-slate-300 hover:text-primary"
                >
                  Vehicles
                </Link>
              </li>
              <li>
                <Link
                  href="/repairs"
                  className="transition-colors text-slate-300 hover:text-primary"
                >
                  Repair Services
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="transition-colors text-slate-300 hover:text-primary"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors text-slate-300 hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors text-slate-300 hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                {/* <MapPin className="block h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" /> */}
                <span className="text-slate-300"> Dansoman road Mataheko</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-300"> Akwei Link</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-300">Accra, Ghana</span>
              </li>
              <li className="flex items-center">
                {/* <Phone className="w-5 h-5 mr-2 text-primary shrink-0" /> */}
                <span className="text-slate-300">+233 55 282 2437</span>
              </li>
              <li className="flex items-center">
                {/* <Phone className="w-5 h-5 mr-2 text-primary shrink-0" /> */}
                <span className="text-slate-300">+233 24 385 8008</span>
              </li>
              <li className="flex items-center">
                {/* <Mail className="w-5 h-5 mr-2 text-primary shrink-0" /> */}
                <span className="text-slate-300">info@addfra.com</span>
              </li>
              <li className="flex items-center">
                <span className="text-slate-300"> addfra2@yahoo.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-slate-300">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="text-white bg-slate-800 border-slate-700"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-12 text-center border-t border-slate-800 text-slate-400">
          <p>
            © {new Date().getFullYear()} ADDFRA Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
