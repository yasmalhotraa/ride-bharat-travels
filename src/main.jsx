import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Keep BrowserRouter here
import './components/Styling/index.css';
import App from './App.jsx';
import Header from './components/custom/header';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* Keep the BrowserRouter here */}
      <Header />
      <App />
    </BrowserRouter>
  </StrictMode>
);
