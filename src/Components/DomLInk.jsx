import React from 'react';
import { Link } from 'react-router-dom'; 

export const DomLink = ({ to, text }) => {
  return (
    <Link
      to={to}
      style={{ fontSize: '12px', textDecoration: 'none',fontWeight:'bold' }}
    >
      {text}
    </Link>
  );
};