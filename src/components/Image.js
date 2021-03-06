import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import styled from 'styled-components';

import Picture from './Picture';

const Wrapper = styled(motion.div)`
  /*
    safari hack to fix columns bug
    https://stackoverflow.com/questions/32142182/css-column-count-and-transition-weird-jump-on-chrome
  */
  -webkit-backface-visibility: hidden;
  -webkit-column-break-inside: avoid;
`;

const Container = styled(Link)`
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  padding: 0 0 20px;
  position: relative;
  text-decoration: none;
  width: 100%;
`;

const Frame = styled(motion.div)`
  /*
    safari hack to fix columns bug
    https://stackoverflow.com/questions/32142182/css-column-count-and-transition-weird-jump-on-chrome
  */
  -webkit-backface-visibility: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const ImageContainer = styled(motion.div)`
  /*
    safari hack to fix columns bug
    https://stackoverflow.com/questions/32142182/css-column-count-and-transition-weird-jump-on-chrome
  */
  -webkit-backface-visibility: hidden;
  position: relative;
  width: 100%;
`;

const Title = styled.h3`
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.2rem;
  margin: 8px 0 0;
`;

const SubTitle = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1rem;
  margin: 4px 0 0;
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

const frameVariants = {
  hover: { scale: 0.95 },
};

const imageVariants = {
  hover: { scale: 1.1 },
};

const Image = ({ alt, height, imageUrl, subTitle, title, to, width }) => {
  return (
    <Wrapper variants={variants}>
      <Container to={to}>
        <Frame
          transition={transition}
          variants={frameVariants}
          whileHover={'hover'}>
          <ImageContainer variants={imageVariants} transition={transition}>
            <Picture alt={alt} height={height} url={imageUrl} width={width} />
          </ImageContainer>
        </Frame>
        <Title>{title}</Title>
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
      </Container>
    </Wrapper>
  );
};

const { string } = PropTypes;

Image.propTypes = {
  id: string.isRequired,
  imageUrl: string,
  subTitle: string,
  title: string,
  to: string,
};

export default Image;
