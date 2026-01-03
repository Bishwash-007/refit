const Navbar = () => {
  const Navlinks = [
    { title: "About", link: "#about" },
    { title: "Services", link: "#services" },
    { title: "Our Works", link: "#ourworks" },
    { title: "FAQs", link: "#faqs" },
    { title: "Contact", link: "#contact" },
  ];
  return (
    <nav className="fixed z-50 w-full bg-transparent px-40">
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 py-8 lg:px-0 mx-auto">
        <h3 className="flex-1/2">
          <a href="#home" className="text-3xl">Refit</a>
        </h3>
        <ul className="flex md:flex-row justify-center items-center gap-12 flex-1/2">
          {Navlinks.map((navlink, index) => (
            <a href={navlink.link} key={index} className="p-menu-item no-underline">
              {navlink.title}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
