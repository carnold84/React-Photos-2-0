import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loading from './Loading';

const Container = styled.div`
    width: ${props => (props.width ? props.width : '100%')};
    height: ${props => (props.height ? props.height : '100%')};
    border: ${props => (props.border ? '#f2f2f2 solid 1px' : 'none')};
    align-items: center;
    justify-content: center;
    display: flex;
`;

const BgImage = styled.div`
    position: absolute;
    width: ${props => (props.width ? props.width : '100%')};
    height: ${props => (props.height ? props.height : '100%')};
    background-position: center center;
    background-size: ${props => props.type};
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    opacity: ${props => props.opacity};
    transition: opacity 500ms ease-out;
`;

class Picture extends Component {
    static TYPES = {
        FILL: 'cover',
        FIT: 'contain',
    };

    state = {
        isLoading: true,
        url: '',
    };

    image = undefined;

    onImageLoaded = () => {
        const isLoading = true;
        const url = this.image.src;

        this.setState({ isLoading, url });
    };

    componentWillMount = () => {
        const { url, width, height } = this.props;

        this.image = new Image(width, height);
        this.image.addEventListener('load', this.onImageLoaded, false);
        this.image.src = url;
    };

    render = () => {
        const { url, width, height, type } = this.props;
        let content = undefined;

        if (this.state.url === '') {
            content = <Loading />;
        }

        return (
            <Container width={width} height={height}>
                <BgImage
                    url={this.state.url}
                    opacity={this.state.url === '' ? 0 : 1}
                    width={width}
                    height={height}
                    type={type}
                />
                {content}
            </Container>
        );
    };
}

const { string, oneOf } = PropTypes;

Picture.propTypes = {
    url: string.isRequired,
    width: string,
    height: string,
    type: oneOf([Picture.TYPES.FILL, Picture.TYPES.FIT]),
};

Picture.defaultProps = {
    width: '100%',
    height: '100%',
    type: Picture.TYPES.FILL,
};

export default Picture;
