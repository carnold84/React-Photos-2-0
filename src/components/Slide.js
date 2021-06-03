import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Picture, { TYPES } from './Picture';

const Container = styled.div`
  padding: 20px;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Slide = ({ isAnimated, imageUrl, title }) => {
  return (
    <Container>
      <Picture isAnimated={isAnimated} type={TYPES.FIT} url={imageUrl} />
    </Container>
  );
};

const { string } = PropTypes;

Slide.propTypes = {
  title: string,
  imageUrl: string,
};

export default Slide;
