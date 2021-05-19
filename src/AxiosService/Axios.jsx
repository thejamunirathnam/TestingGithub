import React , {Component} from 'react'
import axios from 'axios'

export class Axios extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

   componentDidMount(){
       // get (baseurl, data,header)
        // axios.get('https://jsonplaceholder.typicode.com/users/')
        // .then((res)=>{
        //     console.log(res.data);
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })

        // post(baseurl, data, header)
        let dataa= {
             Name:"bidge",
             Email:"bridge@gmail.com"
        }
        axios.post('https://jsonplaceholder.typicode.com/users/',dataa)
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err)
        })
   }

    render() {
        return (
            <div>
               <h3>Axiosss</h3>
            </div>
        )
    }
}

export default Axios
