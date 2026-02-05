import AnimatedSection from "./animated-section";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Argenesia",
    period: "Jun 2025 - Present",
    description:
      "Working as a full-stack developer at Argenesia, contributing to the development of web applications.",
  },
  {
    title: "Intern Frontend Developer",
    company: "Argenesia",
    period: "Feb 2025 - Mei 2025",
    description:
      "Working as a frontend developer intern at Argenesia, contributing to the development of web applications.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">
            Career
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-16">
            Work <span className="italic">Experience</span>
          </h2>
        </AnimatedSection>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <AnimatedSection key={exp.title} delay={index * 0.15}>
                <div className="relative flex gap-6 md:gap-10">
                  {/* Timeline Node */}
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center shadow-lg shadow-primary/10">
                      <Briefcase className="text-primary" size={20} />
                    </div>
                    {/* Glow effect behind node */}
                    <div className="absolute inset-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 blur-xl -z-10" />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 group">
                    <div className="p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                      {/* Period Badge */}
                      <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
                        {exp.period}
                      </span>

                      <h3 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-primary/80 text-sm mb-4">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
