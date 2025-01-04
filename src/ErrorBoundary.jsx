import { Component } from "react";

class ErrorBoundary extends Component {
    state = { hasError: false }

    constructor(props) {
        super(props)
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) { //error logging
        console.error("ErrorBoundary caught error: ", error, info)
    }

    render () {
        if (this.state.hasError) {
            return (
                <p>Error has occurred.</p>
                //you can add additional logic to the ErrorBoundary to account for errors 
                //for example, adding a link to go back to home page or reload the page
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary