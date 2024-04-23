import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ProductImageProvider } from './Components/productContext/productContext';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductImageProvider>
      <App />
      </ProductImageProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
