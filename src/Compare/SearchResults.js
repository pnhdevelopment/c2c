import React, { Component, Fragment } from 'react';

class SearchResults extends Component {
  render() {
    return (
    	<div className="bg-white mb-3 p-3">
		<div className="row">

			{/* Search info */}
			<div className="container container mb-3">
				<div className="row">

					<div className="col-12 col-lg-5">
						Premium: 
						<button type="button" className="btn btn-outline-primary ml-1 no-radius px-3 py-1 active">Weekly</button>
						<button type="button" className="btn btn-outline-primary ml-1 no-radius px-3 py-1">Monthly</button>
						<input type="range" className="custom-range mt-3" min="0" max="5" />
					</div>

					<div className="col-12 col-lg-7 ml-auto text-left text-lg-right">
						<span className="text-right text-muted">
							<span className="text-dark">3</span> of 10 results
						</span>
						<div className="form-group row mt-2">
							<label for="sorted-by" className="col-3 col-form-label text-left text-lg-right">Sorted by:</label>
							<div className="col-9">
								<select className="form-control" id="sorted-by">
									<option>Lowest - Highest price</option>
									<option>Highest Lowest price</option>
								</select>
							</div>
						</div>
					</div>
					

				</div>
			</div>
			

			<div className="col-12 col-md-6 col-lg-4 mb-3">
				<div className="item-wrapper text-center p-2 mb-3">
					<img className="w-100 mb-3" src="http://via.placeholder.com/250x150" alt="" />
					<h1 className="font-weight-bold h3">BUPA</h1>
					<h2 className="font-weight-bold h6">ULTIMATE HEALTH COVER</h2>
					<h3 className="font-weight-bold h6 mb-3">$130</h3>

					<h4 className="text-uppercase h6">Hospital cover</h4>
					<div className="m-auto d-inline-block">
						<ul className="covers text-left">
							<li>dialysis</li>
							<li>psychiatric</li>
							<li>dialysis</li>
							<li>gastric banding</li>
						</ul>
					</div>

					<h4 className="text-uppercase h6">Extras cover</h4>
					<div className="m-auto d-inline-block">
						<ul className="covers text-left">
							<li>dialysis</li>
							<li>psychiatric</li>
							<li>dialysis</li>
							<li>gastric banding</li>
						</ul>
					</div>
					
				</div>
				<button type="button" className="btn btn-outline-primary w-100 no-radius">Choose</button>	
			</div>

			<div className="col-12 col-md-6 col-lg-4 mb-3">
				<div className="item-wrapper text-center p-2 mb-3">
					<img className="w-100 mb-3" src="http://via.placeholder.com/250x150" alt="" />
					<h1 className="font-weight-bold h3">BUPA</h1>
					<h2 className="font-weight-bold h6">ULTIMATE HEALTH COVER</h2>
					<h3 className="font-weight-bold h6 mb-3">$130</h3>

					<h4 className="text-uppercase h6">Hospital cover</h4>
					<div className="m-auto d-inline-block">
						<ul className="covers text-left">
							<li>dialysis</li>
							<li>psychiatric</li>
							<li>dialysis</li>
							<li>gastric banding</li>
						</ul>
					</div>

					<h4 className="text-uppercase h6">Extras cover</h4>
					<div className="m-auto d-inline-block">
						<ul className="covers text-left">
							<li>dialysis</li>
							<li>psychiatric</li>
							<li>dialysis</li>
							<li>gastric banding</li>
						</ul>
					</div>
					
				</div>
				<button type="button" className="btn btn-outline-primary w-100 no-radius">Choose</button>	
			</div>

			<div className="col-12 col-md-6 col-lg-4 mb-3">
				<div className="item-wrapper text-center p-2 mb-3">
					<img className="w-100 mb-3" src="http://via.placeholder.com/250x150" alt="" />
					<h1 className="font-weight-bold h3">BUPA</h1>
					<h2 className="font-weight-bold h6">ULTIMATE HEALTH COVER</h2>
					<h3 className="font-weight-bold h6 mb-3">$130</h3>

					<h4 className="text-uppercase h6">Hospital cover</h4>
					<div className="m-auto d-inline-block">
						<ul className="covers text-left">
							<li>dialysis</li>
							<li>psychiatric</li>
							<li>dialysis</li>
							<li>gastric banding</li>
						</ul>
					</div>

					<h4 className="text-uppercase h6">Extras cover</h4>
					<div className="m-auto d-inline-block">
						<ul className="covers text-left">
							<li>dialysis</li>
							<li>psychiatric</li>
							<li>dialysis</li>
							<li>gastric banding</li>
						</ul>
					</div>
					
				</div>
				<button type="button" className="btn btn-outline-primary w-100 no-radius">Choose</button>	
			</div>


			<nav aria-label="Page navigation" className="m-auto py-4">
				<ul className="pagination">
					<li className="page-item"><a className="page-link" href="#">Previous</a></li>
					<li className="page-item"><a className="page-link" href="#">1</a></li>
					<li className="page-item"><a className="page-link" href="#">2</a></li>
					<li className="page-item"><a className="page-link" href="#">3</a></li>
					<li className="page-item"><a className="page-link" href="#">Next</a></li>
				</ul>
			</nav>


		</div>
		</div>
    )
  }
}

export default SearchResults;
