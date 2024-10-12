import React from 'react'

function CenterWrapper({children,style}) {
    const wrapper = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: '16px',
        ...style
      }
  return (
    <div style={wrapper}>{children}</div>
  )
}

export default CenterWrapper