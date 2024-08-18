import Image from "next/image";
import { handbuck } from "@/utils/font";
import startupImage from "@/assets/images/startup.png";
import { StartupProps } from "@/type";
import { useEffect } from "react";

const Startup: React.FC<StartupProps> = ({ onSetPositions }) => {
  useEffect(() => {
    const startupPosition = window.document.getElementById("startup");
    if (startupPosition)
      onSetPositions((prevState) => ({
        ...prevState,
        startup: startupPosition?.offsetTop,
      }));
  }, []);
  return (
    <section
      id="startup"
      className="w-5/6 lg:w-11/12 max-w-7xl mx-auto lg:flex lg:justify-between lg:items-center "
    >
      <div className="relative h-56 lg:h-[496px] mx-auto mt-10 lg:mt-0 w-5/6 max-w-[620px]">
        <Image src={startupImage} fill objectFit="contain" alt="home" />
      </div>
      <div className="w-5/6 lg:w-8/12 mx-auto lg:ml-10">
        <h2 className={`${handbuck.className} text-3xl lg:text-7xl`}>
          Startup
        </h2>
        <p className="text-[11px] lg:text-base mt-3 lg:mt-0 font-light">
          For startups, we go a step further by assembling top-tier tech teams
          to help transform innovative ideas into fully realized products. From
          initial concept to final execution, our team of skilled developers,
          designers, and strategists work closely with you to ensure your
          project is a success. We understand the challenges of building
          something new, and we’re here to support you every step of the way.
        </p>
      </div>
    </section>
  );
};

export default Startup;
