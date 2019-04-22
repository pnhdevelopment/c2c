import React, { Component, Fragment } from 'react';


class YoureSigningUpFor extends Component {
	render() {
		return (
			<div className="bg-white p-3 text-center">
				<h1 className="font-weight-bold h4 mb-4">You're signing up for:</h1>
				<img className="mb-4" src="http://via.placeholder.com/100x100" alt="" />
				<span className="font-weight-normal mb-3 d-block text-center h4">HCF</span>
				<span className="font-weight-normal mb-3 d-block text-center h4">Basic Hospital</span>
				<span className="font-weight-normal mb-3 d-block text-center h4">$500 Excess + Extras</span>
				<span className="font-weight-bold mb-3 d-block text-center h2">$135/month</span>
			</div>
		)
	}
}

export default YoureSigningUpFor;