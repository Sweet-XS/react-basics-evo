import React from 'react'
import './myStyles.css'

const Stylesheet = ({bleu}) => {
    const className = bleu ? 'bleu' : ''
    return(
        <div>
            <h1 className='orangy'>CSS stylesheet</h1>
            <h1 className={className}>CSS stylesheet as props</h1>
            <h1 className={`${className} italy`}>CSS stylesheet template literal</h1>
        </div>
    )
} 

export default Stylesheet