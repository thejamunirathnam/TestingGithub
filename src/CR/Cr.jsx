import React, { Component } from 'react'

export class Cr extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLogedin: true
        }
    }

    render() {

        return(
            this.state.isLogedin ?  <h2>hello Bridgelbz</h2> :  <h2>hello guest</h2>
        )


        // let message
        // if(this.state.isLogedin){
        //     message=  <h2>hello Bridgelbz</h2>
        // }else{
        //     message= <h2>Hello guest</h2>
        // }

        // return(
        //     <div>{message}</div>
        // )


        // if (this.state.isLogedin) {
        //     return (
        //         <div>
        //             <h2>hello Bridgelbz</h2>
        //         </div>
        //     )
        // }
        // else {
        //     return (
        //         <div>
        //             <h2>Hello guest</h2>
        //         </div>
        //     )
        // }

    }
}

export default Cr
