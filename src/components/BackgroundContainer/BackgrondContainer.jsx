import React from 'react';
import './BackgroundContainer.css';

const BackgroundContainer = ({ backgroundImagePath, children }) => {
  const imageContainerStyle = {
    backgroundImage: `url(${backgroundImagePath})`,
  };

  return (
    <div className="image-container" style={imageContainerStyle}>
      <div className="container-style">
        <div className='content-container'>
        {children}
        </div>
   
      </div>
    </div>
  );
};

export default BackgroundContainer;
