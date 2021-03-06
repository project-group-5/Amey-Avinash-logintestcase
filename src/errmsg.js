import React from 'react'
export default class ErrorBoundry extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(error)
    {
        return {hasError:true}
    }
    componentDidCatch(error,errorInfo)
    {
        console.log(error)
        console.log(errorInfo)
    }
 render()
 {
       if(this.state.hasError)
       {
           return <h1>Error Generated</h1>
       }
       return this.props.children
 }
}