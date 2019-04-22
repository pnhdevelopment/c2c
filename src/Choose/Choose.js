import React, { Component, Fragment } from 'react';

import ProgressBar from '../ProgressBar/ProgressBar.js';


import './Choose.css';

class App extends Component {
  render() {
    return (
		<div id="choose">

		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />



			{/* <ProgressBar /> */}
			
			<div className="container bg-white mb-4 p-4">
			  <div className="row">

			    <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
			      <img className="mb-2" src="http://via.placeholder.com/150x50" alt=""/>
			      <span className="d-block h5 m-0">Basic hospital</span>
			      <span className="d-block h5 m-0">$500 excess and extras</span>
			    </div>

			    <div className="col-12 col-lg-6 text-center d-flex align-items-center justify-content-center">
			      <div>
				      <span className="d-block h3 m-0">$135/month</span>
				      <span className="d-block h5 m-0">Co-payment: no</span>
				      <span className="d-block h5 m-0">Extras: 65% back</span>
			      </div>
			    </div>

			  </div>
			</div>




			<div className="container p-0">
			  <div className="row">

			    <div className="col-12 col-lg-6">
			    	<div className="bg-white py-4 px-5">
						<h1 className="h2 text-center mb-3">Hospital Cover Basic</h1>

						<ul className="features">
							<li>Hospital accommodation</li>
							<li>Excess per visit $500</li>
							<li>Max excess per person per year $500</li>
							<li>Max excess per policy per year $500</li>
						</ul>

						<ul className="features">
							<li className="tick">Lorem ipsum dolor test.</li>
							<li className="tick">Lorem ipsum dolor sit amet.</li>
							<li className="cross">Lorem ipsum.</li>
							<li className="tick">Lorem ipsum dolor.</li>
							<li className="tick">Lorem ipsum dolor test.</li>
							<li className="tick">Lorem ipsum dolor sit amet.</li>
							<li className="cross">Lorem ipsum.</li>
							<li className="restricted">Lorem ipsum dolor.</li>
						</ul>
					</div>
			    </div>

			    <div className="col-12 col-lg-6">
			      <div className="bg-white py-4 px-5">
				      <h1 className="h2 text-center mb-3">Extras Cover Basic</h1>
						
						<h2 className="h6">Dental care</h2>
				      	<ul className="features">
							<li className="tick">Lorem ipsum dolor test.</li>
							<li className="tick">Lorem ipsum dolor sit amet.</li>
							<li className="cross">Lorem ipsum.</li>
							<li className="tick">Lorem ipsum dolor.</li>
						</ul>
						
						<h2 className="h6">Dental care</h2>
						<ul className="features">
							<li className="tick">Lorem ipsum dolor test.</li>
							<li className="tick">Lorem ipsum dolor sit amet.</li>
							<li className="cross">Lorem ipsum.</li>
							<li className="tick">Lorem ipsum dolor.</li>
						</ul>

						<h2 className="h6">Dental care</h2>
						<ul className="features">
							<li className="tick">Lorem ipsum dolor test.</li>
							<li className="tick">Lorem ipsum dolor sit amet.</li>
							<li className="cross">Lorem ipsum.</li>
							<li className="tick">Lorem ipsum dolor.</li>
						</ul>

			      </div>
			    </div>

			  </div>
			</div>



			<div className="container py-4 icon-key text-center">
			  <div className="row justify-content-center">
			    
			    <div className="col-6 col-md-4">
					<span className="tick">Covered</span>
			    </div>

			    <div className="col-6 col-md-4">
					<span className="restricted">Restricted</span>
			    </div>

			    <div className="col-6 col-md-4">
					<span className="cross">Not Covered</span>
			    </div>

			  </div>
			</div>



			<div className="container py-4">
			  <div className="row">
			    
			    <div className="col-6 text-center">
					<a href="#">Download product disclosure statement</a><br/>
					<a href="#">Email quote to me</a>
			    </div>

			    <div className="col-6 text-center">
					<button type="button" className="btn btn-outline-primary">Continue</button>
			    </div>

			  </div>
			</div>


		    
		</div>  


    );
  }
}

export default App;