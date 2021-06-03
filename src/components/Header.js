import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  height: 20px;
  margin: 20px 20px 0;
  position: relative;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  line-height: 1rem;
  font-weight: normal;
  margin: 1px 0 0 0;
  flex-grow: 1;
  align-items: center;
  display: flex;
`;

const Header = () => {
  return (
    <Container>
      <Title>React Photos</Title>
    </Container>
  );
};

const { func } = PropTypes;

Header.propTypes = {
  onBackClick: func,
};

export default Header;
