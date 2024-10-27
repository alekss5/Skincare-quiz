import React from 'react';
import styles from './SubmitButton.module.css';
import Text from '../Text';

function SubmitButton({ onClick, style, fontStyle, children, text }) {
  const font = {
    color: '#1C2635',
    fontSize: '16px',
    margin: '0px',
    fontWeight: 500,
    ...fontStyle,
  }
  return (
    <button onClick={onClick} className={styles['submit-button']} style={style}>
      <Text style={font}>
        {text}
      </Text>
      {children}
    </button>
  );
}

export default SubmitButton;
