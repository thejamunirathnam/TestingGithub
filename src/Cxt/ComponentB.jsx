import React from 'react'
import ComponentC from './ComponentC'
import {myContext} from '../App'

function ComponentB() {
  return (
    <div>
        <myContext.Consumer>
            {
                val => {
                  return <div> {val}</div>
                }
            }
        </myContext.Consumer>
      {/* <ComponentC/> */}
    </div>
  )
}

export default ComponentB
