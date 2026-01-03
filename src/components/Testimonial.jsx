import { testimonials } from "../../constants";

const TestimonialCard = ({ testimonial, rating = 5, name, image }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg p-6 bg-white">
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
      <div className="mt-4 flex items-center gap-4">
        <div className="h-10 w-10 overflow-hidden rounded-full bg-mid-light">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <p className="font-medium text-dark">{name}</p>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section id="testimonials" className="px-6 py-32 lg:px-28">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center flex flex-col gap-6">
        <div className="inline-flex w-fit items-center rounded-full bg-mid px-4 py-1 mx-auto">
          <p className="p-notification-badge text-white">Testimonials</p>
        </div>

        <h3 className="leading-tight">What Our Clients Say</h3>

        <p className="p-intro text-text-mid-dark">
          Hear directly from our satisfied clients about their experiences.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div
        className="
          mt-24
          grid gap-6
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
        "
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
