import React, { Component } from 'react';

import './MultiStepForm.css';



// import reviewAndJoin from './review-and-join.PNG';
import youWillNeed from './youWillNeed.PNG';
// import aboutYou from './about-you.PNG';
// import aboutYou2 from './about-you2.PNG';
// import aboutYou3 from './about-you3.PNG';
// import rebate from './reabate.PNG';
// import contactDetails from './contact-details.PNG';
// import paymentDetails from './payment-details.PNG';
// import completeAndSubmit from './complete-and-submit.PNG';

class MultiStepForm extends Component {


	navigate(event, elementToHideById, elementToShowById){

		/* Get container element of button, then add 'd-none' class to it */
		let elementToHide = document.getElementById(elementToHideById);
		elementToHide.classList.add("d-none");

		/* Show required element by removing its 'd-none' class */
		let elementToShow = document.getElementById(elementToShowById);
		elementToShow.classList.remove("d-none");

		/* Scroll to top of form */
		elementToShow.scrollIntoView({ behavior: 'smooth' });

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

				{/* Review and Join */}
				<div className="p-3" id="review-and-join">
					<h1 className="text-center mb-4">Review and Join</h1>
					<p>You are almost ready to join up.</p>
					<p>This final process takes just 5 minutes.</p>
					<p>You will need:</p>
					<img className="w-100" src={youWillNeed} alt=""/>
					<div className="text-center">
				    	<button
				    		type="button"
				    		className="btn btn-outline-primary d-block m-auto text-uppercase font-weight-bold px-5 py-3 bg-aqua"
				    		onClick={(event) => this.navigate(event, "review-and-join", "about-you-1")}>Continue</button>
				    	<a href="#test"
				    		className="email-quote d-inline-block text-center my-4"
				    		data-toggle="modal"
				    		data-target="#emailQuoteModal">I'm not ready yet,<br/> please email me a quote.</a>
			    	</div>
				</div>


				{/* Modal box */}
				<div className="modal fade" id="emailQuoteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header pb-0">
				      	<h5 className="mb-3" id="exampleModalLabel">Email Address</h5>
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div className="modal-body pt-0 mb-4">
				      
						<div className="input-group">
						  <input type="text" className="form-control" />
						  <span className="input-group-btn">
						    <button className="btn btn-outline-primary bg-aqua" type="button">Go!</button>
						  </span>
						</div>
				      </div>
				    </div>
				  </div>
				</div>



				{/* About You */}
				<div className="bg-white p-3 d-none" id="about-you-1">
					<h1 className="text-center mb-4">About You</h1>
					<h2 className="h4 font-weight-bold">Personal Details</h2>

					<div className="form-group">
					    <label for="first-name">First Name</label>
					    <input type="text" className="form-control" id="first-name" />
					</div>

					<div className="form-group">
					    <label for="family-name">Family Name</label>
					    <input type="text" className="form-control" id="family-name" />
					</div>

					<div className="form-group">
					    <label for="dob">Date of birth (DD/MM/YYYY)</label>
					    <input type="date" className="form-control w-50" id="dob" />
					</div>
					
					<div className="form-group">
					    <label for="policy-start">When would you like the policy to start (DD/MM/YYYY)?</label>
					    <input type="date" className="form-control w-50" id="policy-start" />
					</div>
					
					{/*
					<div className="form-group"><label className="d-inline-block" for="annual-income">What is your current annual income?</label>
						<select className="form-control w-50" name="annual-income">
							<option>Under $90,000</option>
							<option>$90,001 to $105,000</option>
							<option>$105,001 to $140,000</option>
							<option>$140,001 and over</option>
						</select>
						<small>We need this information to calculate the correct Medicare Rebate for you.</small>
					</div>
					*/}

					<div className="form-group">
					    <label for="email-address">Email Address</label>
					    <input type="email" className="form-control" id="email-address" name="email-address" />
					    <small>Care To Compare will only use your email address to contact you about your transactions with us.</small>
					</div>
					
					<div className="text-center py-4">
						<button
							type="button"
							className="btn btn-outline-primary text-uppercase font-weight-bold w-25 py-2 mr-4"
							onClick={(event) => this.navigate(event, "about-you-1", "review-and-join")}>Go back</button>
						<button
							type="button"
							className="btn btn-outline-primary text-uppercase font-weight-bold w-25 py-2 bg-aqua"
							onClick={(event) => this.navigate(event, "about-you-1", "about-you-2")}>Continue</button>
						
						<small className="d-block w-75 text-justify m-auto py-3">
							<strong>NOTE:</strong> By filling in this form, I and any other person covered by the insurance 
						policy consent to the collection, use and disclosure of any personal information in accordance with Care to Compare's
						privacy policy.
						</small>
					</div>	
				</div>


				{/* About You */}
				<div className="bg-white p-3 d-none" id="about-you-2">
					<h1 className="text-center mb-4">About You</h1>
					<h2 className="h4 font-weight-bold">Medicare Details</h2>

					<div className="form-group">
					    <label for="name-on-card">Name on card</label>
					    <input type="text" className="form-control" id="name-on-card" name="name-on-card" />
					</div>

					<div className="form-group">
					    <label for="card-number">Card Number</label>
					    <input type="text" className="form-control" id="card-number" name="card-number" />
					</div>

					<div className="form-group">
					    <label for="expiry-date">Expriry Date (MM/YY)</label>
					    <input type="text" className="form-control w-50" id="expiry-date" name="expiry-date" />
					</div>

					<div className="text-center py-4">
						<button
							type="button"
							className="btn btn-outline-primary text-uppercase w-25 py-2 mr-4 font-weight-bold"
							onClick={(event) => this.navigate(event, "about-you-2", "about-you-1")}>Go back</button>
						<button
							type="button"
							className="btn btn-outline-primary text-uppercase w-25 py-2 font-weight-bold bg-aqua"
							onClick={(event) => this.navigate(event, "about-you-2", "previous-insurance-details")}>Continue</button>
					</div>
				</div>


				{/* Previous Insurance Details */}
				<div className="bg-white p-3 d-none" id="previous-insurance-details">
					<h1 className="text-center mb-4">About You</h1>
					<h2 className="h4 font-weight-bold">Previous Insurance Details</h2>
					<p>Have you held Private Health Insurance previously?</p>

					<div className="text-center py-4">
						<button
							type="button"
							className="btn btn-outline-primary text-uppercase w-25 py-2 mr-4"
							onClick={(event) => this.navigate(event, "previous-insurance-details", "rebate")}>Yes</button>
						<button
							type="button"
							className="btn btn-outline-primary text-uppercase w-25 py-2"
							onClick={(event) => this.navigate(event, "previous-insurance-details", "about-you-2")}>No</button>
					</div>
						
					<div class="form-group">
						<label class="d-inline-block" for="health_insurer">Health Insurer</label>
						<select className="form-control" name="health_insurer">
							<option>ahm health insurance</option>
							<option>Australian Unity</option>
							<option>Bupa</option>
							<option>CBHS</option>
							<option>CDH Benefits Fund</option>
							<option>CUA Health Limited</option>
							<option>Defence Health Limited</option>
							<option>Emergency Services Health</option>
							<option>GMHBA</option>
							<option>HBF</option>
							<option>HCF</option>
							<option>Health Partners</option>
							<option>health.com.au</option>
							<option>Latrobe Health Services</option>
							<option>Medibank Private</option>
							<option>myOwn Health Insurance</option>
							<option>Navy Health</option>
							<option>nib</option>
							<option>Nurses & Midwives Health</option>
							<option>Peoplecare Health Insurance</option>
							<option>Phoenix Health Fund Limited</option>
							<option>Police Health</option>
							<option>Queensland Country Health Fund</option>
							<option>Railway and Transport Health Fund</option>
							<option>St.Lukes Health</option>
							<option>Teachers Health</option>
							<option>Transport Health</option>
							<option>TUH Health Fund</option>
							<option>Westfund Limited</option>
						</select>
					</div>

					<div className="form-group">
					    <label for="membership-number">Membership number</label>
					    <input type="text" className="form-control" id="membership-number" name="membership-number" />
					</div>

				</div>


				{/* Rebate */}
				<div className="bg-white p-3 d-none" id="rebate">
					<h1 className="text-center mb-4">Rebate</h1>
					<p className="h5 font-weight-normal">According to the information you have provided to us, your quote includes an Australian Government Health Insurance Rebate of:</p>
					<div className="text-center py-4">
						<span className="d-block h5 m-0">25.415%</span>
						<span className="d-block">Age less than 65</span>
						<span className="d-block">Income less than $90,000</span>
					</div>
					<p className="h5 font-weight-normal">You are required to select the button below to review your rebate before continuing.</p>
					<div className="py-4 text-center">
						<button
							type="button"
							className="btn btn-outline-primary text-uppercase w-25 py-2"
							onClick={(event) => this.navigate(event, "rebate", "review-rebate")}
						>Review Rebate</button>
					</div>
			    	<div className="text-center py-4">
						<button
							type="button"
							className="btn btn-outline-primary text-uppercase w-25 py-2 mr-4 font-weight-bold"
							onClick={(event) => this.navigate(event, "rebate", "about-you-2")}>Go back</button>
						<button
							type="button"
							className="btn btn-outline-primary text-uppercase w-25 py-2 font-weight-bold bg-aqua"
							onClick={(event) => this.navigate(event, "rebate", "contact-details")}>Continue</button>
					</div>

				</div>

				{/* Review Rebate */}
				<div className="bg-white p-3 step d-none" id="review-rebate">
    	            <h1 className="text-center mb-4">Review Rebate</h1>
    	            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, fuga laboriosam nulla minus sint provident id rerum porro. Ratione, harum.</p>
    	            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, fuga laboriosam nulla minus sint provident id rerum porro. Ratione, harum.</p>
    	            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, fuga laboriosam nulla minus sint provident id rerum porro. Ratione, harum.</p>
				
    	            <div className="custom-control custom-checkbox mb-3">
				      <input type="checkbox" className="custom-control-input" id="review-rebate-i-agree" name="review-rebate-i-agree" />
				      <label className="custom-control-label" for="review-rebate-i-agree">I agree to the terms and conditions stated above.</label>
			    	</div>

			    	<div className="py-4">
						<button
							type="button"
							className="btn btn-outline-primary text-uppercase w-25 py-2 mr-4 font-weight-bold"
							onClick={(event) => this.navigate(event, "review-rebate", "rebate")}>Go back</button>
					</div>
				</div>



				{/* Contact Details */}
				<div className="bg-white p-3 d-none" id="contact-details">
					<h1 className="text-center mb-4">Contact Details</h1>
					
					<h2 className="h3 font-weight-bold">Home Address*</h2>
					
					<div className="form-group">
					    <label for="address-line-1">Address Line 1</label>
					    <input type="email" className="form-control" id="address-line-1" />
					</div>
					
					<div className="form-group">
					    <label for="address-line-2">Address Line 2</label>
					    <input type="email" className="form-control" id="address-line-2" />
					</div>

					<div className="form-group">
					    <label for="suburb">Suburb</label>
					    <input type="email" className="form-control" id="suburb" />
					</div>

					<div className="form-group">
					    <label for="post-code">Post Code</label>
					    <input type="email" className="form-control" id="post-code" />
					</div>

					<div className="form-group">
					    <label for="postal-address">Postal Address</label>
					    <input type="email" className="form-control" id="postal-address" />
					</div>

					<div className="form-group">
					    <label for="contact-number">Contact Number</label>
					    <input type="email" className="form-control" id="contact-number" />
					</div>

					
					<small class="d-inline-block mb-3">* Premiums vary from state to state. Care to Compare needs to
					know your address details to calculate the rates</small>

					<div className="custom-control custom-checkbox mb-3">
				      <input type="checkbox" className="custom-control-input" id="postal-home-same" name="postal-home-same" />
				      <label className="custom-control-label" for="postal-home-same">My postal address is the same as my home address.</label>
			    	</div>


					<div className="text-center py-4">
						<button
							type="button"
							className="btn btn-outline-primary text-uppercase w-25 py-2 mr-4 font-weight-bold"
							onClick={(event) => this.navigate(event, "contact-details", "rebate")}>Go back</button>
						<button
							type="button"
							className="btn btn-outline-primary text-uppercase w-25 py-2 font-weight-bold active"
							onClick={(event) => this.navigate(event, "contact-details", "payment-details")}>Continue</button>
					</div>

				</div>


				{/* Payment Details */}
				<div className="bg-white p-3 d-none" id="payment-details">

					<h1 className="text-center mb-4">Payment Details</h1>

					{/* <div className="mb-3">
						<span className="d-block mb-1">I would like to pay my premium by:</span>
						<button type="button" className="btn btn-outline-primary w-25 no-radius active">Direct Debit</button>
				    	<button type="button" className="btn btn-outline-primary no-radius w-25">Credit Card</button>
			    	</div> */}

					
					<span className="d-block mb-1">I would like to pay my premium by:</span>
					<div className="btn-group btn-group-toggle" data-toggle="buttons">
						<label className="btn btn-outline-primary no-radius active" onClick={(event) => this.navigate(event, "credit-card", "debit-card")}>
							<input type="radio" name="options" id="option1" autocomplete="off" checked />Direct Debit
						</label>
						<label className="btn btn-outline-primary no-radius" onClick={(event) => this.navigate(event, "debit-card", "credit-card")}>
							<input type="radio" name="options" id="option2" autocomplete="off" />Credit Card
						</label>
					</div>


					
					<div id="debit-card">
				    	<div className="form-group">
						    <label for="account-name">Account Name</label>
						    <input type="text" name="account-name" className="form-control" id="account-name" />
						</div>

						<div className="form-group">
						    <label for="bsb-number">BSB Number</label>
						    <input type="text" name="bsb-number" className="form-control" id="bsb-number" />
						</div>

						<div className="form-group">
						    <label for="account-number">Account Number</label>
						    <input type="text" name="account-number" className="form-control" id="account-number" />
						</div>

						<div className="form-group">
						    <label for="debit-on">Debit on:</label>
						    <input type="text" name="debit-on" className="form-control" id="debit-on" />
						</div>
					</div>


					<div id="credit-card" className="d-none">
				    	<div className="form-group">
						    <label for="name-on-credit-card">Name on credit card</label>
						    <input type="text" name="name-on-credit-card" className="form-control" id="name-on-credit-card" />
						</div>

						<div className="form-group">
						    <label for="card-number">Card number</label>
						    <input type="text" name="card-number" className="form-control" id="card-number" />
						</div>

						<div className="form-group">
						    <label for="expiry-date">Expiry date</label>
						    <input type="text" name="expiry-date" className="form-control" id="expiry-date" />
						</div>

						<div className="form-group">
						    <label for="cvc-number">CVC number</label>
						    <input type="text" name="cvc-number" className="form-control" id="cvc-number" />
						</div>
					</div>


					<ul>
						<li>Your first direct debit will occur within 3 business days of joining.</li>
						<li>
							<span className="d-block">Would you like your claim refunds paid into the same account?</span>
							<div className="custom-control custom-radio d-inline mr-3">
							  <input type="radio" className="custom-control-input" name="custom-refunds" id="claim-refunds-yes" />
							  <label className="custom-control-label" for="claim-refunds-yes">Yes</label>
							</div>
							<div className="custom-control custom-radio d-inline">
							  <input type="radio" className="custom-control-input" name="custom-refunds" id="claim-refunds-no" />
							  <label className="custom-control-label" for="claim-refunds-no">No</label>
							</div>
						</li>
					</ul>

					<div className="text-center py-4">
						<button
							type="button"
							className="btn btn-outline-primary text-uppercase w-25 py-2 mr-4 font-weight-bold"
							onClick={(event) => this.navigate(event, "payment-details", "contact-details")}>Go back</button>
						<button
							type="button"
							className="btn btn-outline-primary text-uppercase w-25 py-2 font-weight-bold bg-aqua"
							onClick={(event) => this.navigate(event, "payment-details", "complete-and-submit")}>Continue</button>
						<small
							className="d-block w-75 text-justify m-auto py-3">By clicking the continue button, you agree to the direct debit facility
			    			and authorise Care To Compare to debit from your nominated account.</small>
					</div>

				</div>

				
				{/* Complete and Submit */}
				<div className="bg-white p-3 step d-none" id="complete-and-submit">
    	            <h1 className="text-center mb-4">Complete and Submit</h1>
    	            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, fuga laboriosam nulla minus sint provident id rerum porro. Ratione, harum.</p>
    	            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, fuga laboriosam nulla minus sint provident id rerum porro. Ratione, harum.</p>
    	            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, fuga laboriosam nulla minus sint provident id rerum porro. Ratione, harum.</p>
				
    	            <div className="custom-control custom-checkbox mb-3">
				      <input type="checkbox" className="custom-control-input" id="complete-and-submit-i-agree" name="complete-and-submit-i-agree" />
				      <label className="custom-control-label" for="complete-and-submit-i-agree">I agree to the terms and conditions stated above.</label>
			    	</div>

			    	<div className="text-center py-4">
						<button
							type="button"
							className="btn btn-outline-primary text-uppercase w-25 py-2 mr-4 font-weight-bold"
							onClick={(event) => this.navigate(event, "complete-and-submit", "payment-details")}>Go back</button>
						<button
							type="button"
							className="btn btn-outline-primary text-uppercase w-25 py-2 font-weight-bold bg-aqua">Continue</button>
					</div>
				</div>


			</div>
		)
	}
}

export default MultiStepForm;