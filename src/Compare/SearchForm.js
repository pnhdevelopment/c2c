import React, { Component, Fragment } from 'react';
import queryString from 'query-string';
import { withRouter, BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class SearchForm extends Component {

	constructor(props){
    	super(props);
    	this.state = {
    		cover_for: '',
    		australianState: ''
    	};
  	}

  	componentDidUpdate(nextProps){
	    if (nextProps.location !== this.props.location) {
	    	// alert('changed!');
	      // const values = queryString.parse(this.props.location.search);
	      // this.performSearch(values.q);
	    }
	}

	updateCoverFor(e){
		this.setState({
			cover_for: e.target.value
		});
		this.handleURL();
	}

	updateAustralianState(e){
		this.setState({
			australianState: e.target.value
		});
		this.handleURL();
	}

	handleURL(){
		// alert(e.target.value)

		this.props.history.push({
	      pathname: '/compare',
	      search: '?cover_for=' + this.state.cover_for + '&state=' + this.state.australianState 
	    });


	}

	render() {
		return (
			<Fragment>

			{/* Your details */}
			<div className="bg-white mb-3 p-3">
				<h1 className="text-center h3">Your details</h1>

				<div className="form-group">
					<label className="d-inline-block font-weight-bold" htmlFor="cover_for">Cover for:</label>
				    <select className="form-control" name="cover_for" onClick={(e) => this.updateCoverFor(e)} >
						{/* <option>Me</option>
						<option>Me and my partner</option>
						<option>My family</option>
						<option>Me and my kids</option> */}
						<option value="SINGLES">SINGLES</option>
						<option value="COUPLES">COUPLES</option>
						<option value="FAMILIES">FAMILIES</option>
						<option value="SINGLE_PARENTS">SINGLE_PARENTS</option>
						<option value="DEPENDANTS">DEPENDANTS</option>
				    </select>
				</div>

				<div className="form-group">
					<label className="d-inline-block font-weight-bold" htmlFor="state">In:</label>
				    <select className="form-control" name="state" onClick={(e) => this.updateAustralianState(e)} >
						<option value="ACT">ACT</option>
						<option value="NSW">NSW</option>
						<option value="NT">NT</option>
						<option value="QLD">QLD</option>
						<option value="SA">SA</option>
						<option value="TAS">TAS</option>
						<option value="VIC">VIC</option>
						<option value="WA">WA</option>
				    </select>
				</div>

				{/* <div className="form-group">
					<label className="d-inline-block font-weight-bold" htmlFor="income">Income:</label>
				    <select className="form-control" name="income">
						<option>Under $90,000</option>
						<option>$90,001 to $105,000</option>
						<option>$105,001 to $140,000</option>
						<option>$140,001 and over</option>
				    </select>
				</div> */}

				{/* <div className="form-group">
					<label className="d-inline-block" htmlFor="age">Age:</label>
				    <select className="form-control" name="age">
				      <option>Age over 31</option>
				      <option>Age under 31</option>
				    </select>
				</div> */}

				{/* <div className="form-group">
					<label className="d-inline-block font-weight-bold" htmlFor="dob">Date of birth:</label>
				    <input className="form-control" type="date" name="dob" placeholder="Age" />
				</div> */}


				{/* <div className="form-group">
					<label className="d-inline-block font-weight-bold" htmlFor="private_health_insurance">Do you currently have private health insurance?</label>
				    <select className="form-control" name="private_health_insurance">
				      <option>Yes</option>
				      <option>No</option>
				    </select>
				</div> */}

			</div>

			
			{/* Excess */}
			<div className="bg-white mb-3 p-3">
				<h1 className="text-center h3">Excess</h1>

				<div className="form-group">
				    {/* <select className="form-control" name="excess">
						<option>$250</option>
						<option>$500</option>
						<option>$750</option>
				    </select> */}

				    <select className="form-control" name="maxMonthlyPremium" onClick={(e) => this.handleClick(e)} >
						<option value="250">$250</option>
						<option value="500">$500</option>
						<option value="750">$750</option>
				    </select>

				</div>

			</div>

			{/* Your benefits */}
			<div className="bg-white mb-3 p-3">
				<h1 className="text-center h3">Your benefits</h1>
				{/* Hospital services */}
			    <h2 className="h5">Hospital services</h2>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="HEART_SUGERY" name="hospital-services" />
			      <label className="custom-control-label" htmlFor="HEART_SUGERY">HEART_SUGERY</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="EYE_SURGERY" name="hospital-services" />
			      <label className="custom-control-label" htmlFor="EYE_SURGERY">EYE_SURGERY</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="PREGNANCY" name="hospital-services" />
			      <label className="custom-control-label" htmlFor="PREGNANCY">PREGNANCY</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="IVF" name="hospital-services" />
			      <label className="custom-control-label" htmlFor="IVF">IVF</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="JOINT_REPLACEMENTS" name="hospital-services" />
			      <label className="custom-control-label" htmlFor="JOINT_REPLACEMENTS">JOINT_REPLACEMENTS</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="DIALYSIS" name="hospital-services" />
			      <label className="custom-control-label" htmlFor="DIALYSIS">DIALYSIS</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="SURGICAL_WEIGHT_LOSS_PROCEDURES" name="hospital-services" />
			      <label className="custom-control-label" htmlFor="SURGICAL_WEIGHT_LOSS_PROCEDURES">SURGICAL_WEIGHT_LOSS_PROCEDURES</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="STERILISATION" name="hospital-services" />
			      <label className="custom-control-label" htmlFor="STERILISATION">STERILISATION</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="NON_COSMETIC_PLASTIC_SURGERY" name="hospital-services" />
			      <label className="custom-control-label" htmlFor="NON_COSMETIC_PLASTIC_SURGERY">NON_COSMETIC_PLASTIC_SURGERY</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="IN_HOSPITAL_REHABILITATION" name="hospital-services" />
			      <label className="custom-control-label" htmlFor="IN_HOSPITAL_REHABILITATION">IN_HOSPITAL_REHABILITATION</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="IN_HOSPITAL_PSYCHIATRY" name="hospital-services" />
			      <label className="custom-control-label" htmlFor="IN_HOSPITAL_PSYCHIATRY">IN_HOSPITAL_PSYCHIATRY</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="PALLIATIVE_CARE" name="hospital-services" />
			      <label className="custom-control-label" htmlFor="PALLIATIVE_CARE">PALLIATIVE_CARE</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="OTHER_NON_MEDICARE" name="hospital-services" />
			      <label className="custom-control-label" htmlFor="OTHER_NON_MEDICARE">OTHER_NON_MEDICARE</label>
			    </div>


			    {/*
			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="blood" name="blood" />
			      <label className="custom-control-label" htmlFor="blood">Blood</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="dental-surgery" name="dental-surgery" />
			      <label className="custom-control-label" htmlFor="dental-surgery">Dental surgery</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="heart" name="heart" />
			      <label className="custom-control-label" htmlFor="heart">Heart and vascular system</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="implantation" name="implantation" />
			      <label className="custom-control-label" htmlFor="implantation">Implantation of hearing devices</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="lung-and-chest" name="lung-and-chest" />
			      <label className="custom-control-label" htmlFor="lung-and-chest">Lung and chest</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="plastic-surgery" name="plastic-surgery" />
			      <label className="custom-control-label" htmlFor="plastic-surgery">Plastic and reconstructive surgery (medically necessary)</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="podiatric-surgery" name="podiatric-surgery" />
			      <label className="custom-control-label" htmlFor="podiatric-surgery">Podiatric surgery (provided by an accredited podiatric surgeon)</label>
			    </div>  */}


			    <h2 className="h5">Extras benefits</h2>

				<div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="DENTAL_GENERAL" name="DENTAL_GENERAL" />
			      <label className="custom-control-label" htmlFor="DENTAL_GENERAL">DENTAL_GENERAL</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="DENTAL_MAJOR" name="DENTAL_MAJOR" />
			      <label className="custom-control-label" htmlFor="DENTAL_MAJOR">DENTAL_MAJOR</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="DENTAL_ENDODONTIC" name="DENTAL_ENDODONTIC" />
			      <label className="custom-control-label" htmlFor="DENTAL_ENDODONTIC">DENTAL_ENDODONTIC</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="DENTAL_ORTHODONTIC" name="DENTAL_ORTHODONTIC" />
			      <label className="custom-control-label" htmlFor="DENTAL_ORTHODONTIC">DENTAL_ORTHODONTIC</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="OPTICAL" name="OPTICAL" />
			      <label className="custom-control-label" htmlFor="OPTICAL">OPTICAL</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="NON_PBS_PHARMACEUTICALS" name="NON_PBS_PHARMACEUTICALS" />
			      <label className="custom-control-label" htmlFor="NON_PBS_PHARMACEUTICALS">NON_PBS_PHARMACEUTICALS</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="PHYSIOTHERAPY" name="PHYSIOTHERAPY" />
			      <label className="custom-control-label" htmlFor="PHYSIOTHERAPY">PHYSIOTHERAPY</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="CHIROPRACTIC" name="CHIROPRACTIC" />
			      <label className="custom-control-label" htmlFor="CHIROPRACTIC">CHIROPRACTIC</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="PODIATRY" name="PODIATRY" />
			      <label className="custom-control-label" htmlFor="PODIATRY">PODIATRY</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="CLINICAL_PSYCHOLOGY" name="CLINICAL_PSYCHOLOGY" />
			      <label className="custom-control-label" htmlFor="CLINICAL_PSYCHOLOGY">CLINICAL_PSYCHOLOGY</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="ACUPUNCTURE" name="ACUPUNCTURE" />
			      <label className="custom-control-label" htmlFor="ACUPUNCTURE">ACUPUNCTURE</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="NATUROPATHY" name="NATUROPATHY" />
			      <label className="custom-control-label" htmlFor="NATUROPATHY">NATUROPATHY</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="MASSAGE" name="MASSAGE" />
			      <label className="custom-control-label" htmlFor="MASSAGE">MASSAGE</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="HEARING_AIDS" name="HEARING_AIDS" />
			      <label className="custom-control-label" htmlFor="HEARING_AIDS">HEARING_AIDS</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="BLOOD_GLUCOSE_MONITOR" name="BLOOD_GLUCOSE_MONITOR" />
			      <label className="custom-control-label" htmlFor="BLOOD_GLUCOSE_MONITOR">BLOOD_GLUCOSE_MONITOR</label>
			    </div>


			    {/* <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="general-dental" name="general-dental" />
			      <label className="custom-control-label" htmlFor="general-dental">Dental, General, eg Cleaning</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="major-dental" name="major-dental" />
			      <label className="custom-control-label" htmlFor="major-dental">Dental Major</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="optical" name="optical" />
			      <label className="custom-control-label" htmlFor="optical">Optical</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="physiotherapy" name="physiotherapy" />
			      <label className="custom-control-label" htmlFor="physiotherapy">Physiotherapy</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="chiropractic" name="chiropractic" />
			      <label className="custom-control-label" htmlFor="chiropractic">Chiropractic</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="orthotics" name="orthotics" />
			      <label className="custom-control-label" htmlFor="orthotics">Orthotics</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="speech-therapy" name="speech-therapy" />
			      <label className="custom-control-label" htmlFor="speech-therapy">Speech Therapy</label>
			    </div>

			    <div className="custom-control custom-checkbox mb-1">
			      <input type="checkbox" className="custom-control-input" id="eye-therapy" name="eye-therapy" />
			      <label className="custom-control-label" htmlFor="eye-therapy">Eye Therapy</label>
			    </div> */}



			</div>
		
		</Fragment>
		)
	}
}

export default withRouter(SearchForm);
