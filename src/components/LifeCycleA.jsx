import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'


export class LifeCycleA extends Component {

    constructor(props) {     
        super(props)
        this.state = {
            name: "theja"
        }
        console.log("Life A Constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Life A getDerivedStateFromProps")
        return null;
    }


    componentDidMount(){
        console.log("Life A componentDidMount")
    }

    render() {
        console.log("Life A render")

        return (
            <div>
                Lifecycle A 
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
