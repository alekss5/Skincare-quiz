// Subtext.js
import React from 'react';

const Subtext = ({ children,style }) => {
  const subtextStyle = {
    fontFamily: "'Proxima Nova', sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "16px",
    textAlign: "center",
    color: '#FFFFFF',
    height: "auto", 
    margin: "0 0 24px 0",
  
    ...style
  };

  return <p style={subtextStyle}>{children}</p>;
};

export default Subtext;
