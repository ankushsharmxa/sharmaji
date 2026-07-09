import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  RotateCcw 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: "Electronics", href: "/category/electronics" },
      { label: "Groceries", href: "/category/groceries" },
      { label: "Fashion & Apparel", href: "/category/fashion" },
      { label: "Home Essentials", href: "/category/home-kitchen" },
    ],
    support: [
      { label: "Track Order", href: "/orders" },
      { label: "Shipping Policy", href: "#" },
      { label: "Returns & Exchanges", href: "#" },
      { label: "FAQs", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 text-gray-600">
      <Container>
        
        {/* Core Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-gray-100 mb-12">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary-50 text-primary-500 rounded-lg">
              <Truck size={24} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">Free & Fast Delivery</h4>
              <p className="text-xs text-gray-500">Free shipping on orders above ₹499 with lightning speed delivery.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary-50 text-primary-500 rounded-lg">
              <RotateCcw size={24} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">Easy 7-Day Returns</h4>
              <p className="text-xs text-gray-500">No questions asked return policy on damaged or unwanted items.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary-50 text-primary-500 rounded-lg">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">100% Safe Payments</h4>
              <p className="text-xs text-gray-500">Industry-standard encryption systems keeping all transactions safe.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Image 
              src="/logo.svg" 
              alt="SharmaJi Store" 
              width={200} 
              height={40} 
              className="h-10 w-auto"
            />
            <p className="text-sm text-gray-500 max-w-sm mt-2">
              Bringing premium quality grocery, electronics, and fashion items right to your doorstep. Experience modern online shopping at its finest.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <Link href="#" className="p-2 text-gray-400 hover:text-primary-500 hover:bg-primary-50 rounded-full transition-all">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="p-2 text-gray-400 hover:text-primary-500 hover:bg-primary-50 rounded-full transition-all">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="p-2 text-gray-400 hover:text-primary-500 hover:bg-primary-50 rounded-full transition-all">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="p-2 text-gray-400 hover:text-primary-500 hover:bg-primary-50 rounded-full transition-all">
                <Youtube size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Shop Categories</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Customer Support</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-4 text-sm">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Contact Us</h4>
            <div className="flex items-start gap-2.5">
              <MapPin size={16} className="text-primary-500 mt-0.5 flex-shrink-0" />
              <span>123, VIP Main Road, Sector 5, Kolkata, India</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone size={16} className="text-primary-500 flex-shrink-0" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={16} className="text-primary-500 flex-shrink-0" />
              <span>support@sharmaji.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {currentYear} SharmaJi Store. All rights reserved. Created for demonstration purposes.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-primary-500">Terms of Use</Link>
            <Link href="#" className="hover:text-primary-500">Sitemap</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
