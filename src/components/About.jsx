const stats = [
  {
    value: "7+",
    title: "Years Experience",
    desc: "Improving homes with expert craftsmanship for years",
  },
  {
    value: "250+",
    title: "Projects Completed",
    desc: "From kitchens to full home renovations",
  },
  {
    value: "100%",
    title: "Client Satisfaction",
    desc: "We build trust, not just homes",
  },
  {
    value: "24/7",
    title: "Support",
    desc: "Clear communication at every step",
  },
];

const About = () => {
  return (
    <section className="px-6 lg:px-40 py-24">
      {/* Top Content */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        <div className="flex flex-col gap-6 max-w-xl">
          <div className="bg-mid inline-flex items-center px-4 py-1 rounded-full w-fit">
            <p className="p-notification-badge text-white">About Us</p>
          </div>

          <h3 className="leading-tight">
            Home Improvement Specialists
          </h3>
        </div>

        <p className="p-intro max-w-xl text-text-mid-dark">
          Welcome to Refit, your trusted home improvement experts, dedicated to
          transforming homes with precision and care. With years of experience
          in kitchens, bathrooms, garages, and more, we deliver craftsmanship
          that lasts. Clear communication. Zero surprises. Let’s build something
          you’ll love.
        </p>
      </div>

      {/* Gallery */}
      <div
        id="gallery"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24 mb-32 lg:-mx-40"
      >
        {["1", "2", "3"].map((img) => (
          <img
            key={img}
            src={`images/about-img${img}.jpg`}
            alt={`About Image ${img}`}
            className="w-full h-[560px] rounded-3xl object-cover"
          />
        ))}
      </div>

      {/* Statistics */}
      <div id="statistics">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="flex flex-col items-start gap-3"
            >
              <h3>{stat.value}</h3>
              <p className="text-dark font-semibold p-body-m">{stat.title}</p>
              <p className="p-body-s text-dark ">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;