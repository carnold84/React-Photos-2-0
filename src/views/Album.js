import React from 'react';
import { useAlbum } from '../store';
import { createImages } from '../createImages';
import Grid from '../components/Grid';
import Actionbar from '../components/Actionbar';
import { Content } from '../styles';

const Album = ({ albumId, navigate }) => {
  const album = useAlbum(albumId);

  const onBack = () => {
    navigate(`${process.env.PUBLIC_URL}/`);
  };

  const items = createImages(album.photos, `album/${albumId}/photo`);

  return (
    <>
      <Actionbar title={album.title} onBack={onBack} />
      <Content>
        <Grid>{items}</Grid>
      </Content>
    </>
  );
};

export default Album;
