import React, {Component} from 'react'
import MemoComp from './MemoComp'

class MemoCompRegParent extends Component{

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
        console.log('***MemoCompRegParent render***')
        return(
            <div>
                <h1>Memo Components - Parent Component</h1>
                <MemoComp name = {this.state.name}/>
            </div>
        )     
    }
}

export default MemoCompRegParent