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

const Logo = styled.div`
  margin: 0 10px 0 0;
  svg {
    height: 16px;
  }
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
      <Logo>
        <svg
          viewBox="0 0 129 137"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M84.631 0H42.5L0.5 135L25.5518 136.066L40.1392 89H84.631C109.171 89 129 69.0408 129 44.5C129 19.9592 113.5 0 84.631 0ZM47.338 65H82.631C93.5 65 105 58.0669 105 44.5C105 30.9331 96.0538 24 82.631 24H58.5249L47.338 65Z"
            fill="black"
          />
        </svg>
      </Logo>
      <Title>React Photos</Title>
    </Container>
  );
};

const { func } = PropTypes;

Header.propTypes = {
  onBackClick: func,
};

export default Header;
