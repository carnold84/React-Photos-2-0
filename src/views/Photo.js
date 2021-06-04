import React from 'react';
import { motion } from 'framer-motion';
import { usePhoto } from '../store';
import Actionbar from '../components/Actionbar';
import Content from '../components/Content';
import Header from '../components/Header';
import Slide from '../components/Slide';

const Photo = ({ albumId, navigate, photoId }) => {
  const photo = usePhoto(albumId, photoId);

  const onBack = () => {
    navigate(`${process.env.PUBLIC_URL}/album/${albumId}`);
  };

  console.log(photo);

  return (
    <>
      <Header />
      <Content>
        <Actionbar title={photo.title} onBack={onBack} />
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          exit={{ opacity: 0, scale: 0.9 }}
          style={{ display: 'flex', height: '100%' }}
          transition={{ ease: 'easeOut', duration: 0.5 }}>
          <div
            style={{
              flexGrow: 1,
              margin: '20px 0 40px',
              position: 'relative',
            }}>
            <Slide
              id={photo.id}
              imageUrl={photo.url}
              isAnimated={false}
              title={photo.title}
            />
          </div>
        </motion.div>
      </Content>
    </>
  );
};

export default Photo;
