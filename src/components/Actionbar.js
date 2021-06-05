import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled(motion.div)`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  height: 40px;
  margin: 20px 0;
  position: relative;
`;

const BackBtn = styled.button`
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  fill: rgba(0, 0, 0, 0.5);
  justify-content: center;
  margin: 0 10px 0 -2px;
  padding: 0;

  svg {
    fill: inherit;
    height: 28px;
    width: 28px;
  }

  &:hover {
    fill: rgba(0, 0, 0, 1);
  }

  &:focus {
    outline: none;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  line-height: 2.1rem;
  font-weight: normal;
  margin: 1px 0 0 0;
  flex-grow: 1;
  align-items: center;
  display: flex;
`;

const transition = { duration: 0.5 };

const Actionbar = ({ onBack, title }) => {
  let backBtn = undefined;

  if (onBack) {
    backBtn = (
      <BackBtn onClick={onBack}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M15.535 3.515L7.04999 12L15.535 20.485L16.95 19.071L9.87799 12L16.95 4.929L15.535 3.515Z" />
        </svg>
      </BackBtn>
    );
  }

  return (
    <Container
      animate="enter"
      exit="exit"
      initial="initial"
      variants={{
        initial: { opacity: 0, transition, x: -20 },
        enter: { opacity: 1, transition, x: 0 },
        exit: { opacity: 0, transition, x: 20 },
      }}>
      {backBtn}
      <Title>{title}</Title>
    </Container>
  );
};

const { func } = PropTypes;

Actionbar.propTypes = {
  onBackClick: func,
};

export default Actionbar;
