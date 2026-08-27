"use client";

import { useGsapReveal } from "@/hooks/useGsapReveal";
import { services } from "@/data/portfolio";
import ServicesIntro from "./ServicesIntro";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const sectionRef = useGsapReveal<HTMLElement>(".services-reveal", {
    y: 50,
    stagger: 0.1,
    duration: 0.8,
  });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-[#f9f9f9] dark:bg-[#0d0d0d]"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left intro */}
          <div className="lg:col-span-4 services-reveal">
            <ServicesIntro />
          </div>

          {/* Right: Service cards grid */}
          <div className="lg:col-span-8 services-reveal">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
