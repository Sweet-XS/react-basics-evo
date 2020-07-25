import React, {Component} from 'react'

class RenderPropsClickCount extends Component{

    render(){
        const {count, incrementCount} = this.props
        return(
            <button onClick={incrementCount}>Clicked {count} times</button>
        )
    }

}

export default RenderPropsClickCount