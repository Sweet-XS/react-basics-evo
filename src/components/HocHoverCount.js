import React, {Component} from 'react'
import withCounter from './hocWithCounter'
//this is a component that uses a HOC
class HocHoverCount extends Component{

    render(){
        const {count, incrementCount, name} = this.props
        return(
            <div>
                <h2 onMouseOver={incrementCount}>{name} Hovered {count} times</h2>
            </div>
        )
    }
}

export default withCounter(HocHoverCount, 3)