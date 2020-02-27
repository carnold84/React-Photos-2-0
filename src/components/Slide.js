import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Picture, {TYPES} from './Picture';

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const Title = styled.p`
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    color: rgba(255, 255, 255, 1);
    padding: 10px;
    margin: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.75) 100%);
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    display: flex;
`;

const Slide = props => {
  const { title, imageUrl } = props;

  return (
    <Container>
      <Picture url={imageUrl} type={TYPES.FIT} />
      <Title>{title}</Title>
    </Container>
  );
};

const { string } = PropTypes;

Slide.propTypes = {
  title: string,
  imageUrl: string,
};

export default Slide;
