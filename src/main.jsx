import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('myPortfolio')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);