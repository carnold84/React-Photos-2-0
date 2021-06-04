import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  width: 100%;

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

const AnimatedGrid = ({ children }) => {
  return (
    <Container
      animate="enter"
      exit="exit"
      initial="initial"
      variants={{
        enter: { transition: { staggerChildren: 0.1 } },
        exit: { transition: { staggerChildren: 0.1 } },
      }}>
      {children}
    </Container>
  );
};

export default AnimatedGrid;
