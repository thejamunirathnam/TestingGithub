import React, { Component } from 'react'

export class LifeCycleB extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
        console.log("Life Cycle B constructor ");
    }

    static getDerivedStateFromProps(props, state){
     // this wont
     console.log("Life Cycle B getDerivedStateFromProps ");
     return null;
    }

    componentDidMount() {
        console.log("Life Cycle B componentDidMount ");
    }

    render() {
     console.log("Life Cycle B render ");
        return (
            <div>
             <h1>Child Mounting</h1>
            </div>
        )
    }
}

export default LifeCycleB
