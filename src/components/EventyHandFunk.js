import React from 'react'

const EventyHandFunk = () => {

    //event handler
    function clickHandler(){
        console.log('clicked from functional')
    }

    return(
        <div>
            <p>
                <button onClick= {clickHandler}>Click Event</button>
            </p>
        </div>
    )
}

export default EventyHandFunk