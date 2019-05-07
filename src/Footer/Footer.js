import React, { Component } from 'react';
import './Footer.css';



class Footer extends Component {
  render() {
    return (
		<footer className="bg-white mt-5 py-4">			
			<div className="container">

				<div className="row">
					<div className="col-12 col-md-4">
						<a href="#test">Our story</a><br/>
						<a href="#test">Our charity partners</a><br/>
						<a href="#test">Our impact</a><br/>
						<a href="#test">Our health insurance partners</a><br/>
						<a href="#test">Our team</a><br/>
					</div>
					<div className="col-12 col-md-4">
						<a href="#test">How Care to Compare works</a><br/>
						<a href="#test">Who we compare</a><br/>
						<a href="#test">Our website Terms & Conditions</a><br/>
						<a href="#test">Our Privacy Policy</a><br/>
					</div>
					<div className="col-12 col-md-4">
						<a href="#test">Latest news</a><br/>
						<a href="#test">Blog</a><br/>
						<a href="#test">Media</a><br/>
						<a href="#test">Contact us</a><br/>
						<a href="#test">Sitemap</a><br/>
					</div>
				</div>
				
				<div className="row text-center mt-3">
					<div className="col-12">
						<small>Copyright © 2019 Care To Compare Limited</small><br/>
						<small>Care To Compare Limited is a registered charity with the Australian Charities and Not-for-profits commission ABN 35 627 078 460</small>
					</div>
				</div>

			</div>
		</footer>
    );
  }
}

export default Footer;