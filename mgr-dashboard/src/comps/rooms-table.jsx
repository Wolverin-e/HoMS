import { Table } from 'react-bootstrap';

const RoomsTable = props => {
	return (
		<Table bordered hover className="text-center">
			<thead>
				<tr className="rs-table-head">
					<th colSpan={3}>{props.lable}</th>
				</tr>
				<tr>
					<th>Room No</th>
					<th>Type</th>
				</tr>
			</thead>
			<tbody>
				{
					props.rooms.map((room, i) =>
						<tr key={i}>
							<td>{room.room_no}</td>
							<td>{room.type}</td>
						</tr>
					)
				}
			</tbody>
		</Table>
	);
}
 
export default RoomsTable;