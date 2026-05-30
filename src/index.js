import React from 'react';
import ReactDOM from 'react-dom/client';
import  GlobalStyle  from './GLstyles/globalstyles';
import MyRoutes from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRoutes />
    <GlobalStyle/>
  </React.StrictMode>
);

