import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    grid-template-rows: repeat(3, 180px [col-start]);
    grid-template-columns: 25% 25% 25% 25%;
    display: grid;
`;

const Grid = props => {
    const { children } = props;

    return <Container>{children}</Container>;
};

const { array } = propTypes;

Grid.propTypes = {
    items: array,
};

export default Grid;
