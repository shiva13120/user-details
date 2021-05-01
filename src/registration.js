import React, { Component } from 'react';
import joi from 'joi-browser';
class Registration extends Component{
    state={
        data:{
            firstname:"", 
            lastname:"",
            email:"",
            password:""
        }, 
        errors:{},
    };
    

    validateProperty = ({name, value}) =>{
        const obj = { [name] : value};
        const schema = {[name] :this.schema[name] };
        const {error} = joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };


    handleSubmit=(e)=>{
        // e.preventDefault();
        const { data } = this.state;
        localStorage.setItem('register',JSON.stringify(data));
        this.props.history.push('/');
        console.log(this.state.data);
        console.log('submit the form');
    }
    handleChange=({currentTarget : input})=>{
        console.log(input.name);
        const errors = {...this.state.errors };
        const errorMessage =  this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const {data} = this.state;
        data[input.name] = input.value;
        this.setState({data, errors});
      
    };
    
    schema = {
        
        firstname: joi.string().required().min(3).max(10).label("First Name"),
        lastname: joi.string().required().min(3).max(10).label("Last Name"),
        email: joi.string().required().email().label("Email ID"),
        password: joi.string().required().min(8).max(12).label("Password")
    };
    
    validate = () =>{
        const {data} = this.state;
        const {error} = joi.validate(data, this.schema);
        if(!error) return;
        let errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };
    render(){
        const {data,errors}=this.state;
        console.log(data);
        return(
            <>
                <h1>Registration Form</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className = "form-group">
                            <label htmlFor = "fname">First Name:</label>
                            <input 
                            className= "form-control" 
                            id= "fname" 
                            type="text" 
                            name = "firstname" 
                            onChange={this.handleChange} 
                            value = {data.firstname} 

                            />
                            {errors.firstname && <div className="alert-danger">{errors.firstname}</div>}
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "lname">Last Name:</label>
                            <input 
                            className= "form-control"
                            id= "lname" 
                            type="text" 
                            name = "lastname"
                            onChange={this.handleChange} 
                            value = {data.lastname} 
                            error = {errors.lastname}
                             />
                             {errors.lastname && <div className="alert-danger">{errors.lastname}</div>}
                        </div>

                        <div className = "form-group">
                            <label htmlFor = "username">Email ID:</label>
                            <input 
                            className= "form-control"
                            id= "username" 
                            type="text" 
                            name = "email"
                            onChange={this.handleChange} 
                            value = {data.username} 
                            error = {errors.username}
                             />
                             {errors.email && <div className="alert-danger">{errors.email}</div>}
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "password">Password:</label>
                            <input 
                            className= "form-control"
                            id= "password" 
                            type="password" 
                            name = "password" 
                            onChange={this.handleChange} 
                            value = {data.password} 
                            error = {errors.password} 
                            />
                            {errors.password && <div className="alert-danger">{errors.password}</div>}
                        </div>
                       
                        <button className = "btn btn-primary" type = "submit">Register</button>
                    </form>
                    </>
            


            
        
        );
        
    }
    
}


export default Registration