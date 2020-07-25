import React, {Component} from 'react'

class RenderPropsUser extends Component{

    render(){

        const {render} = this.props

        return(
        <div>{render(true)}</div>
        )
    }

}

export default RenderPropsUser