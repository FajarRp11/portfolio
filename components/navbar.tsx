import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <nav className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between bg-secondary/80 backdrop-blur-md rounded-full px-6 py-3 border border-border/50">
          {/* Logo */}
          <Link href="#" className="font-serif text-xl text-foreground tracking-wide">
            dev<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="hidden md:inline-flex px-5 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:opacity-90 transition-opacity duration-300"
          >
            Let's Talk
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 bg-secondary/95 backdrop-blur-md rounded-2xl p-6 border border-border/50"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-full"
                >
                  Let's Talk
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Navbar;
