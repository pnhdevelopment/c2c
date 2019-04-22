import React, { Component, Fragment } from 'react';

import yourSummary from './your-summary.PNG';


class YourSummary extends Component {
	render() {
		return (
			<div className="bg-white p-3">
				<h1 className="h3 text-center">Your summary</h1>
            	{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, maiores.</p> */}
            	<img className="w-100" src={yourSummary} alt=""/>
            </div>
		)
	}
}

export default YourSummary;