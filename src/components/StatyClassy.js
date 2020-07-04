import React, {Component} from 'react'

class StatyClassy extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Welcome Hero'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thanks for Subscribing'
        })
    }

    render(){
        const {message} = this.state
        return(
            <div>
                <h1> {message}</h1>
                <button onClick= {() => this.changeMessage()}>Subscribe</button>
            </div>
        )
        
    }
}

export default StatyClassy