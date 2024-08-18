import Image from 'next/image';
import { ollifiaPoettry } from '@/utils/font';
import facebook from '@/assets/images/icons/facebook.png';
import twitter from '@/assets/images/icons/twitter.png';
import instagram from '@/assets/images/icons/instagram.png';

const Footer = () => {
  const socialIcons = [
    {
      image: facebook,
      url: 'https://web.facebook.com/people/omnihale/61564444220598/',
      alt: 'facebook',
    },
    { image: twitter, url: 'https://x.com/omnihale', alt: 'twitter' },
    {
      image: instagram,
      url: 'https://www.instagram.com/omni.hale',
      alt: 'instagram',
    },
  ];
  return (
    <footer className='bg-black mt-16 py-8 lg:py-6'>
      <div className='w-5/6 lg:w-11/12 max-w-7xl mx-auto flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-center'>
        <div className='text-white lg:text-2xl'>
          <span className={ollifiaPoettry.className}>Copyright</span> of{' '}
          <span className='text-[#cdb8fb]'>Omnihale</span>
        </div>
        <div className='flex mt-3 lg:mt-0'>
          {socialIcons.map((socialIcon, index) => (
            <a key={index} href={socialIcon.url}>
              <div className='relative h-7 w-7 ml-3'>
                <Image
                  src={socialIcon.image}
                  alt={socialIcon.alt}
                  objectFit='cover'
                  fill
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
