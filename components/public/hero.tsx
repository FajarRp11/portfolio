"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-16 overflow-hidden"
      id="hero"
    >
      {/* Top Glow Effect */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(43 35% 75% / 0.25) 0%, hsl(35 40% 65% / 0.1) 40%, transparent 70%)",
        }}
      />

      {/* Bottom Glow Effect */}
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(43 35% 75% / 0.2) 0%, hsl(35 40% 65% / 0.08) 45%, transparent 70%)",
        }}
      />

      {/* Side Glow Accents */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />

      <div className="text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-normal leading-[0.95] mb-8"
        >
          <span className="block text-foreground">Fajar Rahyu</span>
          <span className="block italic text-gradient mt-2">Web Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 text-balance"
        >
          Premium web design and development services to help your business
          stand out in the digital landscape.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#work"
            className="px-8 py-4 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 hover-lift"
          >
            View My Work
          </Link>
          <Link
            href="#services"
            className="px-8 py-4 border border-border text-foreground font-medium hover:bg-secondary transition-all duration-300 hover-lift"
          >
            My Services
          </Link>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-4"
      >
        <motion.a
          href="#services"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors border rounded-full p-2"
        >
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
