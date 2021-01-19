import { Toast } from 'react-bootstrap';

const Notification = props => {

	const onClose = () => {
		props.onClose(props.id);
	}

	return (
		<Toast autohide={props.autohide} onClose={onClose}>
			<Toast.Header>
				<img height="17px" src={props.logo?props.logo:'/favicon.png'} className="rounded mr-2" alt="" />
				<strong className="mr-auto">{props.head}</strong>
				<small>{props.headRight}</small>
			</Toast.Header>
			<Toast.Body >
				{props.body}
			</Toast.Body>
		</Toast>
	);
}
 
export default Notification;