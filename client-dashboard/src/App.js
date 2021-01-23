import { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import './CustomBS.scss';
import './App.css'

import { BrowserRouter, Redirect } from 'react-router-dom'
import Navbar from './comps/navbar'
import Routes from './comps/routes';
import Notifier from './comps/notifier';

class App extends Component{

	render(){
		return(
			<Provider store={store}>
				<BrowserRouter>
					<Navbar />
					<Notifier />
					<Routes />
					<Redirect to="/call" />
				</BrowserRouter>
			</Provider>
		)
	}
}

export default App;