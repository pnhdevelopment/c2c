import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Start from './Start/Start.js';
import Finish from './Finish/Finish.js';
import Compare from './Compare/Compare.js';
import Choose from './Choose/Choose.js';
import Buy from './Buy/Buy.js';

import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';

import ProgressBar from './ProgressBar/ProgressBar.js';

import './App.css';

class App extends Component {
  render() {
    return (
		<Router>
			<div className="Site">
				<Header />
				<ProgressBar />
				<div className="Site-content">
					<Route exact path="/" component={Start} />
					<Route exact path="/start" component={Start} />
					<Route path="/finish" component={Finish} />
					<Route path="/compare" component={Compare} />
					<Route path="/choose" component={Choose} />
					<Route path="/buy" component={Buy} />
				</div>
				<Footer />
			</div>
		</Router>
    );
  }
}

export default App;
