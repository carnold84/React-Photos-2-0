import React, { useEffect, useRef, useState } from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import Loading from './Loading';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const LoadingScreen = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

const ImgContainer = styled.div`
  transition: height 500ms ease-in-out;
  width: 100%;
`;

const Img = styled.img`
  transition: opacity 500ms ease-in-out;
  width: 100%;
`;

const Picture = ({ alt = '', url }) => {
  const [height, setHeight] = useState('60px');
  const [isLoading, setIsLoading] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const elWrapper = useRef();
  const elImage = useRef();

  const onImageLoaded = () => {
    const ratio = elImage.current.height / elImage.current.width;
    const bounds = elWrapper.current.getBoundingClientRect();
    setHeight(`${bounds.width * ratio}px`);
    setOpacity(1);
    setIsLoading(false);
  };

  const onResize = () => {
    const ratio = elImage.current.height / elImage.current.width;
    const bounds = elWrapper.current.getBoundingClientRect();
    setHeight(`${bounds.width * ratio}px`);
  };

  useEffect(() => {
    elImage.current.src = url;

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <Wrapper ref={elWrapper}>
      {isLoading && (
        <LoadingScreen>
          <Loading />
        </LoadingScreen>
      )}
      <ImgContainer style={{ height, opacity }}>
        <Img
          alt={alt}
          onLoad={onImageLoaded}
          ref={elImage}
          style={{ opacity }}
        />
      </ImgContainer>
    </Wrapper>
  );
};

Picture.propTypes = {
  alt: string,
  url: string.isRequired,
};

Picture.defaultProps = {
  height: '100%',
  width: '100%',
};

export default Picture;
