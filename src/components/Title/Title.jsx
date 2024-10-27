import React from 'react';
import styles from './Title.module.css'; 

const Title = ({ children, style, className }) => {
  return (
    <p className={`${styles.title} ${className}`} style={style}>
      {children}
    </p>
  );
};

export default Title;
