import React, { Component, Fragment } from 'react';


class SearchForm extends Component {
	render() {
		return (
			<React.Fragment>

			<div className="bg-white mb-3 p-3">
				<h1 className="text-center h3">Your details</h1>

				<div className="form-group">
					<label className="d-inline-block" for="cover_for">Cover for:</label>
				    <select className="form-control" name="cover_for">
				      <option>Single</option>
				      <option>Couple</option>
				    </select>
				</div>

				<div className="form-group">
					<label className="d-inline-block" for="state">In:</label>
				    <select className="form-control" name="state">
				      <option>VIC</option>
				      <option>NSW</option>
				    </select>
				</div>

				<div className="form-group">
				    <select className="form-control">
				      <option>Earning under $90,000</option>
				      <option>Earning over $90,000</option>
				    </select>
				</div>

				<div className="form-group">
				    <select className="form-control">
				      <option>Age over 31</option>
				      <option>Age under 31</option>
				    </select>
				</div>

				<div className="form-group">
					<label className="d-inline-block" for="hospital_cover">Have you held private hopital cover?</label>
				    <select className="form-control" name="hospital_cover">
				      <option>Not Applicable</option>
				      <option>Applicable</option>
				    </select>
				</div>
			</div>

			<div className="bg-white mb-3 p-3">
				<h1 className="text-center h3">Your benefits</h1>
			    <div className="custom-control custom-checkbox mb-3">
			      <input type="checkbox" className="custom-control-input" id="customCheck1" name="example1" />
			      <label className="custom-control-label" for="customCheck1">Wellness</label>
			    </div>
			    <div className="custom-control custom-checkbox mb-3">
			      <input type="checkbox" className="custom-control-input" id="customCheck2" name="example1" />
			      <label className="custom-control-label" for="customCheck2">Investigation</label>
			    </div>
			    <div className="custom-control custom-checkbox mb-3">
			      <input type="checkbox" className="custom-control-input" id="customCheck3" name="example1" />
			      <label className="custom-control-label" for="customCheck3">Alternative</label>
			    </div>
			    <div className="custom-control custom-checkbox mb-3">
			      <input type="checkbox" className="custom-control-input" id="customCheck4" name="example1" />
			      <label className="custom-control-label" for="customCheck4">Physiotherapy</label>
			    </div>
			</div>

			<div className="bg-white mb-3 p-3">
				<h1 className="text-center h3">Excess</h1>

				<div className="form-group">
					<label for="exampleFormControlInput1">Hospital Excess</label>
					<input type="email" class="form-control" id="exampleFormControlInput1" />
				</div>

				<div className="form-group">
					<label for="exampleFormControlInput1">Co-payment</label>
					<input type="email" class="form-control" id="exampleFormControlInput1" />
				</div>

				<div className="form-group">
					<label for="exampleFormControlInput1">Extras rebate</label>
					<input type="email" class="form-control" id="exampleFormControlInput1" />
				</div>


			</div>


			<div className="bg-white mb-3 p-3">
				<h1 className="text-center h3">Providers</h1>
			    <div className="custom-control custom-checkbox mb-3">
			      <input type="checkbox" className="custom-control-input" id="customCheck1" name="example1" />
			      <label className="custom-control-label" for="customCheck1">Lorem ipsum dolor</label>
			    </div>
			    <div className="custom-control custom-checkbox mb-3">
			      <input type="checkbox" className="custom-control-input" id="customCheck2" name="example1" />
			      <label className="custom-control-label" for="customCheck2">Lorem ipsum</label>
			    </div>
			    <div className="custom-control custom-checkbox mb-3">
			      <input type="checkbox" className="custom-control-input" id="customCheck3" name="example1" />
			      <label className="custom-control-label" for="customCheck3">Lorem ipsum dolor</label>
			    </div>
			    <div className="custom-control custom-checkbox mb-3">
			      <input type="checkbox" className="custom-control-input" id="customCheck4" name="example1" />
			      <label className="custom-control-label" for="customCheck4">Lorem ipsum dolor</label>
			    </div>
			</div>
		
		</React.Fragment>
		)
	}
}


export default SearchForm;
