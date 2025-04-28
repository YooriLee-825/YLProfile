'use client';

import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import IntroAboutSectionDesktop from './IntroAboutSectionDesktop';
import IntroAboutSectionMobile from './IntroAboutSectionMobile';

const IntroAboutSection = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isMobile) {
    return <IntroAboutSectionMobile />;
  } else {
    return <IntroAboutSectionDesktop />;
  }
};

export default IntroAboutSection;
