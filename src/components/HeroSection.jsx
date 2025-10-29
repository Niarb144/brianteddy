"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter, FaFilePdf } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center min-h-screen px-20 py-16 md:px-10 bg-[--Primary-background] text-[--Primary-text]"
    >
      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-semibold mb-6"
      >
        <Typewriter
          words={[
            "Turning Ideas into Clean Solutions",
            "Building the Web, One Project at a Time",
            "Hi, I’m Brian Teddy 👋",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={40}
          delaySpeed={2000}
        />
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl max-w-2xl leading-relaxed text-[--Secondary-color]"
      >
        I’m <span className="text-[--Complimentary-color] font-semibold">Brian Teddy</span>, a developer who loves
        turning ideas into clean, functional solutions.
      </motion.p>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-10 flex gap-6"
      >
        <Link href="https://github.com/Niarb144" target="_blank">
          <FaGithub />
        </Link>
        <Link href="https://x.com/BrianTeddy7" target="_blank">
          <FaXTwitter />
        </Link>
        <Link href="https://www.linkedin.com/in/teddy-brian-7a0057228/"target="_blank">
          <FaLinkedin />
        </Link>
        <Link href="/Assets/docs/Brian Teddy's Resume.pdf" target="_blank">
          <FaFilePdf />
        </Link>
        
      </motion.div>
    </section>
  );
}
