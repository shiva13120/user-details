import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React,{Component} from "react"

class Userdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user:false
      }
    
   }
showuser = (e) => {
console.log(e.target)
}

  componentDidMount = () => {
axios.get("https://shivaf.free.beeceptor.com/")
.then(res => {
  this.setState( {
    users:res.data
  })



})




  }
  render()
 {
  console.log(this.state.users)
   const userdetails = this.state.users.map(user => <h1 onClick = {this.showuser} key = {user.name}>{user.name}</h1>)
  
    return (
      <div className="App">
       {
       userdetails}
      </div>
    );
  }
  
}

export default Userdata;
