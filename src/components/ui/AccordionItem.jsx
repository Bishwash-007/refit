import { useRef } from "react";
import IconComponent from "./Icon";

const AccordionItem = ({
  title,
  icon,
  description,
  isOpen,
  onToggle,
}) => {
  const contentRef = useRef(null);

  return (
    <div className="border-b border-hairline pb-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left group"
      >
        <div className="flex items-center gap-4">
          <IconComponent name={icon} size={28} className="text-text-dark" />
          <h4 className="h4-accordion-title">{title}</h4>
        </div>

        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <IconComponent name="Plus" size={28} />
        </span>
      </button>

      {/* Animated content */}
      <div
        ref={contentRef}
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <p className="p-body-m max-w-xl mt-4 text-text-mid-dark">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
