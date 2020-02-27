import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loading from './Loading';

const Container = styled.div`
    width: ${props => (props.width ? props.width : '100%')};
    height: ${props => (props.height ? props.height : '100%')};
    border: ${props => (props.border ? '#f2f2f2 solid 1px' : 'none')};
    align-items: center;
    justify-content: center;
    display: flex;
`;

const BgImage = styled.div`
    position: absolute;
    width: ${props => (props.width ? props.width : '100%')};
    height: ${props => (props.height ? props.height : '100%')};
    background-position: center center;
    background-size: ${props => props.type};
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    opacity: ${props => props.opacity};
    transition: opacity 500ms ease-out;
`;

export const TYPES = {
  FILL: 'cover',
  FIT: 'contain',
};

const Picture = props => {
  const [imageUrl, setImageUrl] = useState('');

  const { height, type, url, width } = props;
  let content = undefined;

  if (imageUrl === '') {
    content = <Loading />;
  }

  let image = undefined;

  const onImageLoaded = () => {
    const url = image.src;

    setImageUrl(url);
  };

  image = new Image(width, height);
  image.addEventListener('load', onImageLoaded, false);
  image.src = url;

  return (
    <Container width={width} height={height}>
      <BgImage
        url={imageUrl}
        opacity={imageUrl === '' ? 0 : 1}
        width={width}
        height={height}
        type={type}
      />
      {content}
    </Container>
  );
};

const { string, oneOf } = PropTypes;

Picture.propTypes = {
  height: string,
  type: oneOf([TYPES.FILL, TYPES.FIT]),
  url: string.isRequired,
  width: string,
};

Picture.defaultProps = {
  height: '100%',
  type: TYPES.FILL,
  width: '100%',
};

export default Picture;
