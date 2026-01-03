import { useState } from "react";
import { services } from "../../constants";
import AccordionItem from "./ui/AccordionItem";

const Services = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="services" className="px-6 lg:px-32 py-32">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
        <div className="bg-mid inline-flex items-center px-4 py-1 rounded-full w-fit">
          <p className="p-notification-badge text-white">Services</p>
        </div>

        <h3 className="leading-tight">What We Do</h3>

        <p className="p-intro text-text-mid-dark">
          Find out which of our services fits the needs of your project. No
          fluff. Just solid work.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24">
        {/* Image */}
        <div className="w-full h-[600px] rounded-3xl overflow-hidden bg-mid-light">
          <img
            src="images/services.jpg"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-6">
          {services.map((service, index) => (
            <AccordionItem
              key={service.title}
              {...service}
              isOpen={openIndex === index}
              onToggle={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
