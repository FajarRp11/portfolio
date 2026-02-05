import Link from "next/link";
import AnimatedSection from "./animated-section";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">
              Get In Touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-normal mb-8">
              Let's Work <span className="italic">Together</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Have a project in mind? I'd love to hear about it. Let's discuss
              how we can bring your vision to life.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Link
              href="mailto:fajarrahyu1103@gmail.com"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground text-lg font-medium rounded-full hover:opacity-90 transition-all duration-300 hover-lift mb-12"
            >
              Start a Project
              <ArrowUpRight size={22} />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
              <Link
                href="mailto:fajarrahyu1103@gamil.com"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail size={18} />
                fajarrahyu1103@gamil.com
              </Link>
              <span className="flex items-center gap-2">
                <MapPin size={18} />
                West Sumatera, Indonesia
              </span>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
