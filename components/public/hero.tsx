"use client"
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-24" id="hero">
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
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 text-balance"
        >
          Premium web design and development services to help your business stand out in the digital landscape.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-all duration-300 hover-lift"
          >
            View My Work
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-all duration-300"
          >
            My Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
