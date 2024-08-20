import React, { useEffect } from 'react';
import Image from 'next/image';
import { handbuck } from '@/utils/font';
import { ServicesProps } from '@/type';
import serviceImage from '@/assets/images/service.png';
import serviceOne from '@/assets/images/services/1.png';
import serviceTwo from '@/assets/images/services/2.png';
import serviceThree from '@/assets/images/services/3.png';

const services = [
  {
    img: serviceOne,
    title: 'House Cleaning',
    desc: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.',
  },
  {
    img: serviceTwo,
    title: 'Delivery',
    desc: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.',
  },
  {
    img: serviceThree,
    title: 'Ads manager',
    desc: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.',
  },
];

const Services: React.FC<ServicesProps> = ({ onSetPositions }) => {
  useEffect(() => {
    const servicesPosition = window.document.getElementById('services');
    if (servicesPosition)
      onSetPositions((prevState) => ({
        ...prevState,
        services: servicesPosition?.offsetTop,
      }));
  }, [onSetPositions]);
  return (
    <section id='services' className='relative'>
      <div className='absolute h-full w-full -z-10'>
        <Image src={serviceImage} alt='service' fill objectFit='cover' />
        <div className='absolute bg-black h-full w-full opacity-70'></div>
      </div>
      <h2
        className={`${handbuck.className} pt-16 lg:pt-36 text-center text-white text-6xl`}
      >
        Services
      </h2>
      <div className='overflow-x-scroll xl:overflow-auto  services-scroll'>
        <div className='flex lg:justify-center text-white w-[915px] lg:w-full mt-4 lg:mt-20 pb-20 lg:pb-40 mx-5'>
          {services.map((service, index) => (
            <div
              key={index}
              className={`mr-6 p-7 backdrop-blur-lg lg:backdrop-blur-2xl bg-white/5 rounded-2xl w-72 `}
            >
              <div className='relative h-[150px] w-[230px] mb-5 '>
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  objectFit='cover'
                  className='rounded-xs lg:rounded-lg'
                />
              </div>
              <h2 className={`${handbuck.className} text-lg lg:text-3xl`}>
                {service.title}
              </h2>
              <p className='text-sm lg:text-md font-light'>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
