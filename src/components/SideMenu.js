import React, {Component} from 'react';
import axios from 'axios';

class SideMenu extends Component{
    render(){
		return(
			<div class="col-md-2" id="side-bar">
                    <div class="text-center" id="logo">
                        <a href="Admin Panel.html" class="text-center">
                            <img src="img/logo-edited.png"  width="64px" height="64px" alt=""/>
                        </a>
                    </div>    
                        <ul class="navbar-nav text-left" id="panel">
                            <li class="nav-item">
                                <a href="/welcome" class="nav-link"><span class="fa fa-tachometer-alt"></span> Dashboard</a> 
                            </li>
                            <li class="nav-item">
                                <a href="bookmanager.html" class="nav-link"><span class="fa fa-book"></span>Category</a>
                                <ul id="demo">
                                	<li><a href="/categoryiew">Clock</a></li>
                                	<li><a href="#">Clother</a></li>
                                	<li><a href="#">Cosmetic</a></li>
									<li><a href="#">Shoes</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a href="/allproducts" class="nav-link"><span class="fa fa-table"></span>Product Management</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link"><span class="fa fa-users"></span> Order Management</a>
                            </li>
                        </ul>
                </div>

			)
	}
}

export default SideMenu