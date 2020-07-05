import React, {Component} from 'react'

class EventyHandClassy extends Component{
    //event handler
    clickHandler(){
        console.log('Clicked from classic')
    }
    
    render(){
        return(
            <div>
                <button onClick= {this.clickHandler}>Click Event</button>
            </div>
        )
    }
}

export default EventyHandClassy