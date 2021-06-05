import React from 'react';
import { motion } from 'framer-motion';
import { usePhoto } from '../store';
import Actionbar from '../components/Actionbar';
import Content from '../components/Content';
import Header from '../components/Header';
import Slide from '../components/Slide';

const IMAGE_BASE = 'https://res.cloudinary.com/carnold/image/upload';
const IMAGE_ID = 'v1622797875/react-photos';

const Photo = ({ albumId, navigate, photoId }) => {
  const photo = usePhoto(albumId, photoId);

  const onBack = () => {
    navigate(`${process.env.PUBLIC_URL}/album/${albumId}`);
  };

  const imageUrl = `${IMAGE_BASE}/w_800/${IMAGE_ID}/${photo.url}`;

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
              imageUrl={imageUrl}
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
