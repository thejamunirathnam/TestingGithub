import React,{useState, useEffect} from 'react'

function UseStateComponent() {

 
  const[counter,setcounter]=useState(0);
  const[name,setName]=useState('');

  
  useEffect(()=>{
    console.log("useefeecct ")
    document.title=`user clicked ${counter}`;
  },[counter])
  
  
  return (
    <div>
      <input value={name} onChange={e=>setName(e.target.value) }/>
      <button onClick={()=>setcounter(counter+1)}>Cllick  me {counter}</button>
    </div>
  )

}

export default UseStateComponent
