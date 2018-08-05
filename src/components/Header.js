import React, { Component } from 'react';
import logo from '../logo-edited.png';
class Header extends Component{
	render(){
		var AvatarChecker = localStorage.hasOwnProperty('avatar');
		var AvatarUrl = localStorage.getItem('avatar');
		var UserName = localStorage.getItem('username');
		return(
			<nav className="container-fluid bg-header align-middle">
				<div className="row">
				<div className="col-md-2 col-sm-2 col-xs-2">
					<div className="text-center ali">
						<img src={logo} className="admin-logo"/><h3 className="admin-text">Admin Panel</h3>
					</div>
				</div>

				<div className="col-md-10 col-sm-10 col-xs-10 text-right mt-3">
						{AvatarChecker ? <span className="welcome">Welcome {UserName}</span> : null}
						{AvatarChecker ? <img src={AvatarUrl} className="rounded-circle border align-middle avatar"/> : null}
				</div>
				</div>
			</nav>
			)
	}
}

export default Header