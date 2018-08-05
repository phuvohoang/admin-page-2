import React, { Component } from 'react';
import axios from 'axios';
import SideMenu from '../SideMenu.js'
import $ from 'jquery';

class ProductManagement extends Component{
	constructor(props){
		super(props);
		this.state = {
			products:[],
			index:'',
			act:0,
			button:'Create',
			categorylist:[],
		}
	}


	componentDidMount(){
		axios.get('http://localhost:3004/products')
	.then(response => {
		this.setState({products: response.data})
	})
	.catch(error => {console.log(error)})
	}

	componentWillMount(){
	axios.get('http://localhost:3004/category')
	.then(response => {
		this.setState({categorylist: response.data})
	})
	.catch(error => {console.log(error)})
}
	
	AddEntry = () => {
		let ProductData = this.state.products;
		let ProductName = this.refs.name.value;
		let ProductPrice = this.refs.price.value;
		let ProductStock = this.refs.stock.value;
		let ProductPhoto = this.refs.photo.value;
		let ProductCategory = this.refs.category.value;
		let ProductID = this.refs.id.value;

		if (this.state.act === 0){

		axios.post('http://localhost:3004/products', {
	    id: ProductID,
	    name: ProductName,
	    price: ProductPrice,
	    instock: ProductStock,
	    photo: ProductPhoto,
	    category: ProductCategory,
	  })
	  .then(function (response) {
	    console.log(response);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
		}

 else{
  		let index = this.state.index;
  		axios.put('http://localhost:3004/products/'+index, {
  	    id: this.state.index,
  	    name: ProductName,
  	    price: ProductPrice,
  	    instock: ProductStock,
  	    photo: ProductPhoto,
  	    category: ProductCategory,
		  	  })
		  	.then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
	document.getElementById('inputID').removeAttribute("disabled");
	window.location.reload();
  
  this.setState({
  	act:0,
  	button:'Submit',
  })
	}

	EditEntry = (i) => {
	let ProductData = this.state.products;
	document.getElementById('inputID').setAttribute("disabled", "")
	this.refs.name.value = ProductData[i].name;
	this.refs.price.value = ProductData[i].price;
	this.refs.stock.value = ProductData[i].instock;
	this.refs.photo.value = ProductData[i].photo;
	this.refs.category.value = ProductData[i].category;
	this.refs.id.value = ProductData[i].id;

		this.setState({
			act:1,
			index: this.refs.id.value,
			button:'Update'
		})
	}

	DeleteEntry = evt => {
		let buttonClicked = evt.target;
		let checker = $(buttonClicked).parents('tr');
		let getid = checker.find('td:eq(0)').text();
		console.log(getid)
		if (window.confirm('Are you sure to delete this item')){axios.delete('http://localhost:3004/products/'+getid)}
		window.location.reload()
	}

	render(){
		let ProductData = this.state.products;
		let categorylist = this.state.categorylist;
		return(
			<div class="container-fluid">
			<div class="row">
				<SideMenu/>
				<div class="col-md-10" id="right-content">
					<div class="container-fluid">
						<div class="dash-board-table">
		                    <div class="borrowed-book-banner">
		                        <h2>Product Management</h2>
		                        <i>List of all products instock</i>
		                    </div>
		                    <table class="table bg-light" id="book-borrowed">
		                        <thead>
			                        <tr>
				                        <th>ID</th>
				                        <th>Product Name</th>
				                        <th>Category</th>
				                        <th>Price</th>
				                        <th>Stock Status</th>
				                        <th>Product Photo</th>	
				                        <th>Modify</th>		                      
			                        </tr>
		                        </thead>
		                        <tbody id="tbody">
		                        {ProductData.map((data,i) =>
		                        	<tr key={i}>
		                        		<td ref="test">{data.id}</td>
		                        		<td>{data.name}</td>
		                        		<td>{data.category}</td>
		                        		<td>{data.price}</td>
		                        		<td>{data.instock}</td>
		                        		<td><img src={data.photo} className="product-photo rounded img-thumbnail"/></td>
		                        		<td><button type="button" onClick = {()=>this.EditEntry(i)} className="btn btn-warning mr-2">Edit</button><button type="button" onClick = {this.DeleteEntry} id = "test" className="btn btn-danger">Delete</button></td>
		                        	</tr>
		                       	)}
		                        </tbody>
		                    </table>
		                </div>
		                <form ref="myform" class="form-add">
					<legend class="borrowed-book-banner border">Add New Product</legend>
					<div className="row">	
						<div className="col-sm-6">
							<div className="form-group">
							<label>Unique ID</label>
							<input className="form-control" id="inputID" type="text" ref="id"/>
							</div>
						</div>		
						<div className="col-sm-6">
							<div className="form-group">
							<label>Product Name</label>
							<input className="form-control" type="text" ref="name"/>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
							<label>Price</label>
							<input className="form-control" type="text" ref="price"/>
							</div>
						</div>
						<div className="col-sm-12">
							<div className="form-group">
							<label>Stock</label>
							<input className="form-control" type="text" ref="stock"/>
							</div>
						</div>
						<div className="col-sm-12">
							<div className="form-group">
							<label>Product Photo</label>
							<input className="form-control" type="text" ref="photo"/>
							</div>
						</div>
						<div className="col-sm-12">
							<div className="form-group">
							<label>Category</label>
							<select className="form-control" ref="category">
							{categorylist.map((data,i)=>
								<option key = {i} value={data.name}>{data.name}</option>
								)}
							</select>
							</div>
						</div>
					</div>
					<button type="button" onClick={()=>this.AddEntry()} class="btn btn-primary mr-3">{this.state.button}</button>
					<button type="reset" className="btn btn-warning">Reset</button>
			</form>	
					</div>

				</div>

			</div>

			
		</div>	
			)
	}
}

export default ProductManagement