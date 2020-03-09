import React from 'react';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import ExoUn from './components/ExoUn'
import ExoDeux from './components/ExoDeux';
import ExoTrois from './components/ExoTrois';
import ExoQuatre from './components/ExoQuatre';
import ExoCinq from './components/ExoCinq';
import ExoSix from './components/ExoSix';
import ExoSept from './components/ExoSept';

const App = () => {
	return (
		<Router>
			<div className='container'>
				<h1 className='text-center bg-primary p-4'>React Recap</h1>

				<div className='d-flex justify-content-around my-3'>
					<Link to='/exo1'>Exo1</Link>
					<Link to='/exo2'>Exo2</Link>
					<Link to='/exo3'>Exo3</Link>
					<Link to='/exo4'>Exo4</Link>
					<Link to='/exo5'>Exo5</Link>
					<Link to='/exo6'>Exo6</Link>
					<Link to='/exo7'>Exo7</Link>
				</div>

				<Switch>
					<Route exact path='/exo1'><ExoUn /></Route>
					<Route path='/exo2'><ExoDeux /></Route>
					<Route path='/exo3'><ExoTrois /></Route>
					<Route path='/exo4'><ExoQuatre /></Route>
					<Route path='/exo5'><ExoCinq /></Route>
					<Route path='/exo6'><ExoSix /></Route>
					<Route path='/exo7'><ExoSept /></Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
