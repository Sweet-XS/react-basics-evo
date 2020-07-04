import React from 'react'

const Jsxy = () => {
    /*return(
        <div>
            <h1>This is JSX</h1>
        </div>
    )*/
    //Without JSX: createElement(htmltag, optional properties, html children) clumsy
    return React.createElement('div', 
    {id: 'hello', className: 'jsxyClass'}, 
    React.createElement('h1', null, 'Without JSX'))
}

export default Jsxy