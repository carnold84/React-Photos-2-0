import React from 'react';
import { motion } from 'framer-motion';
import { useAlbum } from '../store';
import { createImages } from '../createImages';
import Grid from '../components/Grid';
import Actionbar from '../components/Actionbar';
import { Content } from '../styles';
import Header from '../components/Header';

const Album = ({ albumId, navigate }) => {
  const album = useAlbum(albumId);

  const onBack = () => {
    navigate(`${process.env.PUBLIC_URL}/`);
  };

  const items = createImages(album.photos, `album/${albumId}/photo`);

  return (
    <>
      <Header />
      <Actionbar title={album.title} onBack={onBack} />
      <motion.div
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 2 }}>
        <Content style={{ margin: '0 20px 20px' }}>
          <Grid>{items}</Grid>
        </Content>
      </motion.div>
    </>
  );
};

export default Album;
