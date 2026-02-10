"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ShoppingCart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Catalog", href: "/catalog" },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/reviews" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-none"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-primary text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <a
            href="tel:+18055443565"
            className="flex items-center gap-2 transition-colors hover:text-secondary"
          >
            <Phone className="h-4 w-4" />
            <span>(805) 544-3565</span>
          </a>
          <Link
            href="/contact"
            className="rounded-sm bg-secondary px-4 py-1 font-semibold text-primary transition-colors hover:bg-secondary/80"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between py-4">
          {/* Brand */}
          <Link href="/">
            <Image
              src="/images/logo-blue.svg"
              alt="SLO Spas - Authorized Jacuzzi Dealer"
              width={150}
              height={55}
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-sm font-medium text-primary transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:text-accent hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Cart Icon & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Shopping Cart */}
            <Link
              href="/cart"
              className="relative text-primary transition-colors hover:text-accent"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-primary">
                0
              </span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="text-primary md:hidden"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 pb-4 md:hidden">
            <ul className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-md px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5 hover:text-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 border-t border-gray-200 px-4 pt-3">
              <a
                href="tel:+18055443565"
                className="flex items-center gap-2 text-sm text-primary transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4" />
                <span>(805) 544-3565</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
