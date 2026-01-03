import { footerLinks } from "../../constants";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-dark px-6 py-16 sm:px-10 lg:px-28 border-t border-border-light"
    >
      {/* Top */}
      <div
        className="
          flex flex-col gap-12
          lg:flex-row lg:items-start lg:justify-between
        "
      >
        {/* Brand */}
        <h3 className="text-center text-3xl font-semibold tracking-wide text-white lg:text-left">
          Refit
        </h3>

        {/* Quick Links */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-col items-center gap-6 lg:items-start"
        >
          <h3 className="text-2xl font-semibold tracking-wide text-white">
            Quick Links
          </h3>

          <ul
            className="
              grid gap-y-3 gap-x-12
              grid-cols-1
              lg:grid-cols-2
              text-center
              lg:text-start
            "
          >
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-text-mid-light transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Divider */}
      <div className="my-10 h-px w-full bg-border-light/40" />

      {/* Bottom */}
      <div
        className="
          flex flex-col gap-4 text-center
          lg:flex-row lg:items-center lg:justify-between lg:text-left
        "
      >
        <p className="text-sm text-white">
          © 2025 Refit. All rights reserved.
        </p>

        <p className="text-sm text-white">
          Developed by{" "}
          <a
            href="https://bishwashchaudhari.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline"
          >
            Bishwash Chaudhari
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;