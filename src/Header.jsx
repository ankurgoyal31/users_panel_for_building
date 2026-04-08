import React from "react";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [aboutOpen, setAboutOpen] = React.useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black h-[104px] border-b border-white/10">
        <div className="flex items-center justify-between w-full h-full px-6 md:px-10 lg:px-12">
          <img
            src="https://realestate.bizsquared.com/wp-content/uploads/2023/03/mannat-logo-white-1.png"
            className="h-[26px] md:h-[30px] w-auto object-contain"
            alt="Mannat logo"
          />

          <a href="/" className="flex items-center justify-center h-full">
            <img
              src="https://realestate.bizsquared.com/wp-content/uploads/2023/03/UB-logo-white-1-1.png"
              className="h-[58px] md:h-[70px] w-auto object-contain"
              alt="UB logo"
            />
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex flex-col items-center text-white cursor-pointer select-none"
          >
            <div className="w-8 h-[1.5px] bg-white"></div>
            <span className="tracking-[0.32em] text-sm md:text-base mt-1 mb-1">
              MENU
            </span>
            <div className="w-8 h-[1.5px] bg-white"></div>
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={() => {
            setOpen(false);
            setAboutOpen(false);
          }}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[320px] z-[60] bg-[#F7F9FF] transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          boxShadow: "-8px 0 25px rgba(17, 32, 90, 0.08)",
        }}
      >
        <button
          className="absolute text-[30px] text-[#4A567F] top-8 right-8 hover:opacity-70 transition-opacity"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <div className="mt-28 px-12">
          {/* <div className="mb-8">
            <span className="block text-[11px] tracking-[0.45em] text-[#7E8AAF] uppercase">
              Navigation
            </span>
            <div className="w-10 h-[1px] bg-[#CAD3EA] mt-3"></div>
          </div> */}

          <div className="space-y-6 text-[#11205A]">
            <a
              href="/"
              className="block uppercase text-[14px] tracking-[0.24em] font-medium hover:opacity-70 transition-opacity duration-200"
            >
              HOME
            </a>

            <div>
              <button
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-full flex items-center justify-between uppercase text-[14px] tracking-[0.24em] font-medium hover:opacity-70 transition-opacity duration-200 text-left"
              >
                <span>ABOUT</span>

                <span
                  className={`transition-transform duration-300 ease-out ${
                    aboutOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  aboutOpen
                    ? "max-h-[220px] opacity-100 mt-4"
                    : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <div
                  className={`pl-5 ml-1 border-l border-[#D8E0F0] space-y-4 transition-all duration-300 ease-out ${
                    aboutOpen ? "translate-y-0" : "-translate-y-2"
                  }`}
                >
                  <a
                    href="/ourstory"
                    className="block uppercase text-[12px] tracking-[0.18em] text-[#42507D] hover:text-[#11205A] transition-colors duration-200"
                  >
                    OUR STORY
                  </a>
                  

                  <a
                    href="/values"
                    className="block uppercase text-[12px] tracking-[0.18em] text-[#42507D] hover:text-[#11205A] transition-colors duration-200"
                  >
                    OUR VALUES
                  </a>
                  <a
                    href="/our-impact"
                    className="block uppercase text-[12px] tracking-[0.18em] text-[#42507D] hover:text-[#11205A] transition-colors duration-200"
                  >
                    OUR IMPACT
                  </a>
                  <a
                    href="/csr"
                    className="block uppercase text-[12px] tracking-[0.18em] text-[#42507D] hover:text-[#11205A] transition-colors duration-200"
                  >
                    CSR
                  </a>

                  <a
                    href="/career"
                    className="block uppercase text-[12px] tracking-[0.18em] text-[#42507D] hover:text-[#11205A] transition-colors duration-200"
                  >
                    CAREERS
                  </a>
                </div>
              </div>
            </div>
            <a
              href="/projects"
              className="block uppercase text-[14px] tracking-[0.24em] font-medium hover:opacity-70 transition-opacity duration-200"
            >
              PROJECTS
            </a>
            <a
              href="/real-estate-journal"
              className="block uppercase text-[14px] tracking-[0.24em] font-medium hover:opacity-70 transition-opacity duration-200"
            >
              JOURNAL
            </a>

            <a
              href="/connect"
              className="block uppercase text-[14px] tracking-[0.24em] font-medium hover:opacity-70 transition-opacity duration-200"
            >
              CONNECT
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
