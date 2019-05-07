import React, { Component } from 'react';
import './Header.css';

import logo from './logo.png';


class Header extends Component {
  render() {
    return (
		<header className="bg-white mb-5">
			
			<div className="container">
				<nav className="navbar navbar-expand-lg">
				  <a className="navbar-brand" href="https://caretocompare.com.au">
				    <img src={logo} alt="logo" />
				  </a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>

				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav ml-auto">
				      <li className="nav-item active"><a className="nav-link" href="#test">HOME</a></li>
				      <li className="nav-item"><a className="nav-link" href="#test">REGISTER YOUR INTEREST</a></li>
				      <li className="nav-item"><a className="nav-link" href="#test">FAQ</a></li>
				      <li className="nav-item"><a className="nav-link" href="#test">ABOUT US</a></li>
				      <li className="nav-item"><a className="nav-link" href="#test">ABOUT HEALTH INSURANCE</a></li>
				    </ul>
				  </div>
				</nav>
			</div>

		</header>
    );
  }
}

export default Header;