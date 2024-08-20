import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { AboutProps } from '@/type';
import { handbuck } from '@/utils/font';
import playImage from '@/assets/images/icons/play.png';

const About: React.FC<AboutProps> = ({ onSetPositions }) => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [cursor, setCursor] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const aboutPosition = window.document.getElementById('about');
    if (aboutPosition)
      onSetPositions((prevState) => ({
        ...prevState,
        about: aboutPosition?.offsetTop,
      }));
  }, [onSetPositions]);
  const playVideoHandler = () => {
    videoRef.current?.play();
    setVideoPlaying(true);
    setCursor('cursor-pointer');
  };
  const stopVideoHandler = () => {
    videoRef.current?.pause();
    setVideoPlaying(false);
    setCursor('');
  };
  return (
    <section className='bg-[#1b1b1b] mt-10 lg:mt-20' id='about'>
      <div className='flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center mx-auto max-w-6xl w-5/6 py-11 lg:py-24 h-fit'>
        <div className='lg:flex lg:flex-col lg:justify-between h-full lg:h-[356px] lg:w-5/6 lg:mr-20'>
          <h2
            className={`${handbuck.className} text-center lg:text-left text-2xl lg:text-6xl text-white mt-10`}
          >
            Lorem ipsum <span className='text-[#aa5753]'>dolor sit amet</span>
          </h2>
          <p className='text-white text-xs lg:text-xl text-center lg:text-left w-x-w-[900px] mx-auto font-light leading-2 lg:leading-[25px]'>
            Lorem ipsum dolor sit amet consectetur. Neque viverra vitae volutpat
            nulla habitant consequat. Lorem ipsum dolor sit amet consectetur.
            Neque viverra vitae volutpat nulla habitant consequat.
          </p>
          <div className='lg:flex lg:justify-end lg:items-end'>
            <p
              className={`${handbuck.className} text-xs lg:text-base text-white text-center lg:text-left mt-6 lg:mt-0`}
            >
              About
            </p>
          </div>
        </div>
        <div className='relative h-32 lg:h-[356px] w-5/6 mx-auto'>
          <video
            src='/about.mp4'
            className='rounded-lg object-cover w-full h-full'
            ref={videoRef}
            loop={true}
          ></video>
          <div
            onClick={stopVideoHandler}
            className={`absolute top-0 rounded-lg bg-[#aa5753] opacity-20 h-full w-full ${cursor}`}
          ></div>
          {!videoPlaying && (
            <div className='absolute top-0 grid place-items-center h-full w-full'>
              <button
                onClick={playVideoHandler}
                className='bg-[#aa5753] relative lg:h-20 lg:w-20 rounded-full p-5 z-20'
              >
                <div className='absolute h-5 w-5 lg:h-10 lg:w-10 top-[10px] left-3 lg:top-5 lg:left-6 '>
                  <Image src={playImage} alt='play' fill />
                </div>
              </button>
              <div className='bg-[#aa5753] absolute h-14 w-14 lg:h-28 lg:w-28 rounded-full p-5 opacity-40'></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
