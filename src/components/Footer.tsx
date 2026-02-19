import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-4">SLO SPAS</h3>
            <p className="text-gray-300">
              Your Central Coast Wellness Destination. Authorized Jacuzzi dealer
              serving San Luis Obispo County since 1986.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.instagram.com/slospas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Catalog", href: "/catalog" },
                { label: "Projects", href: "/projects" },
                { label: "Reviews", href: "/reviews" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-gray-300">
                  3035 Broad St, San Luis Obispo, CA 93401
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <a
                  href="tel:+18055443565"
                  className="text-gray-300 hover:text-secondary transition"
                >
                  (805) 544-3565
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <a
                  href="mailto:Dane@slospas.com"
                  className="text-gray-300 hover:text-secondary transition"
                >
                  Dane@slospas.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-4">Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                <div className="text-gray-300 space-y-1">
                  <p>Mon: Closed</p>
                  <p>Tue-Fri: 10 AM - 5 PM</p>
                  <p>Sat: 10 AM - 4 PM</p>
                  <p>Sun: By Appointment Only</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} SLO Spas. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">Authorized Jacuzzi Dealer</p>
        </div>
      </div>
    </footer>
  );
}
