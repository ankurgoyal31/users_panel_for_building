import React from "react";
import img1 from "../assets/img/instagram1.webp";
import img2 from "../assets/img/instagram7.jpg";
import img3 from "../assets/img/instagram3.webp";
import img4 from "../assets/img/instagram4.webp";
import img5 from "../assets/img/instagram5.webp";
import img6 from "../assets/img/instagram6.jpg";

const instagramPosts = [
  { id: 1, image: img1, link: "#" },
  { id: 2, image: img2, link: "#" },
  { id: 3, image: img3, link: "#" },
  { id: 4, image: img4, link: "#" },
  { id: 5, image: img5, link: "#" },
  { id: 6, image: img6, link: "#" },
];

const InstagramSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[#f8f6f2]">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <p className="mb-4 text-[17px] uppercase tracking-[0.28em] text-black/40">
            Social Presence
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-[1.05] text-[#171717] mb-5">
            Join our world!
          </h2>
          <p className="text-[15px] md:text-[16px] leading-7 text-black/55">
            Explore moments, project visuals, construction updates, and brand
            stories through our social gallery.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-white border border-black/8"
            >
              <img
                src={post.image}
                alt="Instagram"
                className="object-cover w-full h-[200px] sm:h-[240px] md:h-[260px] xl:h-[280px] transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-400"></div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="w-14 h-14 bg-white text-black flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.18)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7"
                  >
                    <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;