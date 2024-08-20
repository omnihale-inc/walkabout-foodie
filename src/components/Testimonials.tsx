import React, { useEffect } from 'react';
import Image from 'next/image';
import { handbuck } from '@/utils/font';
import { TestimonialsProps } from '@/type';
import testimonialOne from '@/assets/images/testimonials/1.png';
import testimonialTwo from '@/assets/images/testimonials/2.png';
import testimonialThree from '@/assets/images/testimonials/3.png';

const services = [
  {
    img: testimonialOne,
    details:
      'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.',
  },
  {
    img: testimonialTwo,
    details:
      'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.',
  },
  {
    img: testimonialThree,
    details:
      'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.',
  },
];

const Testimonials: React.FC<TestimonialsProps> = ({ onSetPositions }) => {
  useEffect(() => {
    const testimonialsPosition = window.document.getElementById('testimonials');
    if (testimonialsPosition)
      onSetPositions((prevState) => ({
        ...prevState,
        testimonials: testimonialsPosition?.offsetTop,
      }));
  }, [onSetPositions]);
  return (
    <section id='testimonials'>
      <h2
        className={`${handbuck.className} mt-28 text-center text-black text-6xl`}
      >
        Testimonials
      </h2>
      <div className='overflow-x-scroll xl:overflow-auto  services-scroll'>
        <div className='flex lg:justify-center text-black w-[715px] lg:w-full mt-10 lg:mt-20 lg:pb-20 mx-5'>
          {services.map((service, index) => (
            <div key={index} className={`mr-7 w-56 `}>
              <div className='relative h-[100px] w-[100px] mb-5 mx-auto '>
                <Image
                  src={service.img}
                  alt={`${index}`}
                  fill
                  objectFit='cover'
                  className='rounded-full'
                />
              </div>
              <p className='text-sm lg:text-md text-center font-light'>
                {service.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
