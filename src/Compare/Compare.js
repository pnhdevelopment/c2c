import React, { Component } from 'react';

// import ProgressBar from '../ProgressBar/ProgressBar.js';
import SearchForm from './SearchForm.js';
import SearchResults from './SearchResults.js';

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
// import Books from './Books'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'


import './Compare.css';



const GET_DATA = gql`
      {
  search(
    policyType: HOSPITAL
    categoryOfCover: SINGLES
    state: VIC
    hospitalInclusions: [
      HEART_SUGERY
      JOINT_REPLACEMENTS
    ]
    maxMonthlyPremium: 150
    page: 0
    pageSize: 3
  ) {
    policies {
      id
      fundName
      policyName
      policyType
      monthlyPremium
      ambulanceCover
      hospitalComponent {
        coPayments
        excess {
          perHospitalVisit
          maxPerPerson
          maxPerAnnum
        }
        inclusions {
          category
          covered
        }
      }
    }
    meta {
      page
      pageSize
      totalPages
      totalRecords
    }
  }
}`;


class Compare extends Component {

	constructor() {
    super();
    this.state = {
        results: null
    };
  }


	render() {
		return (
  <Query query={GET_DATA} >
    {({ loading, error, data }) => {
      if (loading) return <div className="loader"></div>
      if (error) return <p>Something went wrong...</p>

      return <div className="container" id="compare">
			<div className="row">
				<div className="col-12 col-lg-3">
					<SearchForm data={data} />
				</div>

				<div className="col-12 col-lg-9 p-3 p-lg-0">
					<SearchResults data={data} />
				</div>					

			</div>
		</div>

    }}
  </Query>
		);
	}


}

export default Compare;