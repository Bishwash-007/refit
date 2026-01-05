import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { MoveUpRight } from "lucide-react";

const Hero = () => {
  useGSAP(
    () => {
      const split = new SplitText("#hero-text", {
        type: "chars",
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(split.chars, {
        y: 50,
        autoAlpha: 0,
        stagger: {
          each: 0.035,
          from: "start",
        },
        duration: 0.8,
      })
        .from(
          "#desktop-image",
          {
            opacity: 0,
            scale: 1.05,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          "#hero-badge",
          {
            y: 24,
            autoAlpha: 0,
            duration: 0.5,
          },
          "-=1"
        )
        .from(
          "#hero-subtitle",
          {
            y: 24,
            autoAlpha: 0,
            duration: 0.5,
          },
          "-=1"
        )
        .from(
          "#hero-btn",
          {
            y: 24,
            autoAlpha: 0,
            duration: 0.5,
          },
          "-=1"
        );

      return () => {
        split.revert();
      };
    },
    { scope: "#hero" }
  );

  return (
    <section
      id="hero"
      className="
        relative flex h-screen w-full items-center
        bg-dark
        mb-40
        px-6
        lg:px-28
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
        <div className="mt-8">
          <div
            className="inline-flex items-center gap-3 rounded-full bg-mid px-4 py-2"
            id="hero-badge"
          >
            <span className="size-2 rounded-full bg-white" />
            <p className="p-notification-badge text-white">
              Available for work
            </p>
          </div>

          <h1
            className="mt-4 text-white text-5xl lg:text-6xl leading-tight"
            id="hero-text"
          >
            Your trusted partner for quality home improvement
          </h1>
        </div>

        <div>
          <p
            className="p-intro mb-6 text-white text-base md:text-lg lg:text-xl"
            id="hero-subtitle"
          >
            Refit delivers expert home improvements, creating beautiful and
            functional spaces with quality craftsmanship.
          </p>

          <button
            type="button"
            className="flex h-16 items-center justify-between gap-6 rounded-full bg-mid px-4"
            id="hero-btn"
          >
            <span className="ml-2 p-button-text text-white">Work with us</span>

            <span className="rounded-full bg-white p-2">
              <MoveUpRight size={20} className="text-black" />
            </span>
          </button>
        </div>
      </div>

      {/* Desktop Image */}
      <div className="relative hidden h-full w-1/2 lg:flex" id="desktop-image">
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
