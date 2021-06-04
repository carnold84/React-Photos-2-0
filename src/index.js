import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { StoreProvider } from './store';

ReactDOM.render(
  <StoreProvider>
    <App source={`${process.env.PUBLIC_URL}/sample_data.json`} />
  </StoreProvider>,
  document.getElementById('root')
);
//registerServiceWorker();
