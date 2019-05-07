import React, { Component } from 'react';
import './Buy.css';

// import ProgressBar from '../ProgressBar/ProgressBar.js';

// import yourSigningUpFor from './your-signing-up-for.PNG';
import MultiStepForm from './MultiStepForm.js';

import YourSummary from './YourSummary.js';
import YoureSigningUpFor from './YoureSigningUpFor.js';


// <ProgressBar />


class Buy extends Component {
  render() {
    return (
      <div id="buy">

        <div className="container">
          <div className="row">

            <div className="col-12 col-lg-2 mb-3">
              <YourSummary />          
            </div>


            <div className="col-12 col-lg-7 mb-3 bg-white">
              <MultiStepForm />
            </div>


            <div className="col-12 col-lg-3 mb-3">
              <YoureSigningUpFor />
            </div>


          </div> 
        </div>
      </div>

    );
  }
}

export default Buy;