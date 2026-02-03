import AnimatedSection from "./animated-section";
import { Code2, Palette, Search, Smartphone } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Development",
    description: "Custom web development solutions tailored to your specifications, designed to deliver a flawless user experience.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Responsive Design",
    description: "Pixel-perfect responsive layouts that look and perform beautifully across all devices and screen sizes.",
    icon: Smartphone,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">Services</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-16">
            What I <span className="italic">Offer</span>
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {services.length > 0 ? (services.map((service, index) => (
            <AnimatedSection key={service.number} delay={index * 0.1}>
              <div className="col-span-1 md:col-span-2 group p-8 md:p-10 bg-card  border border-border hover:border-primary/30 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                  <span className="text-primary/40 font-serif text-3xl md:text-4xl">
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl md:text-3xl mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>
                  <service.icon className="hidden md:block w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>
            </AnimatedSection>
          ))) : 
          (<p>No services available</p>)
          }
        </div>
      </div>
    </section>
  );
};

export default Services;
