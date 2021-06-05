import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Picture from './Picture';

const Container = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
`;

const Slide = ({ isAnimated, imageUrl, title }) => {
  return (
    <Container>
      <Picture isAnimated={isAnimated} url={imageUrl} />
    </Container>
  );
};

const { string } = PropTypes;

Slide.propTypes = {
  title: string,
  imageUrl: string,
};

export default Slide;
