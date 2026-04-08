import React, { useEffect, useRef, useState } from "react";

const timelineData = [
  {
    year: "2003",
    title: "Where the story began",
    description:
      "Our journey began with a vision to shape more thoughtful living environments through quality, trust, and a long-term commitment to responsible development.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600&auto=format&fit=crop",
    imageStyle: "portrait",
    variant: "standard",
  },
  {
    year: "2008",
    title: "Built on trust and steady growth",
    description:
      "As our presence grew, every milestone reinforced our focus on execution, customer confidence, and spaces that balance aesthetics with functionality.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600&auto=format&fit=crop",
    imageStyle: "landscape",
    variant: "standard",
  },
  {
    year: "2014",
    title: "Creating communities, not just buildings",
    description:
      "This milestone deserves a stronger moment in the narrative, so instead of following the same split pattern, it expands into a more immersive editorial composition with layered imagery and text.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    imageStyle: "feature",
    variant: "featured",
  },
  {
    year: "2018",
    title: "A stronger design philosophy",
    description:
      "Our work embraced a more refined architectural language, bringing together modern sensibilities, practical layouts, and elevated visual character.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
    imageStyle: "square",
    variant: "standard",
  },
  {
    year: "2024",
    title: "Building forward with purpose",
    description:
      "Today, we continue to shape future-ready spaces with a stronger design vision, deeper customer understanding, and a commitment to lasting value.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
    imageStyle: "portraitLarge",
    variant: "standard",
  },
];

export default function HistoryEditorialTimeline() {
  return (
    <section className="relative overflow-hidden bg-[#f7f2eb] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="mb-14 text-center md:mb-16 lg:mb-20 animate-fade-up">
          <p className="mb-3 text-[17px] font-medium uppercase tracking-[0.34em] text-[#93887d]">
            Our Journey
          </p>

          <h2 className="font-serif text-[30px] leading-[0.98] text-[#1f1a17] sm:text-[38px] md:text-[48px] lg:text-[56px]">
            A legacy shaped
            <br className="hidden sm:block" /> through time
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-[13px] leading-6 text-[#6d655d] md:text-[18px] md:leading-7">
            A refined editorial timeline that balances story, structure and
            imagery while introducing standout moments that break repetition.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[15px] top-0 h-full w-px bg-[#ddd3c8] md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16 md:space-y-20 lg:space-y-24">
            {timelineData.map((item, index) =>
              item.variant === "featured" ? (
                <FeaturedTimelineRow key={index} item={item} index={index} />
              ) : (
                <TimelineRow key={index} item={item} index={index} />
              )
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUpSoft {
          0% {
            opacity: 0;
            transform: translateY(36px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes revealMask {
          0% {
            clip-path: inset(0 0 100% 0);
          }
          100% {
            clip-path: inset(0 0 0 0);
          }
        }

        .animate-fade-up {
          animation: fadeUpSoft 0.9s ease both;
        }

        .timeline-reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .timeline-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-image-wrap {
          overflow: hidden;
        }

        .timeline-image-inner {
          transition: transform 0.9s ease;
          will-change: transform;
        }

        .timeline-card:hover .timeline-image-inner {
          transform: scale(1.04);
        }

        .timeline-text-stagger > * {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .timeline-reveal.is-visible .timeline-text-stagger > *:nth-child(1) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.08s;
        }

        .timeline-reveal.is-visible .timeline-text-stagger > *:nth-child(2) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.16s;
        }

        .timeline-reveal.is-visible .timeline-text-stagger > *:nth-child(3) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.24s;
        }

        .timeline-reveal.is-visible .timeline-text-stagger > *:nth-child(4) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.32s;
        }

        .timeline-dot-inner {
          transition: transform 0.5s ease, border-color 0.5s ease, background-color 0.5s ease;
        }

        .timeline-reveal.is-visible .timeline-dot-inner {
          transform: scale(1.12);
          border-color: #b8aa9b;
          background-color: #fbf7f1;
        }
      `}</style>
    </section>
  );
}

function TimelineRow({ item, index }) {
  const imageLeft = index % 2 === 0;
  const { ref, isVisible, parallaxY } = useReveal();

  return (
    <div
      ref={ref}
      className={`timeline-reveal relative pl-8 md:pl-0 ${isVisible ? "is-visible" : ""}`}
    >
      <TimelineDot />

      <div className="relative z-10 grid items-center gap-7 md:grid-cols-2 md:gap-10 lg:gap-16">
        <div
          className={`w-full ${
            imageLeft ? "md:order-1 md:justify-self-start" : "md:order-2 md:justify-self-end"
          } ${index === 0 ? "md:-mt-3" : ""} ${index === 3 ? "md:mt-6" : ""}`}
        >
          <ImageBlock
            src={item.image}
            alt={item.title}
            styleType={item.imageStyle}
            align={imageLeft ? "left" : "right"}
            parallaxY={parallaxY}
          />
        </div>

        <div
          className={`w-full ${
            imageLeft ? "md:order-2 md:pl-6 lg:pl-12" : "md:order-1 md:pr-6 lg:pr-12"
          }`}
        >
          <div className={`${imageLeft ? "md:mr-auto" : "md:ml-auto"} max-w-[440px] timeline-text-stagger`}>
            <p className="mb-2 text-[80px] leading-none text-[#b0a79c] font-['Cormorant_Garamond',serif] font-light">
              {item.year}
            </p>

            <h3 className="font-serif text-[22px] leading-[1.05] text-[#1f1a17] sm:text-[26px] md:text-[31px] lg:text-[36px]">
              {item.title}
            </h3>

            <div className="mt-4 h-[1px] w-14 bg-[#cfc4b8]" />

            <p className="mt-4 text-[18px] leading-6 text-[#665d55] md:text-[18px] md:leading-7">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedTimelineRow({ item }) {
  const { ref, isVisible, parallaxY } = useReveal();

  return (
    <div
      ref={ref}
      className={`timeline-reveal relative pl-8 md:pl-0 ${isVisible ? "is-visible" : ""}`}
    >
      <TimelineDot />

      <div className="relative z-10 mt-2">
        <div className="relative overflow-visible px-5 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-10 lg:py-10">
          <div className="grid items-center gap-6 md:grid-cols-[1.15fr_0.85fr] md:gap-8 lg:gap-12">
            <div className="relative timeline-card">
              <div className="timeline-image-wrap overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="timeline-image-inner h-[260px] w-full object-cover sm:h-[300px] md:h-[360px] lg:h-[420px]"
                  style={{
                    transform: `translateY(${parallaxY * 0.35}px) scale(${isVisible ? 1 : 1.06})`,
                    transition: "transform 0.9s ease",
                  }}
                />
              </div>

              <div
                className={`absolute -bottom-4 -right-2 hidden w-[150px] rounded-[10px] bg-white/80 p-4 backdrop-blur md:block lg:w-[180px] transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "240ms" }}
              >
                <p className="mt-2 font-serif text-[22px] leading-none text-[#1f1a17] lg:text-[28px]">
                  {item.year}
                </p>
              </div>
            </div>

            <div className="max-w-[420px] md:pl-4 timeline-text-stagger">
              {/* <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.32em] text-[#968c80]">
                Highlighted Chapter
              </p> */}

              <h3 className="font-serif text-[24px] leading-[1.02] text-[#1f1a17] sm:text-[28px] md:text-[34px] lg:text-[40px]">
                {item.title}
              </h3>

              <div className="mt-4 h-[1px] w-16 bg-[#cfc4b8]" />

              <p className="mt-4 text-[18px] leading-6 text-[#665d55] md:text-[18px] md:leading-7">
                {item.description}
              </p>

              <div className="mt-6 inline-flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#bcae9f]" />
                {/* <span className="text-[10px] uppercase tracking-[0.28em] text-[#8f8478]">
                  Defining phase
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageBlock({ src, alt, styleType, align, parallaxY = 0 }) {
  const styles = {
   portrait:
  "max-w-[340px] sm:max-w-[360px] md:max-w-[340px] lg:max-w-[380px] h-[320px] sm:h-[360px] md:h-[380px] lg:h-[420px]",

landscape:
  "max-w-[500px] sm:max-w-[560px] md:max-w-[480px] lg:max-w-[540px] h-[240px] sm:h-[270px] md:h-[280px] lg:h-[310px]",

square:
  "max-w-[350px] sm:max-w-[380px] md:max-w-[350px] lg:max-w-[390px] h-[300px] sm:h-[340px] md:h-[340px] lg:h-[380px]",

portraitLarge:
  "max-w-[380px] sm:max-w-[420px] md:max-w-[380px] lg:max-w-[420px] h-[360px] sm:h-[420px] md:h-[430px] lg:h-[480px]",
  };

  return (
    <div
      className={`timeline-card group relative overflow-hidden shadow-[0_18px_45px_rgba(40,28,18,0.08)] ${
        styles[styleType]
      } ${align === "left" ? "mr-auto" : "ml-auto"}`}
    >
      <div className="timeline-image-wrap h-full w-full">
        <img
          src={src}
          alt={alt}
          className="timeline-image-inner h-full w-full object-cover"
          style={{
            transform: `translateY(${parallaxY * 0.3}px)`,
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-transparent opacity-70" />
    </div>
  );
}

function TimelineDot() {
  return (
    <div className="absolute left-[15px] top-7 z-20 -translate-x-1/2 md:left-1/2">
      <div className="timeline-dot-inner h-4 w-4 md:h-5 md:w-5 rounded-full border border-[#d9cec2] bg-[#f7f2eb]" />
    </div>
  );
}

function useReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(el);

    const handleScroll = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh - rect.top) / (vh + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      const offset = (clamped - 0.5) * 40;
      setParallaxY(offset);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { ref, isVisible, parallaxY };
}