import React, { Component } from 'react'
import axios from 'axios'

class Axiosservice extends Component {
   
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  componentDidMount(){ 
      console.log(this.props.name) 
      console.log(this.props)
    //   get("url", data,auth)
    //    axios.get('https://jsonplaceholder.typicode.com/posts/')
    //    .then((result)=>{
    //             console.log(result);
    //    })
    //    .catch((err)=>{
    //       console.log("api handling erroor"+err)
    //    })
    let data ={
            "title": "Axiosssss",
            "userId": 1,
            "body": "Axiossssss"
    }

    // axios.post('https://jsonplaceholder.typicode.com/posts/',data)
    // .then((result)=>{
    //          console.log(result);
    // })
    // .catch((err)=>{
    //    console.log("api handling erroor"+err)
    // })

    // axios.put('https://jsonplaceholder.typicode.com/posts/1')
    // .then((result)=>{
    //          console.log(result);
    // })
    // .catch((err)=>{
    //    console.log("api handling erroor"+err)
    // })
  
  }
  
  render() {
    return (
      <div>
        <h3>Axios calling</h3>
      </div>
    )
  }
}

export default Axiosservice
