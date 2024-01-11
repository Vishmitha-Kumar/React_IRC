import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
     componentDidCatch(error,errorInfo){
        console.log('Error boundary has an error')
     }
    render() {
        if (this.state.hasError === true) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired
}

export default ErrorBoundary;