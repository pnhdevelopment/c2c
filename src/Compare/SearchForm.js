import React, { Component, Fragment } from 'react';


class SearchForm extends Component {
	render() {
		return (
			<React.Fragment>

			{/* Your details */}
			<div className="bg-white mb-3 p-3">
				<h1 className="text-center h3">Your details</h1>

				<div className="form-group">
					<label className="d-inline-block font-weight-bold" for="cover_for">Cover for:</label>
				    <select className="form-control" name="cover_for">
						<option>Me</option>
						<option>Me and my partner</option>
						<option>My family</option>
						<option>Me and my kids</option>
				    </select>
				</div>

				<div className="form-group">
					<label className="d-inline-block font-weight-bold" for="state">In:</label>
				    <select className="form-control" name="state">
						<option>ACT</option>
						<option>NSW</option>
						<option>NT</option>
						<option>QLD</option>
						<option>SA</option>
						<option>TAS</option>
						<option>VIC</option>
						<option>WA</option>
				    </select>
				</div>

				<div className="form-group">
					<label className="d-inline-block font-weight-bold" for="income">Income:</label>
				    <select className="form-control" name="income">
						<option>Under $90,000</option>
						<option>$90,001 to $105,000</option>
						<option>$105,001 to $140,000</option>
						<option>$140,001 and over</option>
				    </select>
				</div>

				{/* <div className="form-group">
					<label className="d-inline-block" for="age">Age:</label>
				    <select className="form-control" name="age">
				      <option>Age over 31</option>
				      <option>Age under 31</option>
				    </select>
				</div> */}

				<div className="form-group">
					<label className="d-inline-block font-weight-bold" for="dob">Date of birth:</label>
				    <input className="form-control" type="date" name="dob" placeholder="Age" />
				</div>


				<div className="form-group">
					<label className="d-inline-block font-weight-bold" for="private_health_insurance">Do you currently have private health insurance?</label>
				    <select className="form-control" name="private_health_insurance">
				      <option>Yes</option>
				      <option>No</option>
				    </select>
				</div>
			</div>

			
			{/* Excess */}
			<div className="bg-white mb-3 p-3">
				<h1 className="text-center h3">Excess</h1>

				<div className="form-group">
				    <select className="form-control" name="excess">
						<option>$250</option>
						<option>$500</option>
						<option>$750</option>
				    </select>
				</div>

			</div>

			{/* Your benefits */}
			<div className="bg-white mb-3 p-3">
				<h1 className="text-center h3">Your benefits</h1>
			    
			    <h2 className="h5">Add hospital services</h2>
			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="back-neck-spine" name="back-neck-spine" />
			      <label className="custom-control-label" for="back-neck-spine">Back, neck and spine</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="blood" name="blood" />
			      <label className="custom-control-label" for="blood">Blood</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="dental-surgery" name="dental-surgery" />
			      <label className="custom-control-label" for="dental-surgery">Dental surgery</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="heart" name="heart" />
			      <label className="custom-control-label" for="heart">Heart and vascular system</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="implantation" name="implantation" />
			      <label className="custom-control-label" for="implantation">Implantation of hearing devices</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="lung-and-chest" name="lung-and-chest" />
			      <label className="custom-control-label" for="lung-and-chest">Lung and chest</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="plastic-surgery" name="plastic-surgery" />
			      <label className="custom-control-label" for="plastic-surgery">Plastic and reconstructive surgery (medically necessary)</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="podiatric-surgery" name="podiatric-surgery" />
			      <label className="custom-control-label" for="podiatric-surgery">Podiatric surgery (provided by an accredited podiatric surgeon)</label>
			    </div>


			    <h2 className="h5">Add extras benefits</h2>
			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="general-dental" name="general-dental" />
			      <label className="custom-control-label" for="general-dental">Dental, General, eg Cleaning</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="major-dental" name="major-dental" />
			      <label className="custom-control-label" for="major-dental">Dental Major</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="optical" name="optical" />
			      <label className="custom-control-label" for="optical">Optical</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="physiotherapy" name="physiotherapy" />
			      <label className="custom-control-label" for="physiotherapy">Physiotherapy</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="chiropractic" name="chiropractic" />
			      <label className="custom-control-label" for="chiropractic">Chiropractic</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="orthotics" name="orthotics" />
			      <label className="custom-control-label" for="orthotics">Orthotics</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="speech-therapy" name="speech-therapy" />
			      <label className="custom-control-label" for="speech-therapy">Speech Therapy</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="eye-therapy" name="eye-therapy" />
			      <label className="custom-control-label" for="eye-therapy">Eye Therapy</label>
			    </div>



			</div>
		
		</React.Fragment>
		)
	}
}


export default SearchForm;
