import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/LoginForm'

class Login extends React.Component{
	render(){
		return(
			<div className="login-form">
				<LoginForm/>
			</div>
			)
	}
}

export default Login
