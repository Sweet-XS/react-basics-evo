import React, {Component} from 'react'

class FormBasic extends Component{

    constructor(){
        super()

        this.state = {
            username: '',
            comments: '',
            topic: 'React'
        }
    }

    onChangeCommentsHandler = (event) => {
        this.setState({
            comments: event.target.value
        })     
    }

    onChangeTopicHandler = (event) => {
        this.setState({
            topic: event.target.value
        })     
    }

    onChangeUsernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })     
    }

    submitHandler = (event) => {      
            alert(`${this.state.username} 
            ${this.state.comments} 
            ${this.state.topic}`)
            //prevent data submission (default behavior)
            event.preventDefault()    
    }

    render(){
        const {username, comments, topic} = this.state
        return(
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>Username</label>
                    <input 
                        type='text' 
                        value={username}
                        onChange= {this.onChangeUsernameHandler}
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea
                        value={comments}
                        onChange= {this.onChangeCommentsHandler}
                    >
                    </textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select 
                        value = {topic}
                        onChange = {this.onChangeTopicHandler}
                    >
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }

}

export default FormBasic