import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './comps/navbar'
import { BrowserRouter, Redirect } from 'react-router-dom'
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