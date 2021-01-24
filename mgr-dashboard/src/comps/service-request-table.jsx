import { Table } from 'react-bootstrap';

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
				</tr>
			</thead>
			<tbody>
				{
					props.reqs.map((req, i) => 
						<tr key={i}>
							<td>{req.id}</td>
							<td>{req.room_no}</td>
							<td>{req.type}</td>
						</tr>
					)
				}
			</tbody>
		</Table>
	);

}

export default ServiceRequestTable;