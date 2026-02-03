"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./animated-section";

const skills = [
  { name: "React" },
  { name: "TypeScript" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
  { name: "PostgreSQL" },
  { name: "Git" },
  { name: "Framer Motion" },
  { name: 'MySql' },
  { name: 'Laravel' },
  { name: 'PHP' },
  { name: 'Bootstrap' },
];

const SkillCard = ({ name }: { name: string }) => (
  <div className="flex-shrink-0 px-6 py-4 bg-card border border-border rounded-full flex items-center gap-3 hover:border-primary/50 transition-colors duration-300">
    <span className="text-foreground font-medium whitespace-nowrap">{name}</span>
  </div>
);

const Skills = () => {
  // Double the skills array for seamless infinite loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="container-narrow mb-12">
        <AnimatedSection>
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">Expertise</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal">
            Skills & <span className="italic">Technologies</span>
          </h2>
        </AnimatedSection>
      </div>

      {/* First row - scrolling left */}
      <div className="relative mb-4">
        <motion.div
          className="flex gap-4"
          animate={{
            x: [0, -50 * skills.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <SkillCard key={`row1-${index}`} name={skill.name} />
          ))}
        </motion.div>
      </div>

      {/* Second row - scrolling right */}
      <div className="relative">
        <motion.div
          className="flex gap-4"
          animate={{
            x: [-50 * skills.length, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedSkills.reverse().map((skill, index) => (
            <SkillCard key={`row2-${index}`} name={skill.name} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
