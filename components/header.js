"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const nav = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/courses", label: "Courses" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-14 h-14 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Image
              src="/genez1.png"
              alt="Genez Learnings Logo"
              width={56}
              height={56}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-700">Gene Z Learnings</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => {
            const isActive =
              pathname === n.href ||
              (n.href !== "/" && pathname.startsWith(n.href));

            return (
              <Link
                key={n.href}
                href={n.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#7b2979] border-b-2 border-[#7b2979] pb-1"
                    : "text-gray-700 hover:text-[#7b2979]"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#7b2979] text-white px-6 py-2.5 text-sm font-semibold hover:bg-[#6a2268] transition-colors shadow-sm"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setOpen((s) => !s)}
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={open ? "open" : "closed"}
          >
            <motion.path
              variants={{
                closed: { d: "M3 12h18" },
                open: { d: "M18 6L6 18" },
              }}
            />
            <motion.path
              variants={{
                closed: { opacity: 1, d: "M3 6h18" },
                open: { opacity: 0, d: "M12 12h0" },
              }}
            />
            <motion.path
              variants={{
                closed: { d: "M3 18h18" },
                open: { d: "M6 6l12 12" },
              }}
            />
          </motion.svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-100 bg-white overflow-hidden"
          >
            <div className="container py-4 grid gap-1">
              {nav.map((n) => {
                const isActive =
                  pathname === n.href ||
                  (n.href !== "/" && pathname.startsWith(n.href));

                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    className={`py-3 px-4 rounded-lg transition-colors ${
                      isActive
                        ? "text-[#7b2979] bg-purple-50 font-semibold"
                        : "text-gray-700 hover:text-[#7b2979] hover:bg-purple-50"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {n.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-2 py-3 px-4 bg-[#7b2979] text-white text-center rounded-lg font-semibold hover:bg-[#6a2268] transition-colors"
                onClick={() => setOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
