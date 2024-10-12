import React from 'react'

function InformationCard({ title, text }) {
    return (
        <div style={{
            width: '280px',
            borderRadius: '8px',
            backgroundColor: "#EEF7FB",
            padding: '35px',
        }}>
            <h1 style={{ fontFamily: 'Grange', fontWeight: 600, fontSize: '30px', lineHeight: '26.4px', textAlign: 'center' }}>
                {title}
            </h1>
            <div>
                <p style={{ fontFamily: 'Proxima Nova', fontSize: '19px', lineHeight: '24px', fontWeight: 400 }}>{text}</p>
            </div>


        </div>
    )
}

export default InformationCard