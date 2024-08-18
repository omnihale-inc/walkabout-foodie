import { useEffect } from "react";
import Image from "next/image";
import { handbuck } from "@/utils/font";
import brandImage from "@/assets/images/brand.png";
import { BrandProps } from "@/type";

const Brand: React.FC<BrandProps> = ({ onSetPositions }) => {
  useEffect(() => {
    const brandPosition = window.document.getElementById("brand");
    if (brandPosition)
      onSetPositions((prevState) => ({
        ...prevState,
        brand: brandPosition?.offsetTop,
      }));
  }, []);
  return (
    <section
      id="brand"
      className="w-5/6 lg:w-11/12 max-w-7xl mx-auto lg:flex lg:flex-row-reverse lg:justify-between lg:items-center "
    >
      <div className="relative h-56 lg:h-[496px] mx-auto mt-10 lg:mt-0 w-5/6 max-w-[947px]">
        <Image src={brandImage} fill objectFit="contain" alt="home" />
      </div>
      <div className="w-5/6 lg:w-8/12 mx-auto">
        <h2 className={`${handbuck.className} text-3xl lg:text-7xl`}>Brand</h2>
        <p className="text-[11px] lg:text-base mt-3 lg:mt-0 font-light">
          We specialize in creating custom websites, professional business email
          setups, and robust branding strategies that help companies stand out
          and connect with their audience. Whether you&apos;re a small business
          looking to enhance your digital footprint or a startup ready to
          launch, we provide the expertise and resources to enhance your digital
          footprint.
        </p>
      </div>
    </section>
  );
};

export default Brand;
