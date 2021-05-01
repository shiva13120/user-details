import React, { Component } from 'react';
// import './style.css';
import { Link} from 'react-router-dom';
class Login extends Component{
    state={
        logindata:{
            email:"", 
            password:"",
        },
        
    };
    handleSubmit=(e)=>{
        e.preventDefault(); 
        const { logindata } = this.state;
        var registerdata = JSON.parse(localStorage.getItem('register'));
        const { email, password} = registerdata;
        if(email===this.state.logindata.email && password===this.state.logindata.password){
            // alert('you are loged in');
            this.props.history.push('/welcome');
        }
        else{
            alert("you are not valid user");
        }
        // // localStorage.setItem('login',  JSON.stringify(logindata));
        // console.log('retrievedObject: ', JSON.parse(my_object));
        console.log(registerdata);
        console.log('submit the form');
    }

    handleChange=({currentTarget : input})=>{
        const {logindata} = this.state;
        logindata[input.name] = input.value;
        this.setState({logindata});
      
    };
    render(){
        const {logindata,errors}=this.state;
        console.log(logindata);
        return(
            <div className = "container">
                <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className = "form-group">
                            <label htmlFor = "username">Username:</label>
                            <input 
                            className= "form-control" 
                            id= "username" 
                            type="text" 
                            name = "email"
                            onChange={this.handleChange} 
                            value = {logindata.email} 
                            // error = {errors.email}
                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "password">Password:</label>
                            <input 
                            className= "form-control"
                            id= "password" 
                            type="password" 
                            name = "password"
                            onChange={this.handleChange} 
                            value = {logindata.password} 
                            // error = {errors.password}
                            
                            />
                        </div>
                        <button className = "btn btn-primary" type = "submit">Login</button>
                        <div style={{ marginTop: 20 }}>
                            <Link to={'/regis'}>Sign Up</Link>
                        </div>
                    </form>
            </div>
        );
        
    }
    
}export default Login