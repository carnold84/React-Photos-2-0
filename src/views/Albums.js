import React from 'react';
import { useAlbums } from '../store';
import { createImages } from '../createImages';
import Grid from '../components/Grid';
import Actionbar from '../components/Actionbar';
import { Content } from '../styles';

const Albums = () => {
  const albums = useAlbums();

  const items = createImages(albums, 'album');

  return (
    <>
      <Actionbar title={'React Photos'} />
      <Content>
        <Grid>{items}</Grid>
      </Content>
    </>
  );
};

export default Albums;
