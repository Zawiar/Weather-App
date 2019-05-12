import React from 'react';

class Status extends React.Component{
	render(){
	return (


			<div>

		{this.props.Name &&
				<div>
				<ul className="list-group mt-3 container">
				<div className="row">
				<div className="col-md-9 m-auto">
				<li className="list-group-item text-center list-group-item-info"><p>Temperature: {this.props.Temperature}</p></li>
			<li className="list-group-item text-center list-group-item-info">	<p>Humidity: {this.props.Humidity}</p></li>
			<li className="list-group-item text-center list-group-item-info">	<p>Name: {this.props.Name}</p></li>
			<li className="list-group-item text-center list-group-item-info">	<p>Description: {this.props.Description}</p></li>
			</div>
			</div>
			</ul>
			</div>}

				{this.props.Errors && 	<h4 className="text-center mt-4">{this.props.Errors}</h4>}

			</div>


	);
}
}

export default Status
