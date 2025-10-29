"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "hero";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  // Shared link styles
  const linkClasses = (id) =>
    `transition-all text-lg font-medium ${
      activeSection === id
        ? "text-[--Primary-background] bg-[--Secondary-color] px-4 py-2 rounded-md"
        : "text-[--Primary-text] hover:text-[--Complimentary-color]"
    }`;

  return (
    <>
      {/* ==============================
           DESKTOP SIDEBAR NAVIGATION
         ============================== */}
      <header className="hidden lg:flex fixed z-50 top-0 right-0 flex-col justify-center items-center h-screen w-48 border-l border:h-50% border-[--Secondary-color]/30 bg-[--Primary-background]">
        <div className="absolute top-10 left-4 w-16 h-16">
          <Image
            src="/Assets/img/teddy-brian-high-resolution-logo-transparent.png"
            alt="Logo"
            width={64}
            height={64}
            className="object-contain"
          />
        </div>

        <nav className="flex flex-col gap-8 mt-32">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              className={linkClasses(link.id)}
              whileHover={{ scale: 1.05 }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <div className="absolute left-0 h-[80vh] w-[1px] bg-[--Primary-text]/60"></div>
      </header>

      {/* ==============================
           MOBILE NAVIGATION (Hamburger)
         ============================== */}
      <header className="lg:hidden fixed top-0 left-0 w-full bg-[--Primary-background]/90 backdrop-blur-md flex justify-between items-center px-6 py-4 z-50 border-b border-[--Secondary-color]/30">
        <div className="flex items-center gap-2">
          <Image
            src="/Assets/img/teddy-brian-high-resolution-logo-transparent.png"
            alt="Logo"
            width={48}
            height={48}
            className="object-contain"
          />
          <h1 className="text-xl font-semibold text-[--Primary-text]">Teddy.Brian</h1>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 group"
        >
          <span
            className={`h-[3px] w-6 rounded-full bg-[--Primary-text] transition-all ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          ></span>
          <span
            className={`h-[3px] w-6 rounded-full bg-[--Primary-text] transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-[3px] w-6 rounded-full bg-[--Primary-text] transition-all ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          ></span>
        </button>
      </header>

      {/* ==============================
           MOBILE DROPDOWN MENU
         ============================== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 w-full bg-[--Primary-background] border-b border-[--Secondary-color]/30 flex flex-col items-center gap-6 py-6 lg:hidden z-40"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className={linkClasses(link.id)}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
