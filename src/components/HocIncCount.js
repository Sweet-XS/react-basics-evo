import React, {Component} from 'react'
import withCounter from './hocWithCounter'
//this is a component that uses a HOC
class HocIncCount extends Component{

    render(){
   
        const {count, heroName, incrementCount, name} = this.props
        return(
            <div>
                <button onClick = {incrementCount}>{name} a.k.a. {heroName} Clicked {count} times</button>
            </div>
        )
    }

}

export default withCounter(HocIncCount, 5)