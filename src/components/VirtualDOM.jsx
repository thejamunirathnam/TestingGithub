import React, { Component } from 'react'

export class VirtualDOM extends Component {
    constructor(props) {
        super(props)

        this.state = {
            time: new Date().toString()
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ 
            time: new Date().toString()
        }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
        console.log("git hub learinig")
    }

    render() {
        return (
            <div>
                <h2>Virtual DOM</h2>
                <h1>Hello virtual DOM</h1>
                <h2>Now time is </h2>
                <p>{this.state.time}</p>
            </div>
        )
    }
}

export default VirtualDOM
