import { Button, Table } from 'react-bootstrap';

const ServiceRequestTable = props => {

	return (
		<Table bordered striped hover className="text-center">
			<thead>
				<tr className="rs-table-head">
					<th colSpan={4}>{props.lable}</th>
				</tr>
				<tr>
					<th>#</th>
					<th>Room</th>
					<th>Type</th>
					{props.button?<th>{props.button.head}</th>:true}
				</tr>
			</thead>
			<tbody>
				{
					props.reqs.map((req, i) => 
						<tr key={i}>
							<td>{req.id}</td>
							<td>{req.room_no}</td>
							<td>{req.type}</td>
							{props.button?<td>
								<Button variant="warning" onClick={() => props.button.onClick(req.id)}>
									{props.button.text}
								</Button>
							</td>:true}
						</tr>
					)
				}
			</tbody>
		</Table>
	);

}

export default ServiceRequestTable;