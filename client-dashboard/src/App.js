import { Component } from 'react';
import './CustomBS.scss';
import './App.css'

import { BrowserRouter, Redirect } from 'react-router-dom'
import Navbar from './comps/navbar'
import Routes from './comps/routes';

class App extends Component{

	render(){
		return(
			<BrowserRouter>
				<Navbar />
				<Routes />
				<Redirect to="/call" />
			</BrowserRouter>
		)
	}
}

export default App;