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
						return <Notification key={i} autohide={noti.auto} id={i} head={noti.head} headRight="now" body={noti.body} onClose={this.props.removeNotification}/>
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