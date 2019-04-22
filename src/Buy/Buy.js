import React, { Component, Fragment } from 'react';
import './Buy.css';

import ProgressBar from '../ProgressBar/ProgressBar.js';



class ThankYou extends Component {
  render() {
    return (
      <div id="buy">

        <ProgressBar />

        <div className="container">
          <div className="row">

            <div className="col-12 col-lg-2 mb-3">
              <div className="bg-white p-3">
                <h1 className="h3 text-center">Your summary</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, maiores.</p>
              </div>
            </div>


            <div className="col-12 col-lg-7 mb-3">
              <div className="bg-white p-3">
                <h1>About You</h1>
                <form>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>


            <div className="col-12 col-lg-3 mb-3">
              <div className="bg-white p-3 text-center">
                <h1 className="font-weight-bold h5">You're signing up for:</h1>
                <img className="mb-3" src="http://via.placeholder.com/150x50" alt=""/>
                <span className="font-weight-bold mb-2 d-block text-center">HCF</span>
                <span className="font-weight-bold mb-2 d-block text-center">Basic Hospital</span>
                <span className="font-weight-bold mb-2 d-block text-center">$500 Excess + Extras</span>
                <span className="font-weight-bold mb-2 d-block text-center h3">$135/month</span>
              </div>
            </div>


          </div> 
        </div>
      </div>

    );
  }
}

export default ThankYou;