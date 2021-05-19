import React, { Component } from 'react'


export class UpdateCycleB extends Component {

    constructor(props) {        // first methods
        super(props)
        this.state = {
            name: "theja"
        }
        console.log("Life B Constructor")
    }

    static getDerivedStateFromProps(props, state) {
        // return new state or null
        console.log("Update B getDerivedStateFromProps")
        return null;
    }


    shouldComponentUpdate(){
        console.log("Life B shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevprop, prevstate){
        console.log("Life B getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevprop, prevstate,snapshot){
        console.log("Life B componentDidUpdate");
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

export default UpdateCycleB
