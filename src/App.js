import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _find from 'lodash/find';

import Actionbar from './components/Actionbar';
import Loading from './components/Loading';
import Grid from './components/Grid';
import Image from './components/Image';
import Slide from './components/Slide';

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 14px;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.8);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
`;

const Content = styled.div`
    position: relative;
    width: 100%;
    flex-grow: 1;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    display: flex;
`;

class App extends Component {
    static APP_STATES = {
        ALBUMS: 'albums',
        PHOTOS: 'photos',
        PHOTO: 'photo',
    };

    state = {
        view: App.APP_STATES.ALBUMS,
        albums: undefined,
        albumsById: undefined,
        albumId: undefined,
        photoId: undefined,
    };

    onBackClick = () => {
        let { view } = this.state;

        if (view === App.APP_STATES.PHOTOS) {
            view = App.APP_STATES.ALBUMS;
        } else if (view === App.APP_STATES.PHOTO) {
            view = App.APP_STATES.PHOTOS;
        }

        this.setState({ view });
    };

    onImageClick = id => {
        let { view, albumId, photoId } = this.state;

        if (view === App.APP_STATES.ALBUMS) {
            albumId = id;
            view = App.APP_STATES.PHOTOS;
        } else if (view === App.APP_STATES.PHOTOS) {
            photoId = id;
            view = App.APP_STATES.PHOTO;
        }

        this.setState({ view, albumId, photoId });
    };

    createImages = (data, onClick) => {
        // loop through data and create an Image element for each one
        let items = data.map(item => {
            let image_url = undefined;

            // check if photos exist
            if (item.photos !== undefined && item.photos.length > 0) {
                // store image url of first photo if it's album (has a photos attribute)
                image_url = item.photos[0].url;
            } else if (item.url !== undefined) {
                // no photos attribute so it's a photo
                image_url = item.url;
            }

            // create Image element
            return <Image id={item.id} title={item.title} imageUrl={image_url} onClick={onClick} key={item.id} />;
        });

        return items;
    };

    componentDidMount() {
        const { source } = this.props;

        // use the built in fetch api to retrieve JSON file
        fetch(source)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const albums = data.albums;
                let albumsById = {};
                albums.forEach(album => {
                    albumsById[album.id] = album;
                });
                // ... and update the state
                this.setState({ albums, albumsById });
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        const { albums, albumsById, albumId, photoId, view } = this.state;

        let container = undefined;
        let onBackClick = undefined;

        if (albums) {

            let content = undefined;

            if (view === App.APP_STATES.ALBUMS) {
                const items = this.createImages(albums, this.onImageClick);
                content = <Grid>{items}</Grid>;
            } else if (view === App.APP_STATES.PHOTOS) {
                const items = this.createImages(albumsById[albumId].photos, this.onImageClick);
                content = <Grid>{items}</Grid>;
                onBackClick = this.onBackClick;
            } else if (view === App.APP_STATES.PHOTO) {
                const photo = _find(albumsById[albumId].photos, photo => photo.id === photoId);
                content = <Slide id={photo.id} title={photo.title} imageUrl={photo.url} />;
                onBackClick = this.onBackClick;
            }
            
            container = (
                <Container>
                    <Actionbar title={'React Photos 2.0'} onBackClick={onBackClick} />
                    <Content>
                        {content}
                    </Content>
                </Container>
            );

        } else {
            container = (
                <Container>
                    <Loading />
                </Container>
            );
        }

        return container;
    }
}

const { string } = PropTypes;

App.propTypes = {
    source: string.isRequired,
};

export default App;
