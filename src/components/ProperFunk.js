import React from 'react'

//destructured props
const Proper = ({name, heroName, children}) => {
    //2nd option for destructuring props
    //const {name, heroName} = props
    return (
        <div>
            <h1>Properties: {name} a.k.a {heroName}</h1>
            {children}
        </div>
    )
}

export default Proper