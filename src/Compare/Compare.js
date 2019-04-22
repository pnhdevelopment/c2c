import React, { Component, Fragment } from 'react';

import ProgressBar from '../ProgressBar/ProgressBar.js';
import SearchForm from './SearchForm.js';
import SearchResults from './SearchResults.js';


import './Compare.css';

class Compare extends Component {
  render() {
    return (
		<React.Fragment>
			{/* <ProgressBar /> */}
			<div className="container" id="compare">
				<div className="row">

					<div className="col-12 col-lg-3">
						<SearchForm />
					</div>

					<div className="col-12 col-lg-9 bg-white py-3">	
						<SearchResults />
					</div>					
						
				</div>
			</div>
		</React.Fragment>
    );
  }
}

export default Compare;