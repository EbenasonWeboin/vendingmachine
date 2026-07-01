"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useColors } from "../context/ThemeContext";

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
  const colors = useColors();
  const { primaryColor, secondaryColor, lightPrimary, darkPrimary, darkText } = colors;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredLink, setHoveredLink] = useState(null);
  const indicatorRef = useRef(null);
  const linkRefs = useRef({});
  const mobileNavRef = useRef(null);
  const desktopNavRef = useRef(null);
  const navListRef = useRef(null);

  const prevIntersecting = useRef({});

  useEffect(() => {
    if (mobileNavRef.current) {
      gsap.fromTo(mobileNavRef.current,
        { opacity: 0, y: -20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, delay: 0.2, ease: "power3.out" }
      );
    }
    if (desktopNavRef.current) {
      gsap.fromTo(desktopNavRef.current,
        { opacity: 0, y: -24, xPercent: -50 },
        { opacity: 1, y: 0, xPercent: -50, duration: 0.8, delay: 0.15, ease: "power3.out" }
      );
    }
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.section);
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          const wasIntersecting = prevIntersecting.current[id] ?? false;
          prevIntersecting.current[id] = entry.isIntersecting;

          if (entry.isIntersecting && !wasIntersecting) {
            setActiveSection(id);
          }
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
    const navList = navListRef.current;
    if (!el || !indicator || !navList) return;

    const linkRect = el.getBoundingClientRect();
    const listRect = navList.getBoundingClientRect();

    indicator.style.width = `${linkRect.width + 20}px`;
    indicator.style.left = `${linkRect.left - listRect.left - 10}px`;
  }, [activeSection, hoveredLink]);

  const[hover,setHover]=useState(false)

  return (
    <>
      {/* Mobile */}
      <nav ref={mobileNavRef} style={{ opacity: 0 }} className="fixed top-3 right-3 z-50 md:hidden">
        <div
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full"
          style={{
            background: rgba(secondaryColor, 0.08),
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: `1px solid ${rgba(secondaryColor, 0.15)}`,
            boxShadow: `0 8px 32px ${rgba(darkText, 0.35)}`,
          }}
        >
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-[0.6rem] shadow-lg shrink-0"
            style={{
              background: `linear-gradient(135deg, ${primaryColor}, ${lightPrimary})`,
              color: secondaryColor,
            }}
          >
            V
          </div>
          <button
            className="flex items-center justify-center w-6 h-6"
            style={{ color: darkPrimary }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.92 }}
              className="absolute top-full mt-2 right-0 w-52 rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: rgba(secondaryColor, 0.3),
                backdropFilter:"blur(24px)",
                border: `1px solid ${rgba(secondaryColor, 0.1)}`,
                boxShadow: `0 20px 60px ${rgba(darkText, 0.18)}`,
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-xs font-medium border-b last:border-0 transition-colors"
                  style={{
                    color: activeSection === link.section ? darkPrimary : rgba(darkPrimary, 0.6),
                    background: activeSection === link.section ? rgba(primaryColor, 0.08) : "transparent",
                    borderColor: rgba(darkPrimary, 0.06),
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  {activeSection === link.section && (
                    <span
                      className="ml-2 inline-block w-1.5 h-1.5 rounded-full"
                      style={{ background: darkPrimary }}
                    />
                  )}
                </a>
              ))}
              <div className="p-2.5">
                <a
                  href="#contact"
                  className="block w-full py-2 rounded-full text-center text-xs font-semibold"
                  style={{
                    background: primaryColor,
                    color: secondaryColor,
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Desktop */}
      <nav ref={desktopNavRef} style={{ opacity: 0 }} className="hidden md:block fixed top-4 left-1/2 z-50 w-[55%] max-w-4xl">
        <div
          className="flex items-center justify-around gap-1.5 px-3 py-2 rounded-full"
          style={{
            background: rgba(secondaryColor, 0.45),
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: `1px solid ${rgba(secondaryColor, 0.12)}`,
            boxShadow: `0 18px 70px ${rgba(darkText, 0.45)}, 0 0 0 1px ${rgba(primaryColor, 0.08)}, inset 0 1px 0 ${rgba(secondaryColor, 0.08)}`,
          }}
        >
          <a href="/" className="flex items-center gap-1.5 mr-2 shrink-0">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}, ${lightPrimary})`,
                color: secondaryColor,
              }}
            >
              V
            </div>
            <span
              className="text-sm font-bold tracking-tight hidden sm:block"
              style={{ color: darkPrimary }}
            >
              Vendza
            </span>
          </a>

         

          <ul ref={navListRef} className="hidden md:flex px-24 items-center gap-0.5 relative">
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
                  className="block px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200"
                  style={{
                    color: darkPrimary,
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

       
          <a
            href="#contact"
            className="hidden md:block px-4 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all duration-300"
            onMouseEnter={() => {setHover(true)}}
            onMouseLeave={()=> {setHover(false)}}
            style={{
              background: hover ? primaryColor :secondaryColor,
              color: hover ? secondaryColor: darkPrimary,
              boxShadow:hover ? `0 0 24px ${rgba(darkText, 0.24)}` :  `0 0 24px ${rgba(primaryColor, 0.24)}`,
            }}
          >
            Get Quote
          </a>
        </div>
      </nav>
    </>
  );
}
