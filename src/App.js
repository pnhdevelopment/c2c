import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Start from './Start/Start.js';
import Finish from './Finish/Finish.js';
import Compare from './Compare/Compare.js';
import Choose from './Choose/Choose.js';
import Buy from './Buy/Buy.js';


import './App.css';

class App extends Component {
  render() {
    return (
		<Router>
			<Route exact path="/" component={Start} />
			<Route exact path="/start" component={Start} />
			<Route path="/finish" component={Finish} />
			<Route path="/compare" component={Compare} />
			<Route path="/choose" component={Choose} />
			<Route path="/buy" component={Buy} />
		</Router>
    );
  }
}

export default App;
