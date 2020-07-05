import React, {Component} from 'react'

class EventyBind extends Component{

    constructor(props){
        super(props)

        this.state = {
            message: 'hello'
        }

        this.clickConsHandler= this.clickConsHandler.bind(this)
    }
    //2nd best
    clickConsHandler(){
        this.setState({
            message: 'Using Constructor Bind!'
        })
    }
    //it causes performance issues, so avoid
    clickBindHandler(){
        this.setState({
            message: 'Using Bind!'
        })
    }
    //3rd best
    clickArrowHandler(){
        this.setState({
            message: 'Using Arrow Function from render!'
        })
    }
    //best 
    clickArrowFunkHandler = () => {
        this.setState({
            message: 'Using Arrow Function!'
        })
    }    

    render(){
        const {message} = this.state
        return(
            <div>
                <p>{message}</p>
                <button onClick = {this.clickBindHandler.bind(this)}>Click Bind</button>
                <button onClick = {() => this.clickArrowHandler()}>Click from Arrow</button>
                <button onClick = {this.clickConsHandler}>Click Cons</button>
                <button onClick = {this.clickArrowFunkHandler}>Click To Arrow</button>
            </div>
        )
    }
}

export default EventyBind 