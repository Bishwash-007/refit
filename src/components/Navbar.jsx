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
    <nav className="px-28 bg-transparent z-50 w-full fixed" id="navbar">
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
    <nav className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] -translate-x-1/2">
      {/* Navbar */}
      <div className="flex items-center justify-between rounded-full bg-black/85 backdrop-blur-2xl px-6 py-3">
        <h3 className="text-3xl font-semibold text-white">
          <a href="#home">Refit</a>
        </h3>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center rounded-full p-2 hover:bg-white/10 transition"
          aria-label="Toggle Menu"
        >
          <IconComponent name={"Menu"} size={24} color="white" />
        </button>
      </div>
    </nav>
  );
};

const TabletNav = () => {
  return (
    <nav className="px-6 bg-transparent z-50 w-full fixed" id="navbar">
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 py-8 lg:px-0 mx-auto">
        <h3 className="flex-1/2">
          <a href="#home" className="text-3xl">
            Refit
          </a>
        </h3>
        <ul className="flex md:flex-row justify-center items-center gap-6 flex-1/2">
          {Navlinks.map((navlink, index) => (
            <a
              href={navlink.link}
              key={index}
              className="p-menu-item no-underline leading-relaxed"
            >
              {navlink.title}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};
