import React from 'react'
import './InformationCard.css'
function InformationCard({ title, text }) {
    return (
        <div className='informationCard'>
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