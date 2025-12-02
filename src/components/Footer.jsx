import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>Desenvolvido por Bernardo Heckler © {new Date().getFullYear()} - Todos os Direitos Reservados</p>
    </footer>
  );
}
