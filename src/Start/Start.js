import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './Start.css';

// import ProgressBar from '../ProgressBar/ProgressBar.js';


class Start extends Component {


  handleClick(event, id) {

    /* Get reference to the container element */
    let elems = document.querySelectorAll(id + " button");

    /* Within the container element, remove
    "active" class from all buttons */
    [].forEach.call(elems, function(el) {
        el.classList.remove("active");
    });

    /* add the 'active' class to the clicked button */
    event.target.classList.add('active');

    /* tagret the next element sibling, remove d-none
    class, scroll to element, then change its opacity to 1 */
    let nextSibling = document.querySelector(id).nextSibling;
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
            <div className="col-12 col-lg-8 m-auto text-center">
              <h1 className="h3 mb-4">We're here to help you find health cover that's right for you.</h1>
              <h2 className="h3 mb-4 font-weight-bold">What's important to you?</h2>
            </div>
          </div>
        </div> 

        
        {/* I need health insurance for */}
        <div className="container mb-4" id="insurance-for">
          <div className="row">
            <div className="col-12 col-lg-8 m-auto text-center bg-white p-3">

              <h3 className="mb-3">I need health insurance for...</h3>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100 h-100" onClick={(event) => this.handleClick(event, "#insurance-for")}>Me</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100 h-100" onClick={(event) => this.handleClick(event, "#insurance-for")}>Me and my partner</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100 h-100" onClick={(event) => this.handleClick(event, "#insurance-for")}>My family</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100 h-100" onClick={(event) => this.handleClick(event, "#insurance-for")}>Me and my kids</button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* I live in */}
        <div className="container mb-4 hidden d-none" id="i-live-in">
          <div className="row">
            <div className="col-12 col-lg-8 m-auto text-center bg-white p-3">
              <h3 className="mb-3">I live in...</h3>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100 h-100" onClick={(event) => this.handleClick(event, "#i-live-in")}>ACT</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100 h-100" onClick={(event) => this.handleClick(event, "#i-live-in")}>NSW</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100 h-100" onClick={(event) => this.handleClick(event, "#i-live-in")}>NT</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100 h-100" onClick={(event) => this.handleClick(event, "#i-live-in")}>QLD</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100 h-100" onClick={(event) => this.handleClick(event, "#i-live-in")}>SA</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100 h-100" onClick={(event) => this.handleClick(event, "#i-live-in")}>TAS</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100 h-100" onClick={(event) => this.handleClick(event, "#i-live-in")}>VIC</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100 h-100" onClick={(event) => this.handleClick(event, "#i-live-in")}>WA</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* I need cover for */}
        <div className="container mb-4 hidden d-none" id="cover-for">
          <div className="row">
            <div className="col-12 col-lg-8 m-auto text-center bg-white p-3">
              <h3 className="mb-3">I need cover for:</h3>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100 h-100" onClick={(event) => this.handleClick(event, "#cover-for")}>Wellness</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100 h-100" onClick={(event) => this.handleClick(event, "#cover-for")}>Pregnancy</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100 h-100" onClick={(event) => this.handleClick(event, "#cover-for")}>For my specific body part</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100 h-100" onClick={(event) => this.handleClick(event, "#cover-for")}>Health equipment</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100 h-100" onClick={(event) => this.handleClick(event, "#cover-for")}>Investigation</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100 h-100" onClick={(event) => this.handleClick(event, "#cover-for")}>Surgeries & Procedures</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100 h-100" onClick={(event) => this.handleClick(event, "#cover-for")}>Support & Recovery</button>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <button type="button" className="btn btn-outline-primary w-100 h-100" onClick={(event) => this.handleClick(event, "#cover-for")}>Payment/Cover Inclusions</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Let's compare your cover */}
        <div className="container mb-5 hidden d-none" id="lets-compare">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 m-auto text-center p-0">
              <Link to="/compare">
                <button type="button" className="btn btn-outline-primary w-100 font-weight-bold no-radius">
                  Let's compare your cover
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>


		)
	}
}


export default Start;
