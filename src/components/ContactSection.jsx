"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center min-h-screen px-20 py-16 md:px-10 bg-[--Primary-background] text-[--Primary-text]"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-semibold mb-8 text-[--Complimentary-color]"
      >
        Contact Me
      </motion.h1>

      <p className="text-lg text-[--Secondary-color] mb-10 max-w-xl">
        Have a project in mind or just want to connect? Drop me a message below.
      </p>

      <form
        action="https://formspree.io/f/mayformid" /* replace with your endpoint */
        method="POST"
        className="flex flex-col gap-6 w-full max-w-xl"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="px-4 py-3 rounded-md bg-[--Primary-background] border border-[--Secondary-color]/40 focus:border-[--Complimentary-color] outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="px-4 py-3 rounded-md bg-[--Primary-background] border border-[--Secondary-color]/40 focus:border-[--Complimentary-color] outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="px-4 py-3 rounded-md bg-[--Primary-background] border border-[--Secondary-color]/40 focus:border-[--Complimentary-color] outline-none resize-none"
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-[--Complimentary-color] text-[--Primary-background] font-semibold px-6 py-3 rounded-md shadow-md hover:bg-[--Secondary-color] transition"
        >
          Send Message
        </motion.button>
      </form>

      <div className="mt-10 flex gap-6 text-sm text-[--Secondary-color]">
        <a
          href="mailto:example@email.com"
          className="hover:text-[--Complimentary-color]"
        >
          📧 example@email.com
        </a>
        <a
          href="tel:+254700000000"
          className="hover:text-[--Complimentary-color]"
        >
          📞 +254 700 000 000
        </a>
      </div>
    </section>
  );
}
