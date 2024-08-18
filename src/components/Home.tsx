import { useEffect } from "react";
import Image from "next/image";
import homeImage from "@/assets/images/home.png";
import { handbuck } from "@/utils/font";
import { HomeProps } from "@/type";

const Home: React.FC<HomeProps> = ({ onSetPositions }) => {
  useEffect(() => {
    const homePosition = window.document.getElementById("home");
    if (homePosition)
      onSetPositions((prevState) => ({
        ...prevState,
        home: homePosition?.offsetTop,
      }));
  }, []);
  return (
    <section className="mt-44 lg:mt-44 mx-auto max-w-6xl w-5/6" id="home">
      <div className="w-4/5 max-w-2xl mx-auto ">
        <h2
          className={`${handbuck.className} text-3xl text-center lg:text-7xl`}
        >
          Workabout <span className="text-[#aa5753]">foodie</span>
        </h2>
        <p className="text-xs text-center lg:text-base mt-3 lg:mt-0 font-light">
          Lorem ipsum dolor sit amet consectetur. Neque viverra vitae volutpat
          nulla habitant consequat. Lorem ipsum dolor sit amet consectetur.
          Neque viverra vitae volutpat nulla habi
        </p>
      </div>
      <div className="relative h-36 sm:h-48 lg:h-[450px] w-5/6 lg:w-full mx-auto mt-4 lg:mt-10">
        <Image src={homeImage} fill objectFit="contain" alt="home" />
      </div>
    </section>
  );
};

export default Home;
