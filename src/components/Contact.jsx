import React from "react";
import IconComponent from "./ui/Icon";
import { contactDetails, socialLinks } from "../../constants";

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-24 sm:px-6 lg:px-28">
      <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-8">
          <div className="inline-flex w-fit items-center rounded-full bg-mid px-4 py-1">
            <p className="p-notification-badge text-white">Contact Us</p>
          </div>

          <h3 className="leading-tight">Get in touch</h3>

          <p className="p-intro text-text-mid-dark">
            For any inquiries or to explore your vision further, we invite you
            to contact our professional team using the details provided below.
          </p>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            {contactDetails.map(({ label, value }) => (
              <ContactInfoRow key={label} label={label} value={value} />
            ))}
          </div>

          <SocialLinks />
        </div>

        {/* Right Column – Form */}
        <div
          className="
            flex-1
            rounded-xl
            border border-gray-300
            bg-gray-50
            p-6
            sm:p-8
          "
        >
          <form className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-medium text-dark">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mid focus:border-mid transition"
                placeholder="Your full name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-medium text-dark">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mid focus:border-mid transition"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 font-medium text-dark">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="resize-none rounded-md border border-gray-300 px-4 py-3 focus:border-mid focus:outline-none focus:ring-2 focus:ring-mid transition"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              className="
                mt-2
                rounded-xl
                bg-mid
                px-6 py-5
                font-semibold text-white
                transition
                hover:bg-mid-dark
              "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const ContactInfoRow = ({ label, value }) => (
  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
    <p className="p-body-m font-semibold text-dark">{label}:</p>
    <p className="p-body-m text-text-mid-dark break-all sm:text-right">
      {value}
    </p>
  </div>
);

const SocialLinks = () => (
  <div className="mt-6 flex flex-wrap items-center gap-5">
    {socialLinks.map(({ icon, href }) => (
      <a
        key={icon}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={icon}
        className="rounded-full p-2 transition hover:bg-gray-100"
      >
        <IconComponent name={icon} size={22} color="black" />
      </a>
    ))}
  </div>
);