import React, { Component } from 'react';
import './ProgressBar.css';


class ProgressBar extends Component {
	render() {
		return (
			<div className="container-fluid">
				<br /><br />
				<ul className="list-unstyled multi-steps">
				  <li>Start</li>
				  <li>Compare</li>
				  <li className="is-active">Choose</li>
				  <li>Buy</li>
				  <li>Finish</li>
				</ul>
			</div>
		)
	}
}


export default ProgressBar;