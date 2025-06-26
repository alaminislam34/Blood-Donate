// components/Footer.tsx

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold text-red-500">BloodDonate</h2>
          <p className="mt-2 text-sm">
            A platform to find and request blood donors easily. Save lives,
            spread love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-red-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/donors" className="hover:text-red-500">
                Donors
              </Link>
            </li>
            <li>
              <Link href="/request" className="hover:text-red-500">
                Request Blood
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-red-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:support@blooddonate.com"
              className="hover:text-red-400"
            >
              support@blooddonate.com
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-xl hover:text-red-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-xl hover:text-red-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-xl hover:text-red-500">
              <FaInstagram />
            </a>
            <a
              href="mailto:support@blooddonate.com"
              className="text-xl hover:text-red-500"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} BloodDonate. All rights reserved.
      </div>
    </footer>
  );
}
