import React from 'react';
import { any } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 25px 30px;
  width: 100%;

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

const Content = ({ children, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Container>{children}</Container>
    </Wrapper>
  );
};

Content.propTypes = {
  children: any,
};

export default Content;
