import React, { useState } from 'react';
import { string } from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

import Loading from './Loading';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

const ImgContainer = styled(motion.div)`
  /* safari hack to fix columns bug */
  -webkit-backface-visibility: hidden;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

const Img = styled.img`
  height: 100%;
  object-fit: contain;
  width: 100%;
`;

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const variants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.9,
    opacity: 0,
    transition,
  },
};

const Slide = ({ alt = '', url }) => {
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();

  const onImageLoaded = () => {
    controls.start('enter');
    setIsLoading(false);
  };

  return (
    <Wrapper>
      {isLoading && <Loading />}
      <ImgContainer
        animate={controls}
        exit="exit"
        initial="initial"
        variants={variants}>
        <Img alt={alt} onLoad={onImageLoaded} src={url} />
      </ImgContainer>
    </Wrapper>
  );
};

Slide.propTypes = {
  alt: string,
  url: string.isRequired,
};

export default Slide;
