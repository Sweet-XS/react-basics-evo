import React, {Component} from 'react'
import RefsFwd from './RefsFwd'

class RefsFwdParent extends Component{

    constructor(){
        super()
        this.inputRef = React.createRef()
    }

    onClick = () => {
        this.inputRef.current.focus()
    }

    render(){
        return(
            <div>
                <RefsFwd ref = {this.inputRef}/>
                <button onClick = {this.onClickHandler}>Focus</button>
            </div>
        )
    }
}

export default RefsFwdParent