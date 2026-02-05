import AnimatedSection from "./animated-section";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  return (
    <section id="work" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">
                Portfolio
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal">
                Selected <span className="italic">Work</span>
              </h2>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="col-span-full flex items-center justify-center py-20">
            <AnimatedSection>
              <div className="text-center space-y-4 max-w-md">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/50 mb-4">
                  <svg
                    className="w-8 h-8 text-muted-foreground/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-muted-foreground/80 mb-2">
                    No Recent Projects
                  </h3>
                  <p className="text-muted-foreground/60 text-sm md:text-base">
                    New projects will appear here soon
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
