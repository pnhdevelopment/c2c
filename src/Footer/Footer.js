import React, { Component } from 'react';
import './Footer.css';



class Footer extends Component {
  render() {
    return (
		<footer className="bg-white mt-5 py-4">			
			<div className="container">

				<div className="row">
					<div className="col-12 col-md-4">
						<a href="#">Our story</a><br/>
						<a href="#">Our charity partners</a><br/>
						<a href="#">Our impact</a><br/>
						<a href="#">Our health insurance partners</a><br/>
						<a href="#">Our team</a><br/>
					</div>
					<div className="col-12 col-md-4">
						<a href="#">How Care to Compare works</a><br/>
						<a href="#">Who we compare</a><br/>
						<a href="#">Our website Terms & Conditions</a><br/>
						<a href="#">Our Privacy Policy</a><br/>
					</div>
					<div className="col-12 col-md-4">
						<a href="#">Latest news</a><br/>
						<a href="#">Blog</a><br/>
						<a href="#">Media</a><br/>
						<a href="#">Contact us</a><br/>
						<a href="#">Sitemap</a><br/>
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