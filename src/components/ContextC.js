import React, {Component} from 'react'
import ContextD from './ContextD'
import ComicContext from './comicContext'

class ContextC extends Component {

    //another option to use context, but this only works with class components and can only used in 1
    //static contextType = ComicContext
    render(){
        return(
            <div>
                ContextC context {this.context}
                <ContextD/>
            </div>  
        )
    }
}

ContextC.contextType = ComicContext

export default ContextC