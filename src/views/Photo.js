import React from 'react';
import { motion } from 'framer-motion';
import { usePhoto } from '../store';
import Actionbar from '../components/Actionbar';
import Slide from '../components/Slide';
import { Content } from '../styles';
import Header from '../components/Header';

const Photo = ({ albumId, navigate, photoId }) => {
  const photo = usePhoto(albumId, photoId);

  const onBack = () => {
    navigate(`${process.env.PUBLIC_URL}/album/${albumId}`);
  };

  return (
    <>
      <Header />
      <Actionbar title={photo.title} onBack={onBack} />
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        style={{ display: 'flex', height: '100%' }}
        transition={{ ease: 'easeOut', duration: 2 }}>
        <Content style={{ margin: '0 20px 20px' }}>
          <Slide
            id={photo.id}
            imageUrl={photo.url}
            isAnimated={false}
            title={photo.title}
          />
        </Content>
      </motion.div>
    </>
  );
};

export default Photo;
