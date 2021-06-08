import React, { createContext, useContext, useReducer } from 'react';

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

export const ACTIONS = {
  SET_DATA: 'setData',
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ACTIONS.SET_DATA:
        const albums = action.payload.albums;
        let albumsById = {};

        const nextAlbums = albums.map((album) => {
          const nextAlbum = {
            ...album,
            photos: album.photos.map((photo) => {
              return {
                ...photo,
                url: photo.url,
              };
            }),
          };
          albumsById[album.id] = nextAlbum;

          return nextAlbum;
        });

        return { albums: nextAlbums, albumsById };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const useStore = () => {
  return useContext(store);
};

export const useAlbums = () => {
  const { state } = useStore();

  return state.albums;
};

export const useAlbum = (albumId) => {
  const { state } = useStore();

  return state.albumsById[albumId];
};

export const usePhoto = (albumId, photoId) => {
  const { state } = useStore();

  return state.albumsById[albumId].photos.filter(({ id }) => {
    return id === photoId;
  })[0];
};
