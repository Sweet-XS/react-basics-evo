import React, {Component} from 'react'

class RefsInput extends Component{

    constructor(){
        super()
        this.inputRef = React.createRef()
    }

    focusInput(){
        this.inputRef.current.focus()
    }

    render(){
        return(
            <div>
                <p>
                    <input type="text" ref={this.inputRef}></input>
                </p>
            </div>
        )
    }

}

export default RefsInput