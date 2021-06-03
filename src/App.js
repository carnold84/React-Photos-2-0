import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Router } from '@reach/router';
import styled, { createGlobalStyle } from 'styled-components';

import { ACTIONS, useAlbums, useStore } from './store';
import Albums from './views/Albums';
import Loading from './components/Loading';
import Album from './views/Album';
import Photo from './views/Photo';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 14px;
    line-height: 1.3rem;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Condensed', Arial, Helvetica, Verdana, sans-serif;
    color: rgba(0, 0, 0, 0.8);
  }
`;

const StyledRouter = styled(Router)`
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const LoadingScreen = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const App = ({ source }) => {
  const { dispatch } = useStore();
  const albums = useAlbums();

  useEffect(() => {
    const loadData = async () => {
      console.log('loadData');
      const response = await fetch(source);
      const nextData = await response.json();
      dispatch({ payload: nextData, type: ACTIONS.SET_DATA });
    };

    loadData();
  }, [dispatch, source]);

  if (albums) {
    return (
      <>
        <GlobalStyles />
        <StyledRouter basepath={process.env.PUBLIC_URL}>
          <Albums exact={true} path={'/'} />
          <Album path={'/album/:albumId'} />
          <Photo path={'/album/:albumId/photo/:photoId'} />
        </StyledRouter>
      </>
    );
  }

  return (
    <LoadingScreen>
      <Loading />
    </LoadingScreen>
  );
};

const { string } = PropTypes;

App.propTypes = {
  source: string.isRequired,
};

export default App;
