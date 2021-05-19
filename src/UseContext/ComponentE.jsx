import React , {useContext} from 'react'
import {mycontext,name} from '../App'



export default function ComponentE() {
   const messsage= useContext(mycontext);
   const name= useContext(name);

  return (
    <div>
      <h3>hello child compoent {messsage}</h3>
    </div>
  )
}
