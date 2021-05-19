import React, { Component } from 'react'

export class RefDemo extends Component {
  
    constructor(props) {
      super(props)
      // first aproach
      this.inputRef = React.createRef()

      //second approach
      this.callbackRef=null
      this.callbackMethod = element =>{
        this.callbackRef = element
      }

    
    }

    componentDidMount(){
        // this.inputRef.current.focus();
        console.log(this.callbackRef )
        if(this.callbackRef){
            this.callbackRef.focus()
        }
        
    }


  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef }/>
        <input type="text" ref={this.callbackMethod }/>
        
      </div>
    )
  }
}

export default RefDemo
