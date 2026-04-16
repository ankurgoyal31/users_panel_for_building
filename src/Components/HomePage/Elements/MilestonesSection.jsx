import React, { useState, useRef, useEffect } from "react";
import img1 from '../../../assets/milestones/2002.png'
import img2 from '../../../assets/milestones/2007.png'
import img3 from '../../../assets/milestones/2022.png'
import img4 from '../../../assets/milestones/2025.png'

export default function MilestonesSection() {
<<<<<<< HEAD
 const years = ["2002", "2007", "2022", "2025"];
=======
  const years = ["2002", "2007", "2022", "2025"];
>>>>>>> temp-fix

const milestones = {
  2002: {
    title: "The Genesis",
<<<<<<< HEAD
    desc: "A commitment to excellence that laid the foundation for our journey.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  2007: {
    title: "Strategic Evolution",
    desc: "Expanding capabilities to deliver high-density, luxury developments.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  2022: {
    title: "Vertical Mastery",
    desc: "Flagship towers completed, redefining our presence in the skyline.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  },
  2025: {
    title: "The New Vanguard",
    desc: "A new era of living focused on wellness, technology, and refined luxury.",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
=======
    desc: "A commitment to excellence is born, setting a new standard for regional development.",
    img: img1,
  },
  2007: {
    title: "Strategic Evolution",
    desc: "Scaling our capabilities to meet the complexities of high-density urban luxury.",
    img: img2,
  },
  2022: {
    title: "Vertical Mastery",
    desc: "The completion of our flagship towers, cementing our status as masters of the skyline.",
    img: img3,
  },
  2025: {
    title: "The New Vanguard",
    desc: "Introducing a new era of residential living that prioritises wellness, tech-integration, and understated opulence.",
    img: img4,
>>>>>>> temp-fix
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
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-16 overflow-hidden bg-white">
      <div className="relative z-10 px-6 mx-auto lg:px-20">
        <h2 className="mb-12 text-[36px] font-light tracking-wide md:text-4xl">
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
                <p className="mb-3 text-[12px] uppercase tracking-[0.22em] text-gray-500">
                  {year}
                </p>
                <h3 className="mb-4 text-[32px] md:text-[32px] font-light leading-[1.1] text-[#2b2b2b]">
                  {milestones[year].title}
                </h3>
                <p className="text-[16px] md:text-[16px] font-light leading-8 text-gray-700 max-w-xl">
                  {milestones[year].desc}
                </p>
              </div>

              <div className="relative z-20 md:w-[52%] flex justify-end">
                <img
                  src={milestones[year].img}
                  alt={milestones[year].title}
                  className="w-full max-w-[500px] h-[420px] md:h-[580px] object-cover"
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