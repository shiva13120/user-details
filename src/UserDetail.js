

import React,{Component} from "react"

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
      }
    
   }
}
  render()
 {
   return (
      <div className="user detail">
    {
        console.log(this.props.user)
    }
      </div>
    );
  }
  


export default App;
