import React, { Component } from 'react'

 class RefDemo extends Component {
   constructor(props) {
     super(props)
    // step 1 
    // this.inputref=React.createRef()


    //Aproach 2
    this.inputref = null;
    this.callbackmethod = (element) =>{
        this.inputref=element
    }


     
   }

   componentDidMount(){
    console.log( this.inputref)
      this.inputref.focus()
   }
    
  render() {
    return (
      <div>
        <input type="text"  ref={ this.inputref} />
      </div>
    )
  }
}

export default RefDemo
