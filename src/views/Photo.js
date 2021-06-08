import React from 'react';
import styled from 'styled-components';
import { usePhoto } from '../store';
import Actionbar from '../components/Actionbar';
import Content from '../components/Content';
import Header from '../components/Header';
import Slide from '../components/Slide';

const SlideWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  height: 100%;
  justify-content: center;
  position: relative;
`;

const Photo = ({ albumId, navigate, photoId }) => {
  const photo = usePhoto(albumId, photoId);

  const onBack = () => {
    navigate(`${process.env.PUBLIC_URL}/album/${albumId}`);
  };

  return (
    <>
      <Header />
      <Content
        style={{
          height: 'calc(100vh - 65px)',
        }}>
        <Actionbar title={photo.title} onBack={onBack} />
        <SlideWrapper>
          <Slide
            alt={photo.title}
            height={photo.height}
            url={photo.url}
            width={photo.width}
          />
        </SlideWrapper>
      </Content>
    </>
  );
};

export default Photo;
