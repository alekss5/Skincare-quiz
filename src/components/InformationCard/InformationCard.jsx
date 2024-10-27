import React from 'react'
import style from './InformationCard.module.css'
import Title from '../Title'
import Text from '../Text'
function InformationCard({ title, text }) {
    return (
        <div className={style.informationCard}>
            <Title style={{ fontSize: '30px', lineHeight: '26.4px', color: '#1C2635', paddingBottom: '15px' }}>
                {title}
            </Title>
            <Text className={style.informationText}> {text}</Text>
        </div>
    )
}

export default InformationCard