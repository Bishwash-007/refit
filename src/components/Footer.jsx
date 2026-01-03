import { footerLinks } from "../../constants";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="px-6 lg:px-32 py-16 bg-dark border-t border-border-light"
    >
      {/* Top */}
      <div className="flex flex-row items-start justify-between text-center">
        <h3 className="text-white text-3xl font-semibold tracking-wide">
          Refit
        </h3>

        {/* Quick links */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-col items-start justify-start gap-10"
        >
          <h3 className="text-white text-3xl font-semibold tracking-wide">
            Quick Links
          </h3>
          <ul className="grid grid-cols-2 gap-x-12 gap-y-3 text-start">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-text-mid-light hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Divider */}
      <div className="my-10 border-t-0 border-gray-50" />

      {/* Bottom */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-white text-sm">© 2025 Refit. All rights reserved.</p>

        <p className="text-white text-sm">
          Designed & Built by{" "}
          <a
            href="https://bishwashchaudhari.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            Bishwash Chaudhari
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
