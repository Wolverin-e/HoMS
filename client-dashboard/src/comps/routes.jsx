import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Caller from './call';
import Registrar from './registrar';
import RoomService from './room-service';


class Routes extends Component {
	render() { 
		return (
			<Switch>
				<Route exact path="/call" component={Caller} />
				<Route exact path="/roomservice" component={RoomService} />
				<Route exact path="/registrar" component={Registrar} />
			</Switch>
		);
	}
}

export default Routes;