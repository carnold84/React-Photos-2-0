import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App source={`${process.env.PUBLIC_URL}/sample_data.json`} />,
  document.getElementById('root')
);
registerServiceWorker();
