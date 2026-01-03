import { Navlinks } from "../../constants";
import { useMediaQuery } from "react-responsive";
import IconComponent from "./ui/Icon";

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  if (isMobile) {
    return <MobileNav />;
  }

  if (isTablet) {
    return <TabletNav />;
  }

  return <DesktopNav />;
};

export default Navbar;

const DesktopNav = () => {
  return (
    <nav className="px-28 bg-transparent z-50 fixed w-full" id="navbar">
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 py-8 lg:px-0 mx-auto">
        <h3 className="flex-1/2">
          <a href="#home" className="text-3xl">
            Refit
          </a>
        </h3>
        <ul className="flex md:flex-row justify-center items-center gap-12 flex-1/2">
          {Navlinks.map((navlink, index) => (
            <a
              href={navlink.link}
              key={index}
              className="p-menu-item no-underline"
            >
              {navlink.title}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const MobileNav = () => {
  return (
    <nav className="px-6 bg-transparent z-50" id="navbar">
      <div className="flex justify-between items-center py-6 mx-auto">
        <h3>
          <a href="#home" className="text-3xl">
            Refit
          </a>
        </h3>
        {/* Mobile Menu Icon */}
        <button>
          <IconComponent name="Menu" size={24} />
        </button>
      </div>
    </nav>
  );
};

const TabletNav = () => {
  return (
    <nav className="px-16 bg-transparent z-50" id="navbar">
      <div className="flex justify-between items-center py-6 mx-auto">
        <h3>
          <a href="#home" className="text-3xl">
            Refit
          </a>
        </h3>
        {/* Tablet Menu Icon */}
        <button>
          <IconComponent name="Menu" size={32} />
        </button>
      </div>
    </nav>
  );
};
