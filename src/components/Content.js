import React from 'react';
import { any } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 65px);
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 25px;
  width: 100%;

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

const Content = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

Content.propTypes = {
  children: any,
};

export default Content;
