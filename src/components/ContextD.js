import React, {Component} from 'react'
import { ComicConsumer } from './comicContext'

class ContextD extends Component {
    //use the Context consumer component receiving the context value in an arrow function
    render(){
        return(
            <ComicConsumer>
                {
                    (comic) => {
                    return <div>React Context Value: Comic Name: {comic}</div>
                    }
                }
            </ComicConsumer>
        )
    }
}

export default ContextD