import React from 'react'
//React Context Example (default value: 'X-Men')
const ComicContext = React.createContext('X-Men')

const ComicProvider = ComicContext.Provider
const ComicConsumer = ComicContext.Consumer

export {ComicProvider, ComicConsumer}
//optional 
export default ComicContext
