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
      <div className='w-5/6 lg:w-11/12 max-w-7xl mx-auto flex flex-col justify-center items-center'>
        <div className='text-white lg:text-2xl'>
          <span className={ollifiaPoettry.className}>Copyright</span> of{' '}
          <span>Walkaboutfoodie</span>, made from Omnihale{' '}
          <span className={`${ollifiaPoettry.className} text-[#aa5753]`}>
            <a href='https://www.omnihale.com' target='_blank'>
              Brand
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
