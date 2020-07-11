import React, {Component} from 'react'
import RefsInput from './RefsInput'

class RefsParentInput extends Component {

    constructor(){
        super()
        this.compRef = React.createRef()
    }

    onClickHandler = () => {
        this.compRef.current.focusInput()
    }

    render(){
        return(
            <div>
                <RefsInput ref = {this.compRef}/>
                <button onClick = {this.onClickHandler}>Focus Input</button>
            </div>
        )
    }

}

export default RefsParentInput