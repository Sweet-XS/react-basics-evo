import React, {Component} from 'react'

class RefsDemo extends Component{

    constructor(){
        super()
        this.inputRef = React.createRef()
        //older refs approach
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
        //older refs approach
        if(this.cbRef){
            this.cbRef.focus()
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    click2Handler = () => {
        alert(this.cbRef.value)
    }

    render(){
        return(
            <div>
                <p>
                    <input type="text" ref = {this.inputRef}></input>
                    <button onClick = {this.clickHandler}>Click Me!</button>
                </p>
                <p>
                    <input type="text" ref = {this.setCbRef}></input>
                    <button onClick = {this.click2Handler}>Click Me!</button>
                </p>
            </div>
        )
    }
}

export default RefsDemo