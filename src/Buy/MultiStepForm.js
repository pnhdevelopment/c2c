import React, { Component, Fragment } from 'react';

import './MultiStepForm.css';



import reviewAndJoin from './review-and-join.PNG';
import youWillNeed from './youWillNeed.PNG';
import aboutYou from './about-you.PNG';
import aboutYou2 from './about-you2.PNG';
import aboutYou3 from './about-you3.PNG';
import rebate from './reabate.PNG';
import contactDetails from './contact-details.PNG';
import paymentDetails from './payment-details.PNG';
import completeAndSubmit from './complete-and-submit.PNG';

class MultiStepForm extends Component {



	continue(event){
		/* Get container element of button, then add 'd-none' class to it */
		let container = event.target.closest(".step");
		container.classList.add("d-none");

		/* Get element adjacent to container element, then remove its 'd-none' class */
		let nextSibling = container.nextSibling;
		nextSibling.classList.remove("d-none");

	}


	goBack(event){
		/* Get container element of button, then add 'd-none' class to it */
		let container = event.target.closest(".step");
		container.classList.add("d-none");

		/* Get element adjacent to container element, then remove its 'd-none' class */
		let previousSibling = container.previousSibling;
		previousSibling.classList.remove("d-none");

	}


	render() {
		return (
			<div id="MultiStepForm" >
				{/*
				<img className="w-100 d-none" src={reviewAndJoin} alt=""/>
				<img className="w-100 d-none" src={aboutYou} alt=""/>
				<img className="w-100 d-none" src={aboutYou2} alt=""/>
				<img className="w-100 d-none" src={aboutYou3} alt=""/>
				<img className="w-100 d-none" src={rebate} alt=""/>
				<img className="w-100 d-none" src={contactDetails} alt=""/>
				<img className="w-100 d-none" src={paymentDetails} alt=""/>
				<img className="w-100 d-none" src={completeAndSubmit} alt=""/>
				*/}

				<div className="p-3 step" >
					<h1 className="text-center mb-4">Review and Join</h1>
					<p>You are almost ready to join up.</p>
					<p>This final process takes just 5 minutes.</p>
					<p>You will need:</p>
					<img className="w-100" src={youWillNeed} alt=""/>
			    	<button type="button" className="btn btn-outline-primary d-block m-auto" onClick={(event) => this.continue(event)}>Continue</button>
				</div>



				<div className="bg-white p-3 step d-none">
					<h1 className="text-center mb-4">About You</h1>
					<h2 className="h4 font-weight-bold">Personal Details</h2>

					<div className="form-group">
					    <label for="exampleInputEmail1">First Name</label>
					    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>

					<div className="form-group">
					    <label for="exampleInputEmail1">Family Name</label>
					    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>

					<div className="form-group">
					    <label for="exampleInputEmail1">Date of birth (DD/MM/YYYY)</label>
					    <input type="date" className="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>
					
					<div className="form-group">
					    <label for="exampleInputEmail1">When would you like the policy to start (DD/MM/YYYY)?</label>
					    <input type="date" className="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>

					<div class="form-group"><label class="d-inline-block" for="cover_for">What is your current annual income?</label>
						<select className="form-control w-50" name="cover_for">
							<option>Under $90,000</option>
							<option>Over $90,000</option>
						</select>
						<small>We need this information to calculate the correct Medicare Rebate for you.</small>
					</div>

					<div className="form-group">
					    <label for="exampleInputEmail1">Email Address</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					    <small>Care To Compare will only use your email address to contact you about your transactions with us.</small>
					</div>
					
					<div className="text-center py-4">
						<button type="button" className="btn btn-outline-primary text-uppercase w-25 py-2 mr-4" onClick={(event) => this.goBack(event)}>Go back</button>
						<button type="button" className="btn btn-outline-primary text-uppercase w-25 py-2" onClick={(event) => this.continue(event)}>Continue</button>
						<small className="d-block w-75 text-justify m-auto py-3"><strong>NOTE:</strong> By filling in this form, I and any other person covered by the insurance 
						policy consent to the collection, use and disclosure of any personal information in accordance with Care to Compare's
						privacy policy.</small>
					</div>
									
				</div>



				<div className="bg-white p-3 step d-none">
					<h1 className="text-center mb-4">About You</h1>
					<h2 className="h4 font-weight-bold">Medicare Details</h2>

					<div className="form-group">
					    <label for="exampleInputEmail1">Name on card</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>

					<div className="form-group">
					    <label for="exampleInputEmail1">Card Number</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>

					<div className="form-group">
					    <label for="exampleInputEmail1">Expriry Date (MM/YY)</label>
					    <input type="email" className="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>

					<div className="text-center py-4">
						<button type="button" className="btn btn-outline-primary text-uppercase w-25 py-2 mr-4" onClick={(event) => this.goBack(event)}>Go back</button>
						<button type="button" className="btn btn-outline-primary text-uppercase w-25 py-2" onClick={(event) => this.continue(event)}>Continue</button>
					</div>

				</div>


				
				<div className="bg-white p-3 step d-none">
					<h1 className="text-center mb-4">About You</h1>
					<h2 className="h4 font-weight-bold">Previous Insurance Details</h2>
					<p>Have you held Private Health Insurance previously?</p>

					<div className="text-center py-4">
						<button type="button" className="btn btn-outline-primary text-uppercase w-25 py-2 mr-4" onClick={(event) => this.continue(event)}>Yes</button>
						<button type="button" className="btn btn-outline-primary text-uppercase w-25 py-2" onClick={(event) => this.goBack(event)}>No</button>
					</div>

				</div>



				<div className="bg-white p-3 step d-none">
					<h1 className="text-center mb-4">Rebate</h1>
					<p className="h5 font-weight-normal">According to the information you have provided to us, your quote includes an Australian Government Health Insurance Rebate of:</p>
					<div className="text-center py-4">
						<span className="d-block h5 m-0">25.415%</span>
						<span className="d-block">Age less than 65</span>
						<span className="d-block">Income less than $90,000</span>
					</div>
					<p className="h5 font-weight-normal">You are required to select the button below to review your rebate before continuing.</p>
					<div className="py-4 text-center">
						<button type="button" className="btn btn-outline-primary text-uppercase w-25 py-2">Review Rebate</button>
					</div>
			    	<div className="text-center py-4">
						<button type="button" className="btn btn-outline-primary text-uppercase w-25 py-2 mr-4" onClick={(event) => this.goBack(event)}>Go back</button>
						<button type="button" className="btn btn-outline-primary text-uppercase w-25 py-2" onClick={(event) => this.continue(event)}>Continue</button>
					</div>

				</div>



				<div className="bg-white p-3 step d-none">
					<h1 className="text-center mb-4">Contact Details</h1>
					
					<h2 className="h3 font-weight-bold">Home Address*</h2>
					
					<div className="form-group">
					    <label for="exampleInputEmail1">Address Line 1</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>
					
					<div className="form-group">
					    <label for="exampleInputEmail1">Address Line 2</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>

					<div className="form-group">
					    <label for="exampleInputEmail1">Suburb</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>

					<div className="form-group">
					    <label for="exampleInputEmail1">Post Code</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>

					<div className="form-group">
					    <label for="exampleInputEmail1">Contact Number</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>

					
					<small class="d-inline-block mb-3">* Premiums vary from state to state. Care to Compare needs to
					know your address details to calculate the rates</small>

					<div className="custom-control custom-checkbox mb-3">
				      <input type="checkbox" className="custom-control-input" id="customCheck2" name="example1" />
				      <label className="custom-control-label" for="customCheck2">My postal address is the same as my home address.</label>
			    	</div>


					<div className="text-center py-4">
						<button type="button" className="btn btn-outline-primary text-uppercase w-25 py-2 mr-4" onClick={(event) => this.goBack(event)}>Go back</button>
						<button type="button" className="btn btn-outline-primary text-uppercase w-25 py-2" onClick={(event) => this.continue(event)}>Continue</button>
					</div>

				</div>



				<div className="bg-white p-3 step d-none">

					<h1 className="text-center mb-4">Payment Details</h1>
					I would like to pay my premium by:<br/>
					<button type="button" className="btn btn-outline-primary w-25 mr-2">Direct Debit</button>
			    	<button type="button" className="btn btn-outline-primary w-25">Credit Card</button>

			    	<div className="form-group">
					    <label for="exampleInputEmail1">Account Name</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>

					<div className="form-group">
					    <label for="exampleInputEmail1">BSB Number</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>

					<div className="form-group">
					    <label for="exampleInputEmail1">Account Number</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>

					<div className="form-group">
					    <label for="exampleInputEmail1">Debit on:</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>

					<ul>
						<li>Your first direct debit will occur within 3 business days of joining.</li>
						<li>
							<span className="d-block">Would you like your claim refunds paid into the same account?</span>
							<div className="custom-control custom-checkbox d-inline mr-3">
							  <input type="checkbox" className="custom-control-input" id="customCheck1" />
							  <label className="custom-control-label" for="customCheck1">Yes</label>
							</div>
							<div className="custom-control custom-checkbox d-inline">
							  <input type="checkbox" className="custom-control-input" id="customCheck1" />
							  <label className="custom-control-label" for="customCheck1">No</label>
							</div>
						</li>
					</ul>

					<div className="text-center py-4">
						<button type="button" className="btn btn-outline-primary text-uppercase w-25 py-2 mr-4" onClick={(event) => this.goBack(event)}>Go back</button>
						<button type="button" className="btn btn-outline-primary text-uppercase w-25 py-2" onClick={(event) => this.continue(event)}>Continue</button>
						<small className="d-block w-75 text-justify m-auto py-3">By clicking the continue button, you agree to the direct debit facility
			    	and authorise Care To Compare to debit from your nominated account.</small>
					</div>

				</div>








				<div className="bg-white p-3 step d-none">
    	            <h1 className="text-center mb-4">Complete and Submit</h1>
    	            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, fuga laboriosam nulla minus sint provident id rerum porro. Ratione, harum.</p>
    	            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, fuga laboriosam nulla minus sint provident id rerum porro. Ratione, harum.</p>
    	            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, fuga laboriosam nulla minus sint provident id rerum porro. Ratione, harum.</p>
				
    	            <div className="custom-control custom-checkbox mb-3">
				      <input type="checkbox" className="custom-control-input" id="customCheck2" name="example1" />
				      <label className="custom-control-label" for="customCheck2">I agree to the terms and conditions stated above.</label>
			    	</div>

			    	<div className="text-center py-4">
						<button type="button" className="btn btn-outline-primary text-uppercase w-25 py-2 mr-4" onClick={(event) => this.goBack(event)}>Go back</button>
						<button type="button" className="btn btn-outline-primary text-uppercase w-25 py-2" onClick={(event) => this.continue(event)}>Continue</button>
					</div>
				</div>







	














				









	








	











				






			</div>
		)
	}
}

export default MultiStepForm;