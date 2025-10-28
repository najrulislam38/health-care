import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full py-12 px-8">
      <div className="w-full">
        {/* Main Footer Content */}
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
            {/* Brand Section */}
            <div className="space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 relative flex-shrink-0">
                  <Stethoscope
                    className="w-full h-full text-blue-500"
                    strokeWidth={2}
                  />
                </div>
                <span className="text-white font-['Inter:Bold',sans-serif] text-[20.4px] leading-[32px]">
                  Health-Care
                </span>
              </div>

              {/* Description */}
              <div className="text-gray-400 text-[13.6px] leading-[24px] max-w-[280px]">
                <p>AI-powered healthcare matching</p>
                <p>platform connecting patients with the</p>
                <p>perfect doctors.</p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="w-5 h-5 text-gray-300 hover:text-white transition-colors"
                >
                  <Facebook className="w-full h-full" strokeWidth={2} />
                </Link>
                <Link
                  href="#"
                  className="w-5 h-5 text-gray-300 hover:text-white transition-colors"
                >
                  <Twitter className="w-full h-full" strokeWidth={2} />
                </Link>
                <Link
                  href="#"
                  className="w-5 h-5 text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-full h-full" strokeWidth={2} />
                </Link>
                <Link
                  href="#"
                  className="w-5 h-5 text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-full h-full" strokeWidth={2} />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-5">
              <h3 className="text-white font-['Inter:Bold',sans-serif] text-[13.6px] leading-[24px]">
                Quick Links
              </h3>
              <nav className="flex flex-col gap-4">
                <Link
                  href="#"
                  className="text-gray-300 text-[13.6px] leading-[24px] hover:text-white transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 text-[13.6px] leading-[24px] hover:text-white transition-colors"
                >
                  How It Works
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 text-[13.6px] leading-[24px] hover:text-white transition-colors"
                >
                  Find Doctors
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 text-[13.6px] leading-[24px] hover:text-white transition-colors"
                >
                  Specialties
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 text-[13.6px] leading-[24px] hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </nav>
            </div>

            {/* Support */}
            <div className="space-y-5">
              <h3 className="text-white font-['Inter:Bold',sans-serif] text-[13.6px] leading-[24px]">
                Support
              </h3>
              <nav className="flex flex-col gap-4">
                <Link
                  href="#"
                  className="text-gray-300 text-[13.6px] leading-[24px] hover:text-white transition-colors"
                >
                  Help Center
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 text-[13.6px] leading-[24px] hover:text-white transition-colors"
                >
                  FAQs
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 text-[13.6px] leading-[24px] hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 text-[13.6px] leading-[24px] hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-gray-300  text-[13.6px] leading-[24px] hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-5">
              <h3 className="text-white font-['Inter:Bold',sans-serif] text-[13.6px] leading-[24px]">
                Contact Info
              </h3>
              <div className="flex flex-col gap-6">
                {/* Address */}
                <div className="flex gap-3">
                  <MapPin
                    className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <div className="text-gray-300 text-[13.6px] leading-[24px]">
                    <p>123 Healthcare Ave, Medical</p>
                    <p>District, NY 10001</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3 items-start">
                  <Phone
                    className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <span className="text-gray-300 text-[13.6px] leading-[24px]">
                    +1 (555) 123-4567
                  </span>
                </div>

                {/* Email */}
                <div className="flex gap-3 items-start">
                  <Mail
                    className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <span className="text-gray-300  text-[13.6px] leading-[24px]">
                    support@health-care.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400  text-[13.6px] leading-[24px] text-center">
            © 2024 Health-Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
