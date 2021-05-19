import React, { Component } from 'react'

export class Child extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
       this.props.Samplefun("child call back")
    }

    render() {
        return (
            <div>
                <h3>Child element {this.props.Holiday}</h3>
            </div>
        )
    }
}

export default Child
