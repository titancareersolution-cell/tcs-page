import React from 'react';

const ServiceCard = ({ title, children, minHeight }) => (
  <div style={{
    background: '#fcfcfc',
    borderRadius: '12px',
    boxShadow: '0 4px 24px rgba(230,126,34,0.18), 0 1.5px 0 #e67e22',
    border: '1.5px solid #e67e22',
    padding: '1.5rem',
    minWidth: '0',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: '100%',
    minHeight: minHeight || 'auto',
    transition: 'box-shadow 0.2s',
    boxSizing: 'border-box',
  }}>
    <h3 style={{ color: '#e67e22', fontWeight: 700, fontSize: '1.25rem', marginBottom: '1rem' }}>{title}</h3>
    <div style={{ color: '#333', fontSize: '1rem', fontWeight: 400 }}>{children}</div>
  </div>
);

export default ServiceCard; 