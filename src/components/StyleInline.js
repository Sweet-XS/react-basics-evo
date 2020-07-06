import React from 'react'

//Inline style, avoid use it in job because of security issues
const myStyle = {
    color: 'green'
}

const StyleInline = () => {
    return(
        <div>
            <h1 style={myStyle}>Inline Styling, do not use it in work</h1>
        </div>
    )
}

export default StyleInline