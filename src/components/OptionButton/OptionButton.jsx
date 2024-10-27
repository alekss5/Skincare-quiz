import React from 'react'
import Text from '../Text'
import styles from './OptionButton.module.css'
function OptionButton({ isSelected, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.optionButton} ${isSelected ? styles.selected : ''}`}
    >
      <Text style={{ fontWeight: 500, margin: '5px', textAlign: 'left' }}>
        {children}
      </Text>

    </button>
  )
}

export default OptionButton