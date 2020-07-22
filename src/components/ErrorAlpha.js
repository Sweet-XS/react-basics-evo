import React from 'react'

const ErrorAlpha = ({heroName}) => {

    if(heroName === 'Joker') throw new Error('HAHAHA!') 

    return <h1>{heroName}</h1>
}

export default ErrorAlpha