const workItem = {
  title: "Kitchen Modification",
  description:
    "See how we’ve transformed homes with our expert craftsmanship and attention to detail.",
  longDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  tags: ["Kitchen", "Renovation"],
  author: {
    name: "Bishwash Chaudhari",
    image: "/images/avatar.jpg",
  },
  image: "/images/work.jpg",
};

const WorkCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-24 bg-gray-200/50 py-20">
      {/* Image */}
      <div className="w-full h-[500px] rounded-3xl overflow-hidden bg-mid-light">
        <img
          src={workItem.image}
          alt={workItem.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6">
        <h3 className="leading-tight">{workItem.title}</h3>

        <p className="p-intro text-text-mid-dark">
          {workItem.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {workItem.tags.map((tag) => (
            <div
              key={tag}
              className="bg-mid inline-flex items-center px-4 py-1 rounded-full"
            >
              <span className="p-notification-badge">{tag}</span>
            </div>
          ))}
        </div>

        <p className="p-body-m text-text-mid-dark max-w-xl">
          {workItem.longDescription}
        </p>

        {/* Author */}
        <div className="flex items-center gap-4 mt-6">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-mid-light">
            <img
              src={workItem.author.image}
              alt={workItem.author.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="text-dark font-medium">
            {workItem.author.name}
          </h4>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <section id="work" className="px-6 lg:px-40 py-32">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
        <div className="bg-mid inline-flex items-center px-4 py-1 rounded-full">
          <span className="p-notification-badge">Our Work</span>
        </div>

        <h3 className="leading-tight">Get inspired by our work</h3>

        <p className="p-intro text-text-mid-dark">
          See how we’ve transformed homes with our expert craftsmanship
          and attention to detail.
        </p>
      </div>

      {/* Content */}
      <WorkCard />
      <WorkCard />
    </section>
  );
};

export default Work;