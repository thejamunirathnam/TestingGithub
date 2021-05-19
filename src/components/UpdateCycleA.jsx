import React, { Component } from 'react'
import LifeCycleB from './UpdateCycleB'


export class LifeCycleA extends Component {

    constructor(props) {      
        super(props)
        this.state = {
            name: "theja"
        }
        console.log("Life A Constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Update A getDerivedStateFromProps")
        return null;
    }


    shouldComponentUpdate(){
        console.log("Life A shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevprop, prevstate){
        console.log("Life A getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevprop, prevstate,snapshot){
        console.log("Life A componentDidUpdate");
    }
    
    changestate=()=>{
        this.setState({
            name : "hello"
        })
    }
    render() {
        console.log("Life A render")

        return (
            <div>
                Lifecycle A 
                <button onClick={this.changestate}>Click mee</button>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
