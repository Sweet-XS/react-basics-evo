import React, {Component} from 'react'

class RenderPropsCounterChildren extends Component{

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {count : prevState.count + 1}
        })
    }

    render(){
        const {children} = this.props
        const {count} = this.state
        return(
            <div>
                {children(count, this.incrementCount)}
            </div>
        )
    }

}

export default RenderPropsCounterChildren