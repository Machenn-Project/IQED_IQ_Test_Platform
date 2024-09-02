import React from 'react';
import { Link } from 'react-router-dom'; 

const DomLink = ({ to, text,fontSize }) =>{
  return (
    <Link
      to={to}
      style={{ fontSize: fontSize || "12px", textDecoration: 'none',fontWeight:'bold' }}
    >
      {text}
    </Link>
  );
};

export default DomLink;