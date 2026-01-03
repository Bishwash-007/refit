import React from "react";
import IconComponent from "./ui/Icon";
import { contactDetails, socialLinks } from "../../constants";

const Contact = () => {
  return (
    <section id="contact" className="px-6 lg:px-28 py-24">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left Column - Contact Info */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="bg-mid inline-flex items-center px-4 py-1 rounded-full w-fit">
            <p className="p-notification-badge text-white">Contact Us</p>
          </div>

          <h3 className="leading-tight">Get in touch</h3>
          <p className="p-intro text-text-mid-dark">
            For any inquiries or to explore your vision further, we invite you
            to contact our professional team using the details provided below.
          </p>

          <div className="flex flex-col gap-4">
            {contactDetails.map(({ label, value }) => (
              <ContactInfoRow key={label} label={label} value={value} />
            ))}
          </div>

          <SocialLinks />
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex-1 bg-gray-50 rounded-xl p-8 border-hairline border-gray-400">
          <form className="flex flex-col gap-6" action="#" method="POST">
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
                name="message"
                rows={5}
                required
                className="resize-none rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mid focus:border-mid transition"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 rounded-xl bg-mid px-6 py-6 text-white font-semibold hover:bg-mid-dark transition"
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
  <div className="flex items-center justify-between gap-6">
    <p className="p-body-m text-dark font-semibold">{label}:</p>
    <p className="p-body-m text-text-mid-dark">{value}</p>
  </div>
);

const SocialLinks = () => (
  <div className="inline-flex items-center gap-6 mt-6">
    {socialLinks.map(({ icon, href }) => (
      <a
        key={icon}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark hover:text-text-mid-dark transition-colors"
        aria-label={icon}
      >
        <IconComponent name={icon} size={24} color="black" />
      </a>
    ))}
  </div>
);
