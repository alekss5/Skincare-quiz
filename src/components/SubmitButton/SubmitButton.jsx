import React from 'react';
import './SubmitButton.css'; // Import the CSS file

function SubmitButton({ onClick, style, fontStyle, children }) {
  return (
    <button onClick={onClick} className="submit-button" style={style}>
      <p className="submit-button-text" style={fontStyle}>
        {children}
      </p>
    </button>
  );
}

export default SubmitButton;
