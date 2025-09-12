import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/+923001311111"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        backgroundColor: '#25D366',
        color: '#fff',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        textDecoration: 'none',
      }}
    >
      <i className="fab fa-whatsapp" style={{ fontSize: '24px' }}></i>
    </a>
  );
}
