import React ,{Component} from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends Component{
    constructor(props)
    {
        super(props);
         this.state={hasError:false};
    }
    static getDerivedStateFromError(error){
        return {hasError:true};
    }
    componentDidCatch(error,errorInfo){
        console.error('ErrorBoundary caught an error:',error,errorInfo);
    }
    render()
    {
        if(this.state.hasError)
        {
            return <div>Something went wrong</div>
        }
        return this.props.children
    }
}
ErrorBoundary.propTypes={
    children:PropTypes.node.isRequired
}
export default ErrorBoundary