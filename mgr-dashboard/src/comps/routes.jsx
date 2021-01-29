import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Caller from './call';
import Customers from './customers';
import RoomService from './room-service';
import Rooms from './rooms';


class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/call" component={Caller} />
				<Route exact path="/roomservice" component={RoomService} />
				<Route exact path="/rooms" component={Rooms} />
				<Route exact path="/customers" component={Customers} />
			</Switch>
		);
	}
}

export default Routes;