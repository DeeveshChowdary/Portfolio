import colors from '../utils/colors';
import heroPhoto from '../../public/photos/hero/hero2.png';
import heroDraw from '../../public/photos/hero/draw2.png';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useEffect } from 'react';

const HeroImage = () => {
  const drawVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 3,
        ease: 'easeInOut',
      },
    },
  };

  const heroCurveDone = () => {
    const heroImage = document.querySelector('.hero-image') as HTMLElement;
    heroImage.classList.add('hero-opacity');
  };

  useEffect(() => {
    const updateGradientColors = () => {
      const linearGradient = document.getElementById('gradient');
      if (linearGradient) {
        linearGradient.querySelector('stop[offset="0%"]')?.setAttribute('stop-color', colors.accentColor);
        linearGradient.querySelector('stop[offset="100%"]')?.setAttribute('stop-color', colors.primaryColor);
      }
    };

    const handleColorsUpdated = () => {
      updateGradientColors();
    };

    window.addEventListener('colorsUpdated', handleColorsUpdated);
    return () => {
      window.removeEventListener('colorsUpdated', handleColorsUpdated);
    };
  }, []);

  return (
    <div className='relative left-0 h-full w-full overflow-hidden md:left-[100px] md:w-[calc(100%-100px)] xl:left-[200px] xl:w-[calc(100%-200px)] landscape-md:left-[400px] landscape-md:w-[calc(100%-400px)]'>
      <motion.svg
        width='100%'
        height='100%'
        viewBox='0 0 1813 2468'
        className='hero-curve hero-opacity absolute bottom-0 h-[60%] w-full fill-none stroke-[14px] object-contain text-text xs:h-[75%]'
        initial='hidden'
        animate='visible'
        onAnimationComplete={() => heroCurveDone()}
      >
        <linearGradient id='gradient' x1='21%' y1='100%' x2='79%' y2='0%'>
          <stop offset='0%' stopColor={'rgba(0, 0, 0, 0)'} />
          <stop offset='100%' stopColor={'rgba(0, 0, 0, 0)'} />
        </linearGradient>
      </motion.svg>
      <Image src={heroPhoto} alt='Deevesh' className='hero-image absolute bottom-0 h-[60%] w-full object-contain xs:h-[75%]' />
      <div
        className='hero-draw absolute bottom-0 h-[60%] w-full bg-text object-contain xs:h-[75%]'
        style={{
          maskImage: `url(${heroDraw.src})`,
          WebkitMaskImage: `url(${heroDraw.src})`,
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
      />
    </div>
  );
};

export default HeroImage;
