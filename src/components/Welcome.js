import React, {Component} from 'react';
import SideMenu from './SideMenu.js';

class Welcome extends Component {
render() {
return (
        <main class="container-fluid">
            <div class="row">
            	<SideMenu/>
                <div class="col-md-10" id="right-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3 mt-4" >
                                <div id="new-book" class="rounded-top resume">
                                    <span class="fa fa-book fa-4x float-left"></span>
                                    <div class="float-right quantity">
                                    <h3>26</h3>
                                    <p>New Products</p>
                                    </div>
                                </div>
                                <div class="rounded-bottom border view-details">
                                    <a href="#">View Details</a>
                                    <span class="fa fa-arrow-right float-right mt-1"></span>
                                </div>
                            </div>
                            
                            <div class="col-md-3 mt-4" >
                                <div id="new-task" class="rounded-top resume">
                                    <span class="fa fa-check-square fa-4x float-left"></span>
                                    <div class="float-right quantity">
                                    <h3>12</h3>
                                    <p>New Category</p>
                                    </div>
                                </div>
                                <div class="rounded-bottom border view-details">
                                    <a href="#">View Details</a>
                                    <span class="fa fa-arrow-right float-right mt-1"></span>
                                </div>
                            </div>
                            
                            <div class="col-md-3 mt-4" >
                                <div id="new-order" class="rounded-top resume">
                                    <span class="fa fa-cart-plus fa-4x float-left"></span>
                                    <div class="float-right quantity">
                                    <h3>124</h3>
                                    <p>New Orders!</p>
                                    </div>
                                </div>
                                <div class="rounded-bottom border view-details">
                                    <a href="#">View Details</a>
                                    <span class="fa fa-arrow-right float-right mt-1"></span>
                                </div>
                            </div>
                            
                            <div class="col-md-3 mt-4" >
                                <div id="new-ticket" class="rounded-top resume">
                                    <span class="fa fa-ticket-alt fa-4x float-left"></span>
                                    <div class="float-right quantity">
                                    <h3>5</h3>
                                    <p>Support Ticket!</p>
                                    </div>
                                </div>
                                <div class="rounded-bottom border view-details">
                                    <a href="#">View Details</a>
                                    <span class="fa fa-arrow-right float-right mt-1"></span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div id="chartContainer"></div>
                            <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
                        </div>
                        
                        <div class="row">
                            <div class="col-md-6 col-sm-12 dash-board-table">
                                <div id="employee-banner">
                                    <h5>Employees Schedule</h5>
                                    <i>Schedule could be changed base on real situation</i>
                                </div>
                                <table class="table bg-white rounded">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Working Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>VK100</td>
                                            <td>Vo Hoang Phu</td>
                                            <td>Library Manager</td>
                                            <td>Mon - Fri / 08:00 AM - 05:30 PM</td>
                                        </tr>
                                        <tr>
                                            <td>VK101</td>
                                            <td>Bui Khac Binh</td>
                                            <td>Library Senior</td>
                                            <td>Mon - Sat / 08:00 AM - 05:30 PM</td>
                                        </tr>
                                        <tr>
                                            <td>VK102</td>
                                            <td>Nguyen Van Sy</td>
                                            <td>Night Watcher</td>
                                            <td>Mon - Sat / 05:30 PM - 06:00 AM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md-6 col-sm-12 dash-board-table">
                                <div id="new-book-banner">
                                    <h5>New Book Arriving</h5>
                                    <i>Remember to add new book arrived within 3 days</i>
                                </div>
                                <table class="table bg-white rounded">
                                    <thead>
                                        <tr>
                                            <th>Select</th>
                                            <th>Book's Title</th>
                                            <th>Author</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type='checkbox'/></td>
                                            <td>The Key to Success</td>
                                            <td>Russell H. Conwell</td>
                                            <td>Ordered</td>
                                        </tr>
                                        <tr>
                                            <td><input type='checkbox'/></td>
                                            <td>Android and Alice</td>
                                            <td>Ghassan Jabali</td>
                                            <td>Ordered</td>
                                        </tr>
                                        <tr>
                                            <td><input type='checkbox'/></td>
                                            <td>Realtime Speed Development III</td>
                                            <td>Kay Moody</td>
                                            <td>Ordered</td>
                                        </tr>
                                        <tr>
                                            <td><input type='checkbox'/></td>
                                            <td>The Plan: Twelve months to renew Britain</td>
                                            <td>Douglas Carswell & Daniel Hannan</td>
                                            <td>Received</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
);
}
}
export default Welcome;