import React from 'react';

class Form extends React.Component{
	render(){
		return (
			<div className="container">
			<div className="row">
			<div className="col-md-10 offset-1">
			<form onSubmit={this.props.handleChange}>
			<input className="form-control mb-3" placeholder="City..." name="city"/>
			<input className="form-control mb-3" placeholder="Country..." name="country"/>
			<button className="btn btn-info form-control">Get Weather</button>

			</form>
			</div>
			</div>
			</div>
		);
	}
}

export default Form
