import React, {Component} from 'react'

class ProperClassy extends Component{
    render(){
        const {name, heroName} = this.props
        return <h1>Properties: {name} a.k.a {heroName}</h1>
    }
}

export default ProperClassy