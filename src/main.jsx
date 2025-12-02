import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import { preloadImages } from './utils/performance';
import fotoperfil from './svg/fotoperfil.svg';
import fotoNatal from './svg/natal.png';

// Alterar favicon baseado no mês
const hoje = new Date();
const mesAtual = hoje.getMonth();
const diaAtual = hoje.getDate();
const favicon = document.querySelector('link[rel="icon"]');
if (favicon) {
  favicon.href = mesAtual === 11 ? fotoNatal : fotoperfil;
}

// Alert de Feliz Natal no dia 25/12
if (mesAtual === 11 && diaAtual === 25) {
  alert('Ho Ho Ho Ho! Feliz Natal! 🎄🎅❄️');
}

// Preload imagens críticas
const criticalImages = [
  '/site-pessoal/src/svg/fotoperfil.svg',
  '/site-pessoal/src/png/blueprint-pattern.jpeg'
];
preloadImages(criticalImages);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/site-pessoal">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/site-pessoal/sw.js')
      .then(() => console.log('SW registered'))
      .catch(() => console.log('SW registration failed'));
  });
}