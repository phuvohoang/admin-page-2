import React, { Component } from 'react';
import axios from 'axios';
import SideMenu from '../SideMenu.js'

class CategoryView extends Component{
	constructor(props){
		super(props);
		this.state = {
			products:[],
			index:'',
			act:0,
			button:'Create',
			categorylist:[],
			categorytitle:'',
		}
	}

componentDidMount(){
	axios.get('http://localhost:3004/products')
	.then(response => {
		this.setState({products: response.data})
	})
	.catch(error => {console.log(error)})
	const CategoryTitle = this.refs.categoryname.innerText;
	this.setState({
		categorytitle: CategoryTitle,
	})
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
	console.log(ProductData.length)
	let ProductName = this.refs.name.value;
	let ProductPrice = this.refs.price.value;
	let ProductStock = this.refs.stock.value;
	let ProductPhoto = this.refs.photo.value;
	let ProductCategory = this.refs.category.value;


	if (this.state.act === 0){

	axios.post('http://localhost:3004/products', {
    id: this.state.products.length + 1,
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
  		let index = this.state.index + 1;
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

  window.location.reload();
  
  this.setState({
  	act:0,
  	button:'Submit',
  })
}

render(){
	let Products = this.state.products;
	let CategoryTitle = this.state.categorytitle;
	let categorylist = this.state.categorylist;
	console.log(Products);
	function checkCategory(products){
		return products.category === CategoryTitle
	}
	var Filtering = Products.filter(checkCategory);
	console.log(Filtering);
	return(
		<div class="container-fluid">
			<div class="row">
				<SideMenu/>
				<div class="col-md-10" id="right-content">
					<div class="container-fluid">
						<div class="dash-board-table">
		                    <div class="borrowed-book-banner">
		                        <h2>Category: <span ref="categoryname">Clock</span></h2>
		                        <i>List of Clock instock</i>
		                    </div>
		                    <table class="table bg-light" id="book-borrowed">
		                        <thead>
			                        <tr>
				                        <th>ID</th>
				                        <th>Product Name</th>
				                        <th>Price</th>
				                        <th>Stock Status</th>
				                        <th>Product Photo</th>
			                        </tr>
		                        </thead>
		                        <tbody id="tbody">
		                        {Filtering.map((data,i) =>
		                        	<tr key={i}>
		                        		<td>{data.id}</td>
		                        		<td>{data.name}</td>
		                        		<td>{data.price}</td>
		                        		<td>{data.instock}</td>
		                        		<td><img src={data.photo} className="product-photo rounded img-thumbnail"/></td>
		                        		
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

export default CategoryView