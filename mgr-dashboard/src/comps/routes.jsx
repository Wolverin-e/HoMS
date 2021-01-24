import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Caller from './call';
import RoomService from './room-service';


class Routes extends Component {
	render() { 
		return (
			<Switch>
				<Route exact path="/call" component={Caller} />
				<Route exact path="/roomservice" component={RoomService} />
			</Switch>
		);
	}
}

export default Routes;