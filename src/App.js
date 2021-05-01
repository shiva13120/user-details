import './App.css';
import Userdata from './Userdata';
import Login from './login'
import Registration from '/Registration';
import Welcome from '/welcome';



import { BrowserRouter as Router, Switch,Route} from "react-router-dom";


function App() {
  return (
    <div className="container mt-5 align-center" style={{width:"40%",borderRadius:"8px",height:"100%",backgroundColor:"lightwhite",padding:"20px",borderColor:
    "green"}}>
    <Router>
    <div className="App">
    <Switch>
    <Route path = "/regis" component = {Registration}/>
      <Route path = "/welcome" component = {Welcome}/>
      <Route exact path = "/" component = {Login}/>
      <Route exact path = "/userdata" component = {Userdata}/>
    </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;