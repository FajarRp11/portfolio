import AnimatedSection from "./animated-section";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Engineering",
    institution: "Andalas University",
    period: "2022 - present",
    description:
      "Major in Software Engineering, focusing on web technologies, and human-computer interaction.",
  },
];

const certifications = [
  {
    name: "Introduction to HTML, CSS, & Javascipt",
    issuer: "IBM",
    year: "2025",
  },
  {
    name: "Developing Back-End Apps with Node.js and Express",
    issuer: "IBM",
    year: "2025",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">
            Background
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-16">
            Education & <span className="italic">Certifications</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Education */}
          <div>
            <AnimatedSection delay={0.1}>
              <h3 className="font-serif text-2xl mb-6 flex items-center gap-3">
                <GraduationCap className="text-primary" size={24} />
                Education
              </h3>
            </AnimatedSection>

            {education.map((edu, index) => (
              <AnimatedSection key={edu.degree} delay={0.2 + index * 0.1}>
                <div className="p-6 md:p-8 bg-card rounded-2xl border border-border">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h4 className="font-serif text-xl text-foreground">
                      {edu.degree}
                    </h4>
                    <span className="text-muted-foreground text-sm">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-primary text-sm mb-3">{edu.institution}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <AnimatedSection delay={0.1}>
              <h3 className="font-serif text-2xl mb-6 flex items-center gap-3">
                <Award className="text-primary" size={24} />
                Certifications
              </h3>
            </AnimatedSection>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <AnimatedSection key={cert.name} delay={0.2 + index * 0.1}>
                  <div className="p-5 md:p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors duration-300">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {cert.issuer}
                        </p>
                      </div>
                      <span className="text-primary text-sm font-medium">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
