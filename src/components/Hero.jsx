import { MoveUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex h-screen w-full items-center bg-dark px-40 mb-40"
    >
      <div className="flex w-1/2 flex-col items-start gap-8 text-start">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full bg-mid px-4 py-2">
            <span className="size-2 rounded-full bg-white" />
            <p className="p-notification-badge text-white">Available for work</p>
          </div>

          <h1 className="mt-4 text-white">
            Your trusted partner for quality home improvement
          </h1>
        </div>

        <div>
          <p className="p-intro mb-6 text-white">
            Refit delivers expert home improvements, creating beautiful and
            functional spaces with quality craftsmanship.
          </p>

          <button
            type="button"
            className="flex h-16 items-center justify-between gap-6 rounded-full bg-mid px-4"
          >
            <span className="ml-2 p-button-text text-white">Work with us</span>

            <span className="rounded-full bg-white p-2">
              <MoveUpRight size={20} className="text-black" />
            </span>
          </button>
        </div>
      </div>

      <div className="flex w-1/2">
        <div className="absolute top-0 right-0 h-screen bg-linear-to-l from-black to-transparent" />
        <img
          src="images/hero-img.jpg"
          alt="Hero Image"
          className="h-screen w-full py-8 object-cover rounded-3xl"
        />
      </div>
    </section>
  );
};

export default Hero;
