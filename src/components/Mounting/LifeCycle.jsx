import React, { Component } from 'react'
import LifecycleB from './LifeCycleB'

export class LifeCycle extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
        console.log("Life Cycle constructor ");
    }

    static getDerivedStateFromProps(props, state){
     // this wont
     console.log("Life Cycle getDerivedStateFromProps ");
     return null;
    }

    componentDidMount() {
        console.log("Life Cycle componentDidMount ");
    }

    render() {
     console.log("Life Cycle render ");
        return (
            <div>
              <LifecycleB />
            </div>
        )
    }
}

export default LifeCycle
