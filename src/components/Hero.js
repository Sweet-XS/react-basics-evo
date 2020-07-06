import React from 'react'

const Hero = ({hero:{name, age, skill}}) => {
    return <h2>I am {name} my age is {age} & my skill is {skill}</h2>
}

export default Hero