import { useState } from "react";
import AccordionItem from "./ui/AccordionItem";
import IconComponent from "./ui/Icon";
import { faqs } from "../../constants";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="px-6 lg:px-40 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left: Content */}
        <div className="flex flex-col gap-6">
          <div className="bg-mid inline-flex items-center px-4 py-1 rounded-full w-fit">
            <p className="p-notification-badge text-white">FAQs</p>
          </div>

          <h3 className="leading-tight">Frequently Asked Questions</h3>

          <p className="p-intro max-w-xl text-text-mid-dark">
            Find answers to some of the most common questions about our services
            and processes.
          </p>

          <button
            type="button"
            className="flex h-16 w-fit items-center gap-6 rounded-full bg-mid px-4 group"
          >
            <span className="ml-2 p-button-text text-white">Work with us</span>

            <span className="rounded-full bg-white p-2">
              <IconComponent
                name="MoveUpRight"
                size={20}
                className="text-black"
              />
            </span>
          </button>
        </div>

        {/* Right: Accordion */}
        <div className="flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.title}
              {...faq}
              isOpen={openIndex === index}
              onToggle={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
