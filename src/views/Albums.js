import React from 'react';
import { motion } from 'framer-motion';
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
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 2 }}>
        <Content style={{ margin: '0 20px 20px' }}>
          <Grid>{items}</Grid>
        </Content>
      </motion.div>
    </>
  );
};

export default Albums;
