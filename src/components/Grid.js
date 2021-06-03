import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;

  @media (min-width: 460px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 1250px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const Grid = (props) => {
  const { children } = props;

  return <Container>{children}</Container>;
};

const { array } = propTypes;

Grid.propTypes = {
  items: array,
};

export default Grid;
