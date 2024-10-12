import React from 'react';

const Title = ({ children,style }) => {
  const headerStyle = {
    fontFamily: "sans-serif",
    fontSize: "44px",
    fontWeight: 600,
    lineHeight: "44px",
    textAlign: "center",
    color: '#FFFFFF',
    margin: 0,
    ...style
  };

  return <p style={headerStyle}>{children}</p>;
};

export default Title;
