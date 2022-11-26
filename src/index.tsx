import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import EpigramContextProvider from './store/EpigramsProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <EpigramContextProvider>
      <App />
    </EpigramContextProvider>
  </React.StrictMode>,
);
