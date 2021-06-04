import React from 'react';
import { Location, Router } from '@reach/router';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import Albums from './views/Albums';
import Album from './views/Album';
import Photo from './views/Photo';

const StyledRouter = styled(Router)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Routes = () => {
  return (
    <Location>
      {({ location }) => (
        <AnimatePresence exitBeforeEnter={true}>
          <StyledRouter
            basepath={process.env.PUBLIC_URL}
            key={location.key}
            location={location}>
            <Albums exact={true} path={'/'} />
            <Album path={'/album/:albumId'} />
            <Photo path={'/album/:albumId/photo/:photoId'} />
          </StyledRouter>
        </AnimatePresence>
      )}
    </Location>
  );
};

export default Routes;
