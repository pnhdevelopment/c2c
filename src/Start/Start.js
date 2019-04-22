import React, { Component } from 'react';
import './Start.css';

import ProgressBar from '../ProgressBar/ProgressBar.js';

class Start extends Component {

  handleClick(event, id) {

    // Get reference to the container element
    let elems = document.querySelectorAll(id + " button");

    // Within the container element, remove "selected" class
    // from all buttons
    [].forEach.call(elems, function(el) {
        el.classList.remove("selected");
    });

    //add the 'selected' class to the clicked button
    event.target.classList.add('selected');


    let nextSibling = document.querySelector(id).nextSibling;
    console.log(nextSibling);
    nextSibling.classList.remove("d-none");
    nextSibling.scrollIntoView({ behavior: 'smooth' });
    nextSibling.classList.remove("hidden");

  }


	render() {
		return (

	<div id="start">
        
        {/* <ProgressBar /> */}
        
        {/* Titles */}
        <div className="container">
          <div className="row">
            <div className="col-8 m-auto text-center">
              <h1 className="h3 mb-4">We're here to help you find health cover that's right for you.</h1>
              <h2 className="h3 mb-4"><strong>What's important to you?</strong></h2>
            </div>
          </div>
        </div> 

        
        {/* I need health insurance for */}
        <div className="container mb-4 p-3" id="insurance-for">
          <div className="row">
            <div className="col-8 m-auto text-center bg-white">

              <h3 className="mb-3">I need health insurance for...</h3>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100" onClick={(event) => this.handleClick(event, "#insurance-for")}>Me</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100" onClick={(event) => this.handleClick(event, "#insurance-for")}>Me and my partner</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100" onClick={(event) => this.handleClick(event, "#insurance-for")}>My family</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100" onClick={(event) => this.handleClick(event, "#insurance-for")}>Me and my kids</button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* I live in */}
        <div className="container mb-4 p-3 hidden d-none" id="i-live-in">
          <div className="row">
            <div className="col-8 m-auto text-center bg-white">
              <h3 className="mb-3">I live in...</h3>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100" onClick={(event) => this.handleClick(event, "#i-live-in")}>ACT</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100" onClick={(event) => this.handleClick(event, "#i-live-in")}>NSW</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100" onClick={(event) => this.handleClick(event, "#i-live-in")}>NT</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100" onClick={(event) => this.handleClick(event, "#i-live-in")}>QLD</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100" onClick={(event) => this.handleClick(event, "#i-live-in")}>SA</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100" onClick={(event) => this.handleClick(event, "#i-live-in")}>TAS</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100" onClick={(event) => this.handleClick(event, "#i-live-in")}>VIC</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100" onClick={(event) => this.handleClick(event, "#i-live-in")}>WA</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* I need cover for */}
        <div className="container mb-4 p-3 hidden d-none" id="cover-for">
          <div className="row">
            <div className="col-8 m-auto text-center bg-white">
              <h3 className="mb-3">I need cover for:</h3>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100" onClick={(event) => this.handleClick(event, "#cover-for")}>Wellness</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100" onClick={(event) => this.handleClick(event, "#cover-for")}>Pregnancy</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100" onClick={(event) => this.handleClick(event, "#cover-for")}>For my specific body part</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100" onClick={(event) => this.handleClick(event, "#cover-for")}>Health equipment</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100" onClick={(event) => this.handleClick(event, "#cover-for")}>Investigation</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100" onClick={(event) => this.handleClick(event, "#cover-for")}>Surgeries & Procedures</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100" onClick={(event) => this.handleClick(event, "#cover-for")}>Support & Recovery</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100" onClick={(event) => this.handleClick(event, "#cover-for")}>Payment/Cover Inclusions</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Let's compare your cover */}
        <div className="container lets-compare mb-5 hidden d-none">
          <div className="row">
            <div className="col-8 col-lg-5 m-auto text-center">
              <button type="button" className="btn btn-outline-primary w-100">
                <strong>Let's compare your cover</strong>
              </button>
            </div>
          </div>
        </div>


      </div>

		)
	}
}


export default Start;