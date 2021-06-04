import React from 'react';
import { useAlbums } from '../store';
import { createImages } from '../createImages';
import Actionbar from '../components/Actionbar';
import { Content } from '../styles';
import Header from '../components/Header';
import AnimatedGrid from '../components/AnimatedGrid';

const Albums = () => {
  const albums = useAlbums();

  const items = createImages(albums, 'album');

  return (
    <>
      <Header />
      <Actionbar title={'Albums'} />
      <Content style={{ margin: '0 20px 20px' }}>
        <AnimatedGrid>{items}</AnimatedGrid>
      </Content>
    </>
  );
};

export default Albums;
