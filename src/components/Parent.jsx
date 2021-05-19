import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       Festive:"happy ramzann"
    }
  }

  Samplefun = (dataaa) => {
      console.log("parent function called" +dataaa)
  }
  
  render() {
    return (
      <div>
          <h3>Parent element</h3>
        <Child Holiday={this.state.Festive} Samplefun={this.Samplefun}/>
      </div>
    )
  }
}

export default Parent
