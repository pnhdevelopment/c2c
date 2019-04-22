import React, { Component, Fragment } from 'react';

import ProgressBar from '../ProgressBar/ProgressBar.js';


import './Compare.css';

class Compare extends Component {
  render() {
    return (
		<React.Fragment>

			<ProgressBar />

			<div className="container" id="compare">
				<div className="row">

					<div className="col-12 col-lg-3">

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

					</div>

					<div className="col-12 col-lg-9 bg-white py-3">						
						<div className="row">

							<div className="col-12 col-md-6 col-lg-4 mb-3">
								<div className="wrapper text-center p-2 mb-3">
									<img className="w-100 mb-3" src="http://via.placeholder.com/250x150" alt="" />
									<h1 className="font-weight-bold h3">BUPA</h1>
									<h2 className="font-weight-bold h6">ULTIMATE HEALTH COVER</h2>
									<h3 className="font-weight-bold h6 mb-3">$130</h3>

									<h4 className="text-uppercase h6">Hospital cover</h4>
									<div className="m-auto d-inline-block">
										<ul className="text-left">
											<li>dialysis</li>
											<li>psychiatric</li>
											<li>dialysis</li>
											<li>gastric banding</li>
										</ul>
									</div>

									<h4 className="text-uppercase h6">Extras cover</h4>
									<div className="m-auto d-inline-block">
										<ul className="text-left">
											<li>dialysis</li>
											<li>psychiatric</li>
											<li>dialysis</li>
											<li>gastric banding</li>
										</ul>
									</div>
									
								</div>
								<button type="button" className="btn btn-outline-primary w-100">Choose</button>	
							</div>

							<div className="col-12 col-md-6 col-lg-4 mb-3">
								<div className="wrapper text-center p-2 mb-3">
									<img className="w-100 mb-3" src="http://via.placeholder.com/250x150" alt="" />
									<h1 className="font-weight-bold h3">BUPA</h1>
									<h2 className="font-weight-bold h6">ULTIMATE HEALTH COVER</h2>
									<h3 className="font-weight-bold h6 mb-3">$130</h3>

									<h4 className="text-uppercase h6">Hospital cover</h4>
									<div className="m-auto d-inline-block">
										<ul className="text-left">
											<li>dialysis</li>
											<li>psychiatric</li>
											<li>dialysis</li>
											<li>gastric banding</li>
										</ul>
									</div>

									<h4 className="text-uppercase h6">Extras cover</h4>
									<div className="m-auto d-inline-block">
										<ul className="text-left">
											<li>dialysis</li>
											<li>psychiatric</li>
											<li>dialysis</li>
											<li>gastric banding</li>
										</ul>
									</div>
									
								</div>
								<button type="button" className="btn btn-outline-primary w-100">Choose</button>	
							</div>

							<div className="col-12 col-md-6 col-lg-4 mb-3">
								<div className="wrapper text-center p-2 mb-3">
									<img className="w-100 mb-3" src="http://via.placeholder.com/250x150" alt="" />
									<h1 className="font-weight-bold h3">BUPA</h1>
									<h2 className="font-weight-bold h6">ULTIMATE HEALTH COVER</h2>
									<h3 className="font-weight-bold h6 mb-3">$130</h3>

									<h4 className="text-uppercase h6">Hospital cover</h4>
									<div className="m-auto d-inline-block">
										<ul className="text-left">
											<li>dialysis</li>
											<li>psychiatric</li>
											<li>dialysis</li>
											<li>gastric banding</li>
										</ul>
									</div>

									<h4 className="text-uppercase h6">Extras cover</h4>
									<div className="m-auto d-inline-block">
										<ul className="text-left">
											<li>dialysis</li>
											<li>psychiatric</li>
											<li>dialysis</li>
											<li>gastric banding</li>
										</ul>
									</div>
									
								</div>
								<button type="button" className="btn btn-outline-primary w-100">Choose</button>	
							</div>

							
							
							




						</div>
					</div>


				</div>
			</div>



		</React.Fragment>
    );
  }
}

export default Compare;