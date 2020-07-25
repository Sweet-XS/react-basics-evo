import React from 'react'
//should be named withCounter.js
const withCounter = (WrappedComponent, incrementNumber) => {

    class WithCounter extends React.Component{

        constructor(){
            super()
    
            this.state = {
                count: 0
            }
        }
    
        incrementCount = () => {
            this.setState( prevState => {
                return{count: prevState.count + incrementNumber}
            })
        }

        render(){
            return <WrappedComponent 
                    count = {this.state.count}
                    incrementCount = {this.incrementCount} 
                    name = 'Vanessa'
                    {...this.props}
                   />
        }
    }
    return WithCounter
}

export default withCounter