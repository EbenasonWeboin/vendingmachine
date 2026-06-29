"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { colors } from "../Colors/Colors";

const { primaryColor, secondaryColor, lightPrimary, darkPrimary, darkText } = colors;

const navLinks = [
  { name: "Home", href: "#home", section: "home" },
  { name: "Machines", href: "#machines", section: "machines" },
  { name: "Technology", href: "#technology", section: "technology" },
  { name: "Solutions", href: "#solutions", section: "solutions" },
  { name: "Contact", href: "#contact", section: "contact" },
];

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function rgba(hex, alpha) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredLink, setHoveredLink] = useState(null);
  const indicatorRef = useRef(null);
  const linkRefs = useRef({});

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.section);
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const target = hoveredLink ?? activeSection;
    const el = linkRefs.current[target];
    const indicator = indicatorRef.current;
    if (!el || !indicator) return;

    const rect = el.getBoundingClientRect();
    const parentRect = el.parentElement?.parentElement?.getBoundingClientRect();
    if (!parentRect) return;

    indicator.style.width = `${rect.width + 24}px`;
    indicator.style.left = `${rect.left - parentRect.left - 12}px`;
  }, [activeSection, hoveredLink]);

  return (
    <>
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-auto">
        <div
          className="flex items-center gap-2 px-4 py-3 rounded-full"
          style={{
            background: rgba(darkPrimary, 0.01),
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: `1px solid ${rgba(secondaryColor, 0.12)}`,
            boxShadow: `0 18px 70px ${rgba(darkText, 0.45)}, 0 0 0 1px ${rgba(primaryColor, 0.08)}, inset 0 1px 0 ${rgba(secondaryColor, 0.08)}`,
          }}
        >
          <a href="/" className="flex items-center gap-2 mr-3 shrink-0">
            <div
              className="w-9 h-9 rounded-full  flex items-center justify-center font-bold text-base shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}, ${lightPrimary})`,
                color: secondaryColor,
              }}
            >
              V
            </div>
            <span
              className="text-base font-bold tracking-tight hidden sm:block"
              style={{ color: secondaryColor }}
            >
              VendMac
            </span>
          </a>

          <div
            className="w-px h-6 mr-2 hidden md:block"
            style={{ background: rgba(darkText, 0.1) }}
          />

          <ul className="hidden md:flex items-center gap-1 relative">
            <span
              ref={indicatorRef}
              className="absolute top-0 h-full rounded-full transition-all duration-300 ease-out pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${rgba(lightPrimary, 0.2)}, ${rgba(primaryColor, 0.28)})`,
                border: `1px solid ${rgba(secondaryColor, 0.12)}`,
                boxShadow: `0 0 24px ${rgba(lightPrimary, 0.18)}`,
              }}
            />
            {navLinks.map((link) => (
              <li key={link.name} className="relative z-10">
                <a
                  ref={(el) => { linkRefs.current[link.section] = el; }}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.section)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="block px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200"
                  style={{
                    color: activeSection === link.section ? secondaryColor : rgba(darkText, 1),
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="w-px h-6 mx-2 hidden md:block"
            style={{ background: rgba(secondaryColor, 0.1) }}
          />

          <a
            href="#contact"
            className="hidden md:block px-5 py-2 rounded-full text-sm font-semibold shrink-0 transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${darkPrimary}, ${primaryColor})`,
              color: secondaryColor,
              boxShadow: `0 0 24px ${rgba(primaryColor, 0.24)}`,
            }}
          >
            Get Quote
          </a>

          <button
            className="md:hidden p-1 ml-1"
            style={{ color: secondaryColor }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute top-full mt-3 left-0 right-0 rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: rgba(darkPrimary, 0.97),
                border: `1px solid ${rgba(secondaryColor, 0.1)}`,
                boxShadow: `0 20px 60px ${rgba(darkText, 0.6)}`,
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-6 py-4 text-base font-medium border-b last:border-0 transition-colors"
                  style={{
                    color: activeSection === link.section ? lightPrimary : rgba(secondaryColor, 0.7),
                    background: activeSection === link.section ? rgba(primaryColor, 0.1) : "transparent",
                    borderColor: rgba(secondaryColor, 0.05),
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  {activeSection === link.section && (
                    <span
                      className="ml-2 inline-block w-1.5 h-1.5 rounded-full"
                      style={{ background: lightPrimary }}
                    />
                  )}
                </a>
              ))}
              <div className="p-4">
                <a
                  href="#contact"
                  className="block w-full py-3 rounded-full text-center text-sm font-semibold"
                  style={{
                    background: `linear-gradient(135deg, ${darkPrimary}, ${primaryColor})`,
                    color: secondaryColor,
                  }}
                >
                  Get Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
