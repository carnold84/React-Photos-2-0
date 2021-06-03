import React from 'react';
import { usePhoto } from '../store';
import Actionbar from '../components/Actionbar';
import Slide from '../components/Slide';
import { Content } from '../styles';

const Photo = ({ albumId, navigate, photoId }) => {
  const photo = usePhoto(albumId, photoId);

  const onBack = () => {
    navigate(`${process.env.PUBLIC_URL}/album/${albumId}`);
  };

  return (
    <>
      <Actionbar title={photo.title} onBack={onBack} />
      <Content>
        <Slide id={photo.id} title={photo.title} imageUrl={photo.url} />
      </Content>
    </>
  );
};

export default Photo;
