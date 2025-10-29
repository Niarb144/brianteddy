"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contacts" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("Home");

  // Highlight current section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = navLinks.map((link) => ({
        id: link.href.substring(1),
        element: document.getElementById(link.href.substring(1)),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const { id, element } = sections[i];
        if (element && scrollY + window.innerHeight / 2 >= element.offsetTop) {
          setActiveSection(navLinks[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-center bg-[--Primary-background] bg-opacity-70 backdrop-blur-lg py-5 z-50">
      <nav className="relative flex gap-6 md:gap-10">
        {navLinks.map((link) => {
          const isActive = activeSection === link.name;
          return (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 text-sm md:text-base font-medium transition-all duration-300 ${
                isActive
                  ? "text-[--Primary-background]"
                  : "text-[--Primary-text] hover:text-[--Complimentary-color]"
              }`}
              onClick={() => setActiveSection(link.name)}
            >
              {isActive && (
                <motion.div
                  layoutId="navHighlight"
                  className="absolute inset-0 rounded-full bg-[--Complimentary-color] shadow-[0_0_15px_var(--Complimentary-color)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          );
        })}
      </nav>
    </header>
  );
}
