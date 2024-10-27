import React from 'react';
import styles from './BackgroundContainer.module.css';

const BackgroundContainer = ({ backgroundImagePath, children }) => {
  
  const imageContainerStyle = {
 
    backgroundImage: `url(${backgroundImagePath})`,
  };

  return (
    <div className={styles.imageContainer} style={imageContainerStyle}>
      <div className={styles.containerStyle}>
        <div className={styles.contentContainer}>
        {children}
        </div>
      </div>
    </div>
  );
};

export default BackgroundContainer;
