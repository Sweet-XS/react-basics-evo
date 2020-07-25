import React, {Component} from 'react'

class RenderPropsCounter extends Component{

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
        const {render} = this.props
        const {count} = this.state
        return(
            <div>
                {render(count, this.incrementCount)}
            </div>
        )
    }

}

export default RenderPropsCounter