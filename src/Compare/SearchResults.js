import React, { Component } from 'react';

class SearchResults extends Component {
  render() {
    return (
    	<div className="bg-white mb-3 p-3">
		<div className="row">

			{/* <div className="container" id="compare">
					<div className="row">
						<div className="col-12 col-lg-3">
							<SearchForm />
						</div>

						<div className="col-12 col-lg-9 p-3 p-lg-0">
							<SearchResults />
						</div>					

					</div>
				</div> */}

			{/* Search info */}
			{/* <div className="container container mb-3">
				<div className="row">

					<div className="col-12 col-lg-5">
						<span className="mr-2">Premium:</span>
						<div className="btn-group btn-group-toggle" data-toggle="buttons">
							<label className="btn btn-outline-primary mr-2 no-radius active">
								<input type="radio" name="options" id="option1" autoComplete="off" defaultChecked />Weekly
							</label>
							<label className="btn btn-outline-primary no-radius">
								<input type="radio" name="options" id="option2" autoComplete="off" />Monthly
							</label>
						</div>

						<input type="range" className="custom-range mt-3" min="0" max="5" />
					</div>

					<div className="col-12 col-lg-7 ml-auto text-left text-lg-right">
						<span className="text-right text-muted">
							<span className="text-dark">3</span> of 10 results
						</span>
						<div className="htmlForm-group row mt-2">
							<label htmlFor="sorted-by" className="col-3 col-htmlForm-label text-left text-lg-right">Sorted by:</label>
							<div className="col-9">
								<select className="htmlForm-control" id="sorted-by">
									<option>Lowest - Highest price</option>
									<option>Highest Lowest price</option>
								</select>
							</div>
						</div>
					</div>
					

				</div>
			</div> */}
			



			{this.props.data.search.policies.map(policy =>
			<div className="col-12 col-md-6 col-lg-4 mb-3" key={policy.id}>
				<div className="item-wrapper text-center p-2 mb-3">
					<img className="w-100 mb-3" src="http://via.placeholder.com/250x150" alt="" />
					<h1 className="font-weight-bold h3">{policy.policyName}</h1>
					<h2 className="font-weight-bold h6 text-uppercase">{policy.fundName}</h2>
					<h3 className="font-weight-bold h6 mb-3">${policy.monthlyPremium}</h3>

					<h4 className="text-uppercase h6">Hospital cover</h4>
					<div className="m-auto d-inline-block">
						<ul className="covers text-left">
							{ policy.hospitalComponent.inclusions.map(inclusion => {
				                if(inclusion.covered){
				                  return <li className="text-lowercase" key={inclusion.category}>{inclusion.category}</li>
				                }
				              })
				            }
						</ul>
					</div>

					<h4 className="text-uppercase h6">Extras cover</h4>
					<div className="m-auto d-inline-block">
						<ul className="covers text-left">
							{ policy.hospitalComponent.inclusions.map(inclusion => {
				                if(inclusion.covered){
				                  return <li className="text-lowercase" key={inclusion.category}>{inclusion.category}</li>
				                }
				              })
				            }
						</ul>
					</div>
					
				</div>
				<button type="button" className="btn btn-outline-primary w-100 no-radius">Choose</button>	
			</div>
			)}

			

			{/*
			<nav aria-label="Page navigation" className="m-auto py-4">
				<ul className="pagination">
					<li className="page-item"><a className="page-link" href="#test">Previous</a></li>
					<li className="page-item"><a className="page-link" href="#test">1</a></li>
					<li className="page-item"><a className="page-link" href="#test">2</a></li>
					<li className="page-item"><a className="page-link" href="#test">3</a></li>
					<li className="page-item"><a className="page-link" href="#test">Next</a></li>
				</ul>
			</nav>
			*/}

		</div>
		</div>
    )
  }
}

export default SearchResults;
