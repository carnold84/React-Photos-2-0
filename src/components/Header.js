import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  flex-shrink: 0;
  height: 65px;
  justify-content: center;
  margin: 0 25px;
  position: relative;
`;

const Title = styled.h2`
  color: rgba(0, 0, 0, 0.7);
  font-size: 1.5rem;
  line-height: 1rem;
  font-weight: normal;
  margin: 1px 0 0 0;
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
