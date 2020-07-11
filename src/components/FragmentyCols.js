import React from 'react'

const FragmentyCols = () => {
    const items = []
    return(
        <>
            {
                items.map( item => (
                    <React.Fragment key = {item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Vanessa</td>
        </> 
    )
}

export default FragmentyCols