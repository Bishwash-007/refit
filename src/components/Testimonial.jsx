import { testimonials } from "../../constants";

const TestimonialCard = ({ testimonial, rating = 5, name, image }) => {
  return (
    <div className="flex flex-col gap-4 bg-gray-200 p-6 rounded-lg shadow-sm w-2xl">
      {/* Stars */}
      <div className="flex gap-1 text-dark">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < rating ? "opacity-100" : "opacity-30"}>
            ★
          </span>
        ))}
      </div>

      {/* Text */}
      <p className="p-body-m text-text-mid-dark leading-relaxed">
        “{testimonial}”
      </p>

      {/* Client */}
      <div className="flex items-center gap-4 mt-4">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-mid-light">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <p className="text-dark font-medium">{name}</p>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section id="testimonials" className="px-6 lg:px-40 py-32">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
        <div className="bg-mid inline-flex items-center px-4 py-1 rounded-full">
          <span className="p-notification-badge">Testimonials</span>
        </div>

        <h3 className="leading-tight">What Our Clients Say</h3>

        <p className="p-intro text-text-mid-dark">
          Hear directly from our satisfied clients about their experiences.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24 items-start">
        {/* Testimonials List */}
        <div className="flex flex-col gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;