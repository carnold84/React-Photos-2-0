import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import back_button from '../images/back-arrow.svg';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: rgba(0, 0, 0, 0.05) solid 1px;
    display: flex;
`;

const BackBtn = styled.button`
    height: 50px;
    width: 50px;
    cursor: pointer;
    border: none;
    border-right: rgba(0, 0, 0, 0.05) solid 1px;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    display: flex;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    &:focus {
        outline: none;
    }
`;

const Title = styled.h2`
    font-size: 1.2em;
    line-height: 1em;
    font-weight: normal;
    margin: 1px 0 0 15px;
    flex-grow: 1;
    align-items: center;
    display: flex;
`;

const Actionbar = props => {
  const { title, onBackClick } = props;

  let back_btn = undefined;

  if (onBackClick) {
    back_btn = (
      <BackBtn onClick={onBackClick}>
        <img src={back_button} alt="Back" />
      </BackBtn>
    );
  }

  return (
    <Container>
      {back_btn}
      <Title>{title}</Title>
    </Container>
  );
};

const { func } = PropTypes;

Actionbar.propTypes = {
  onBackClick: func,
};

export default Actionbar;
