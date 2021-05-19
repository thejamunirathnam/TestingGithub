import React, {useContext} from 'react'
import {myContext} from '../App'

function ComponentC() {
  const valueee= useContext(myContext);
  return (
    <div>
      <h3>Hello Context Child CC {valueee}</h3>
    </div>
  )
}

export default ComponentC
