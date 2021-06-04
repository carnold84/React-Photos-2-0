import React from 'react';
import { useAlbums } from '../store';
import { createImages } from '../createImages';
import Actionbar from '../components/Actionbar';
import Content from '../components/Content';
import Header from '../components/Header';
import AnimatedGrid from '../components/AnimatedGrid';

const Albums = () => {
  const albums = useAlbums();

  const items = createImages(albums, 'album');

  return (
    <>
      <Header />
      <Content>
        <Actionbar title={'Albums'} />
        <AnimatedGrid>{items}</AnimatedGrid>
      </Content>
    </>
  );
};

export default Albums;
