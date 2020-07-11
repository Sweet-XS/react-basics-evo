import React, {Component} from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'

class PureCompsParentReg extends Component{

    constructor(){
        super()
        this.state = {
            name: 'Vanessa'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Vanessa'
            })
        }, 2000)
    }

    render(){
        console.log('***PureCompsParentReg render***')
        return(
            <div>
                <h1>Pure Components - Parent Component</h1>
                <RegularComp name = {this.state.name}></RegularComp>
                <PureComp name = {this.state.name}></PureComp>
            </div>
        )     
    }
}

export default PureCompsParentReg