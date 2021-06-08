import React, { useEffect, useRef, useState } from 'react';
import { number, string } from 'prop-types';
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
  width: 100%;
`;

const Img = styled.img`
  transition: opacity 500ms ease-in-out;
  width: 100%;
`;

const Picture = ({ alt = '', height, url, width }) => {
  const [scaledHeight, setScaledHeight] = useState('60px');
  const [isLoading, setIsLoading] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const elWrapper = useRef();
  const elImage = useRef();

  const updateHeight = (height, width) => {
    const ratio = height / width;
    const bounds = elWrapper.current.getBoundingClientRect();
    setScaledHeight(`${bounds.width * ratio}px`);
  };

  useEffect(() => {
    if (elWrapper.current && height && width) {
      updateHeight(height, width);
    }
  }, [elWrapper, height, width]);

  const onImageLoaded = () => {
    updateHeight(elImage.current.height, elImage.current.width);
    setOpacity(1);
    setIsLoading(false);
  };

  const onResize = () => {
    const ratio = elImage.current.height / elImage.current.width;
    const bounds = elWrapper.current.getBoundingClientRect();
    setScaledHeight(`${bounds.width * ratio}px`);
  };

  useEffect(() => {
    elImage.current.src = url;

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [url]);

  return (
    <Wrapper ref={elWrapper}>
      {isLoading && (
        <LoadingScreen>
          <Loading />
        </LoadingScreen>
      )}
      <ImgContainer
        style={{
          height: scaledHeight,
          opacity,
          transition: !isLoading ? 'height 500ms ease-in-out' : null,
        }}>
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
  height: number,
  url: string.isRequired,
  width: number,
};

Picture.defaultProps = {
  height: '100%',
  width: '100%',
};

export default Picture;
