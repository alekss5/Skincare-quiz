import React from 'react'

function BackButton({ handleBack, children }) {
    return (
        <button
            onClick={handleBack}
            style={{
                marginRight: '20px',
                color: '#677487',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '19px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline',
            }}
        >
            {children}
        </button>
    )
}

export default BackButton