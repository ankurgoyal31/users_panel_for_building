import React, { useState, useRef, useEffect } from "react";
import img2002 from "../../../assets/img/2002.jpg";
import img2007 from "../../../assets/img/2007.jpg";
import img2022 from "../../../assets/img/2022.jpg";
import img2023 from "../../../assets/img/2023.jpg";
import img2024 from "../../../assets/img/2024.jpg";
import img2025 from "../../../assets/img/2025.jpg";

export default function MilestonesSection() {
  const years = ["2002", "2007", "2008", "2010", "2011", "2012", "2013", "2015", "2018", "2024"];

  const milestones = {
  2002: {
    title: "Foundation",
    desc: "Growing up around Mumbai’s rising skyscrapers, Vibhishek Pal Singh developed a fascination for structures and design, shaping his conviction that thoughtful spaces could transform how people lived, experienced comfort, and connected with their surroundings.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  2007: {
    title: "Breakthrough Project",
    desc: "In 2007, he executed a 32,000 sq ft residential project at Kaligiri Road, marking a defining milestone. This experience strengthened his understanding of customer expectations and reinforced his belief in building homes that prioritise trust, quality, and long-term value.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  2008: {
    title: "Commercial Development",
    desc: "Stepping into commercial real estate, he expanded his vision beyond housing. These developments refined his approach to space planning, functionality, and location strategy, helping him create environments that support both business growth and community interaction.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  },
  2010: {
    title: "Expansion Phase",
    desc: "With growing confidence and experience, the journey entered a phase of steady expansion. Multiple residential projects were developed, each reflecting a deeper commitment to design consistency, construction quality, and delivering value-driven living spaces.",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
  },
  2011: {
    title: "Affordable Housing",
    desc: "Recognising the need for accessible homes, the focus shifted toward affordable housing. The goal was to make thoughtfully designed living spaces available to a wider audience without compromising on quality, comfort, or essential amenities.",
    img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
  },
  2012: {
    title: "Township Developments",
    desc: "Large-scale township projects were introduced, integrating residential, recreational, and lifestyle elements into cohesive communities. These developments emphasised planning, connectivity, and a balanced living experience within self-sustained environments.",
    img: "https://images.unsplash.com/photo-1599423300746-b62533397364",
  },
  2013: {
    title: "Landmark Innovation",
    desc: "This phase marked the introduction of landmark projects that pushed the boundaries of design and lifestyle. With a focus on premium features and distinctive architecture, these developments elevated the overall brand perception and market presence.",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
  },
  2015: {
    title: "Architectural Innovation",
    desc: "Design innovation became central to the vision, with greater attention to aesthetics, spatial flow, and modern architectural techniques. Projects during this period reflected a refined design language and a stronger emphasis on experiential living.",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
  },
  2018: {
    title: "Expansion Beyond Rajasthan",
    desc: "The journey expanded beyond Rajasthan, entering new markets and geographies. This step signified growth, adaptability, and the ambition to deliver the same level of trust and quality across diverse urban landscapes.",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
  2024: {
    title: "Plot Developments",
    desc: "The focus evolved to plotted developments, offering flexibility and ownership freedom to customers. These projects combine strategic locations with long-term investment potential, catering to a new generation of buyers seeking customisable living solutions.",
    img: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198",
  },
};

  const [activeYear, setActiveYear] = useState(years[0]);
  const scrollRef = useRef(null);

  const handleYearClick = (year) => {
    setActiveYear(year);

    const index = years.indexOf(year);
    const width = scrollRef.current.clientWidth;

    scrollRef.current.scrollTo({
      left: width * index,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveYear((prev) => {
        const currentIndex = years.indexOf(prev);
        const nextIndex = (currentIndex + 1) % years.length;
        const nextYear = years[nextIndex];

        const width = scrollRef.current?.clientWidth || 0;

        scrollRef.current?.scrollTo({
          left: width * nextIndex,
          behavior: "smooth",
        });

        return nextYear;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-16 overflow-hidden bg-white">
      <div className="relative z-10 px-6 mx-auto lg:px-20">
        <h2 className="mb-12 text-3xl font-light tracking-wide md:text-4xl">
          OUR MILESTONES
        </h2>

        <div
          ref={scrollRef}
          className="flex w-full overflow-hidden snap-x snap-mandatory no-scrollbar"
        >
          {years.map((year) => (
            <div
              key={year}
              className="relative flex flex-col items-center flex-shrink-0 w-full gap-8 snap-start md:flex-row"
            >
              <span
                className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 select-none pointer-events-none text-[10rem] md:text-[20rem] lg:text-[33rem] opacity-20 leading-none"
              >
                {year}
              </span>

              <div className="relative z-20 md:w-[48%]">
                <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-gray-500">
                  {year}
                </p>
                <h3 className="mb-4 text-[24px] md:text-[32px] font-light leading-[1.1] text-[#2b2b2b]">
                  {milestones[year].title}
                </h3>
                <p className="text-[15px] md:text-[17px] font-light leading-8 text-gray-700 max-w-xl">
                  {milestones[year].desc}
                </p>
              </div>

              <div className="relative z-20 md:w-[52%] flex justify-end">
                <img
                  src={milestones[year].img}
                  alt={milestones[year].title}
                  className="w-full max-w-[500px] h-[420px] md:h-[580px] object-cover shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex pb-3 mt-16 overflow-x-auto text-sm font-light border-b border-gray-400 cursor-pointer flex-nowrap no-scrollbar">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => handleYearClick(year)}
              className={`relative flex-shrink-0 px-2 transition ${
                activeYear === year
                  ? "text-[#a7cf46] font-medium"
                  : "text-gray-700 hover:text-[#a7cf46]"
              }`}
              style={{ minWidth: "calc(100% / 10)" }}
            >
              {year}

              {activeYear === year && (
                <>
                  <span className="absolute left-1/2 -translate-x-1/2 top-[35px] w-2.5 h-2.5 bg-[#a7cf46] rounded-full"></span>
                  <span
                    className="ml-1 text-[#a7cf46] opacity-80 text-lg font-bold inline-block"
                    style={{ transform: "rotate(-45deg)" }}
                  >
                    →
                  </span>
                </>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}