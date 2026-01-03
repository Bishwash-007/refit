import { workItem } from "../../constants";

const WorkCard = ({
  image,
  title,
  description,
  longDescription,
  tags,
  author,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 my-20 bg-dark/20 p-8 rounded-3xl">
      {/* Image */}
      <div className="w-full h-[500px] rounded-2xl overflow-hidden bg-mid-light">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6">
        <h3 className="leading-tight">{title}</h3>

        <p className="p-intro text-text-mid-dark">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <div
              key={tag}
              className="bg-mid inline-flex items-center px-4 py-1 rounded-full w-fit"
            >
              <span className="p-notification-badge text-white">{tag}</span>
            </div>
          ))}
        </div>

        <p className="p-body-m text-text-mid-dark max-w-xl">
          {longDescription}
        </p>

        {/* Author */}
        <div className="flex items-center gap-4 mt-6">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-mid-light">
            <img
              src={author.image}
              alt={author.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="text-dark font-medium">{author.name}</h4>
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
        <div className="bg-mid inline-flex items-center px-4 py-1 rounded-full w-fit">
          <p className="p-notification-badge text-white">Our Works</p>
        </div>

        <h3 className="leading-tight">Get inspired by our work</h3>

        <p className="p-intro text-text-mid-dark">
          See how we’ve transformed homes with our expert craftsmanship and
          attention to detail.
        </p>
      </div>

      {/* Content */}
      <div>
        {workItem.map((item) => (
          <WorkCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Work;
