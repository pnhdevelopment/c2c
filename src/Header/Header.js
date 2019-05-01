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
				  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span class="navbar-toggler-icon"></span>
				  </button>

				  <div class="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul class="navbar-nav ml-auto">
				      <li class="nav-item active"><a class="nav-link" href="#">HOME</a></li>
				      <li class="nav-item"><a class="nav-link" href="#">REGISTER YOUR INTEREST</a></li>
				      <li class="nav-item"><a class="nav-link" href="#">FAQ</a></li>
				      <li class="nav-item"><a class="nav-link" href="#">ABOUT US</a></li>
				      <li class="nav-item"><a class="nav-link" href="#">ABOUT HEALTH INSURANCE</a></li>
				    </ul>
				  </div>
				</nav>
			</div>

		</header>
    );
  }
}

export default Header;