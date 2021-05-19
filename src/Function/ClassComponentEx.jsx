import React, { Component } from 'react'

export class ClassComponentEx extends Component {

    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    setcounter = () => {
        this.setState({
            counter : this.state.counter +1 
        })
    }

    componentDidMount(){
        document.title=`Counter ${this.state.counter}`
    }

    componentDidUpdate(){
        document.title=`Counter ${this.state.counter}`
    }

    componentWillUnmount(){
        document.title=`counter Deleted`
    }


    render() {
        return (
            <div>
                <button onClick={this.setcounter}>Click mee {this.state.counter}</button>
            </div>
        )
    }
}

export default ClassComponentEx
