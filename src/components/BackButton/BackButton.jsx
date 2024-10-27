import React from 'react'
import Text from '../Text'
import styles from './BackButton.module.css'
function BackButton({ handleBack, children }) {
    return (
        <button
            onClick={handleBack}
            className={styles['back-button']}
        >
            <Text style={{
                color: '#677487',
                fontWeight: 500,
                lineHeight: '19px'
            }}>
                {children}
            </Text>

        </button>
    )
}

export default BackButton