import React, { Component } from 'react';
import Notification from './notification';

import { connect } from 'react-redux';
import mapStateToProps from '../utils/mapStateToProps';
import { removeNotification } from "../actions/notification-actions";


class Notifier extends Component {

	render() { 
		return (
			<div className="notification-row">
				<div className="notification-col col col-sm-3">

					{this.props.notifications.map((noti, i) => {
						return <Notification key={i} id={i} headRight="now" {...noti} onClose={this.props.removeNotification}/>
					})}

				</div>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		removeNotification: id => dispatch(removeNotification(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifier);