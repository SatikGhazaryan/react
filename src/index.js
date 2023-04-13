import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/Header/Header';
import Container from './components/container/Container';
import Footer from './components/footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   
    <Container />
    <Footer />
  </React.StrictMode>
);



