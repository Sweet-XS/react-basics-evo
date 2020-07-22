import React from 'react'
import ErrorAlpha from './ErrorAlpha'
import ErrorBoundary from './ErrorBoundary'

const ErrorBeta = () => {
    return (
        <div>
            <ErrorBoundary>
                <ErrorAlpha heroName="Superman"/>
            </ErrorBoundary> 
            <ErrorBoundary>
                <ErrorAlpha heroName="Batman"/>
            </ErrorBoundary> 
            <ErrorBoundary>
                <ErrorAlpha heroName="Joker"/>
            </ErrorBoundary> 
        </div>
    )
}

export default ErrorBeta