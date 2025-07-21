import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super();
        this.state= {
            hasError: false,
        };
    }

    static getDerivedStateFromError = (error) => {
        console.log("Error => ", error);
        return { hasError: true };
    }

    componentDidCatch = (error, info) => {
        console.log("Error => ", error);
        console.log("Info => ", info);
    }

    render() {
        if (this.state.hasError) {
            return <p>Something went wrong</p>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;