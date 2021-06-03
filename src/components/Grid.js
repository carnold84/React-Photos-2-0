import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
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
