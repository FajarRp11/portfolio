import AnimatedSection from "./animated-section";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "5+", label: "Projects Completed" },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <AnimatedSection>
              <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">
                About
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-8">
                Passionate About <span className="italic">Creating</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I’m a web developer who enjoys turning ideas into clean,
                functional, and scalable digital products. I focus on building
                websites and web applications that are easy to use,
                well-structured, and maintainable.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                With experience using technologies like Laravel, React, and
                Next.js, I care deeply about code quality, performance, and user
                experience—making sure every product feels solid both on the
                frontend and backend.
              </p>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="p-8 bg-card rounded-2xl border border-border text-center md:text-left"
                  >
                    <p className="font-serif text-5xl md:text-6xl text-primary mb-2">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
