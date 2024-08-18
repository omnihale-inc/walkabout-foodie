import { handbuck, ollifiaPoettry } from "@/utils/font";
import { useEffect, useState } from "react";

interface NavigationProps {
  positions: {
    home: number;
    about: number;
    brand: number;
    startup: number;
    contact: number;
  };
}
type Positions = {
  home: number;
  about: number;
  brand: number;
  startup: number;
  contact: number;
};

const Navigation: React.FC<NavigationProps> = ({ positions }) => {
  const navLinks = ["Home", "About", "Services", "Testimonials", "Contact"];
  const [heightOfNavigation, setheightOfNavigation] = useState(0);
  useEffect(() => {
    const heightOfNavigation = document.querySelector("header");
    if (heightOfNavigation)
      setheightOfNavigation(heightOfNavigation.offsetHeight);
  });
  return (
    <header
      className={`${handbuck.className} fixed top-0 w-full z-10 bg-white pb-8`}
    >
      <section className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center mt-14 mx-auto max-w-6xl w-5/6">
        <h2
          className={`${ollifiaPoettry.className} text-2xl lg:text-4xl text-center lg:text-left`}
        >
          Workaboutfoodie
        </h2>
        <nav className="flex justify-between w-[283px] lg:w-[526px] mt-7 lg:mt-0">
          {navLinks.map((navLink, index) => (
            <button
              key={index}
              className="text-xs lg:text-2xl"
              onClick={(event) => {
                scrollTo({
                  top:
                    positions[navLink.toLocaleLowerCase() as keyof Positions] -
                    heightOfNavigation,
                });
                event.preventDefault();
              }}
            >
              {navLink}
            </button>
          ))}
        </nav>
      </section>
    </header>
  );
};

export default Navigation;
