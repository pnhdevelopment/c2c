import React, { Component, Fragment } from 'react';
import './Finish.css';
import bg from './bg.svg';

import ProgressBar from '../ProgressBar/ProgressBar.js';



class ThankYou extends Component {
  render() {
    return (
      <div id="finish">

        <ProgressBar />

        <div className="container-fluid wrapper">
          <div className="row">
            <div className="col-8 m-auto text-center">
              <h1>Thank you for using Care to Compare</h1>
              <p>You will receive an email from us within 3 business days with full details of your insurance policy.</p>
              <p>Because of you, our charity partners are one step closer to relieving the burden of disease.</p>
              <a href="#">Return to home</a>  

            </div>
          </div> 
        </div>

      </div>

    );
  }
}

export default ThankYou;