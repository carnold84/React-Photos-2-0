import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import styled from 'styled-components';

import Picture from './Picture';

const Container = styled(Link)`
  position: relative;
  cursor: pointer;
`;

const Title = styled.p`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  color: rgba(255, 255, 255, 1);
  padding: 10px;
  margin: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.75) 100%
  );
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  display: flex;
`;

const Image = ({ title, imageUrl, to }) => {
  return (
    <Container to={to}>
      <Picture url={imageUrl} />
      <Title>{title}</Title>
    </Container>
  );
};

const { string } = PropTypes;

Image.propTypes = {
  id: string.isRequired,
  imageUrl: string,
  title: string,
  to: string,
};

export default Image;
