import React from 'react'

function OptionButton({isSelected, onClick ,children}) {
  return (
    <button
      className={`option ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      style={{
        minWidth: '189px',
        margin: '5px',
        padding: '14px 20px',
        border: '1px solid #5BC1ED',
        borderRadius: '8px',
        backgroundColor: isSelected ? '#5BC1ED' : 'white',
        color: '#1C2635',
        fontFamily: "'Proxima Nova', sans-serif",
        fontWeight: 500,
        fontSize: '16px',
        whiteSpace: 'nowrap',
      }}
    >
   {children}
  </button>
  )
}

export default OptionButton