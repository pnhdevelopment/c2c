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


const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});


class Compare extends Component {

	constructor() {
    super();
    this.state = {
        results: null
    };
  }

	render() {
		return (

  <ApolloProvider client={client}>
      
  <Query
    query={gql`
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
}

    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
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


  </ApolloProvider>

		);
	}


}

export default Compare;