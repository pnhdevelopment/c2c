import React, { Component, Fragment } from 'react';

import ProgressBar from '../ProgressBar/ProgressBar.js';


import './Choose.css';

class App extends Component {
  render() {
    return (
		<div id="choose">

			<ProgressBar />
			
			<div className="container bg-white mb-4 p-3">
			  <div className="row justify-content-around">

			    <div className="col-4 text-center">
			      <img src="http://via.placeholder.com/150x50" alt=""/>
			      <span className="d-block h5 m-0">Basic hospital</span>
			      <span className="d-block h5 m-0">$500 excess and extras</span>
			    </div>
			    <div className="col-4 text-center">
			      <span className="d-block h3 m-0">$135/month</span>
			      <span className="d-block h5 m-0">Co-payment: no</span>
			      <span className="d-block h5 m-0">Extras: 65% back</span>	
			    </div>

			  </div>
			</div>




			<div className="container p-0">
			  <div className="row">

			    <div className="col-12 col-lg-6">
			    	<div className="bg-white py-4">
						<h1 className="h2 text-center font-weight-bold mb-3">Hospital cover basic</h1>
						<ul className="features">
							<li>Lorem ipsum dolor test.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum.</li>
							<li>Lorem ipsum dolor.</li>
						</ul>

						<ul className="features">
							<li>Lorem ipsum dolor test.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum.</li>
							<li>Lorem ipsum dolor.</li>
						</ul>

					</div>
			    </div>
			    <div className="col-12 col-lg-6">
			      <div className="bg-white py-4">
				      <h1 className="h2 text-center font-weight-bold mb-3">Extras cover basic</h1>
				      	<ul className="features">
							<li>Lorem ipsum dolor test.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum.</li>
							<li>Lorem ipsum dolor.</li>
						</ul>
						<ul className="features">
							<li>Lorem ipsum dolor test.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum.</li>
							<li>Lorem ipsum dolor.</li>
						</ul>
			      </div>
			    </div>

			  </div>
			</div>
		    
		</div>  


    );
  }
}

export default App;