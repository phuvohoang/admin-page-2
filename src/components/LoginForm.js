import React, { Component } from 'react';
import axios from 'axios';
import {Route, Redirect} from 'react-router-dom';

class LoginForm extends Component{
  constructor(props){
    super(props);
    this.state = {
    	users:'',
    	isAuthenticated:'',
    }
  }

	componentDidMount(){
		axios.get('http://localhost:3004/authenticate')
		.then(response => {
        this.setState({ users: response.data })
      })
      .catch(function (error) {
        console.log(error)
      })
	}  

  fSubmit = (e) =>{
  	e.preventDefault();
  	let userInput = this.refs.userInput.value;
  	let passwordInput = this.refs.passwordInput.value;
  	var userChecker;
  	var passwordChecker;
  	var userAvatar;
    let UserData = this.state.users;
	console.log(UserData);
	UserData.map((data,i) =>
		{
			userChecker = data.username;
			passwordChecker = data.password;
			userAvatar = data.avatar;
		}
		)
	if (userInput !== userChecker || passwordInput !== passwordChecker){
		alert('User Name or Password is invalid. Please recheck')
	}
	else{
		this.setState({isAuthenticated:true})
		alert('Welcome' + ' ' + userInput)}
		localStorage.setItem('avatar', userAvatar);
		localStorage.setItem('username', userInput);
		window.location.reload();
    }

	render(){
		const isOk = this.state.isAuthenticated;
		return(
			<div>
			{isOk ? <Redirect to = "/welcome"/> : (
			    <form onSubmit={(e) => this.fSubmit(e)} id="login-form">
			        <div className="text-center">
			        <img src="img/logo-edited.png" alt=""/>
			        </div>
			        <h2 className="text-center">Sign In To Continue</h2> 
			        <span id="notification" className="text-center"></span>
			        <div className="form-group">
			        	<div>
			                <input type="text" id="username" className="form-control" ref="userInput" name="username" placeholder="Username" required="required"/>	
			                <span>Use username phu.vohoang</span>
			            </div>
			        </div>
					<div className="form-group">
			            <div>
			                <input type="password" id="password" className="form-control" ref="passwordInput" name="password" placeholder="Password" required="required"/>
			                <span>Use password: abc321</span>
			            </div>
			        </div>        
			        <div className="form-group">
			            <button id="sign-in" type="submit" className="btn btn-primary btn-block btn-login">Sign In</button>
			        </div>
			        <div className="clearfix">
			            <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
			            <br/>
			            <a href="#" className="pull-right">Forgot Password?</a>
			        </div>
			    </form>
			    )}
			</div>
			);
		}
	}


export default LoginForm