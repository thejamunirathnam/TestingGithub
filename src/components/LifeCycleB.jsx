import React, { Component } from 'react'

export class LifeCycleB extends Component {

    constructor(props) {        // first methods
        super(props)

        this.state = {
            name: "theja"
        }

        console.log("Life B Constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Life B getDerivedStateFromProps")
        return null;
    }


    componentDidMount(){
        console.log("Life B componentDidMount")
    }

    render() {
        console.log("Life B render")

        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}

export default LifeCycleB
  

// avoid unexpected behaviour 