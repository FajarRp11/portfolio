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
          <AnimatedSection>
            <p>No recent project added</p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Projects;
