import { MoveUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="
        relative flex h-screen w-full items-center
        bg-dark
        mb-40
        px-6 
        lg:flex-row
        gap-20
      "
    >
      <div
        className="
          absolute inset-0
          bg-[url('/images/hero-img.jpg')]
          bg-cover bg-center
          lg:hidden
          px-6
        "
      />

      <div className="absolute inset-0 bg-black/70 lg:hidden" />

      {/* Content */}
      <div className="relative z-10 flex w-full flex-col gap-8 text-start lg:w-1/2 items-start self-end pb-20 lg:self-center lg:pb-0">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full bg-mid px-4 py-2">
            <span className="size-2 rounded-full bg-white" />
            <p className="p-notification-badge text-white">
              Available for work
            </p>
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

      {/* Desktop Image */}
      <div className="relative hidden h-full w-1/2 lg:flex">
        <div className="absolute inset-y-0 left-0 w-40 bg-linear-to-l from-transparent to-black" />
        <img
          src="/images/hero-img.jpg"
          alt="Hero Image"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
