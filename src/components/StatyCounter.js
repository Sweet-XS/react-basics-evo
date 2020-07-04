import React, {Component} from 'react'

class StatyCounter extends Component{

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    incrementOne(){
        this.setState({
            count: this.state.count + 1
        })
    }

    increment(){
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }), 
        //this is the place to set code that execute after change state
        () => {console.log('Callback value: ', this.state.count)})
        // here we will have the previous state value
        console.log('count: ', this.state.count)
    }

    incrementThree(){
        //the next only works if prevState is used at increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        const {count} = this.state
        return(
            <div>
                <h1>Count: {count}</h1>
                <button onClick = {() => this.incrementOne()}>Increment</button>
                <p><button onClick = {() => this.incrementThree()}>Increment</button></p>
                
            </div>
        )
    }
}

export default StatyCounter