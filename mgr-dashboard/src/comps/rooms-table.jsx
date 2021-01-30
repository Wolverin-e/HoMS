import { Button, Table } from 'react-bootstrap';

const RoomsTable = props => {

	const button = props.button;
	const fields = props.fieldsToShow;
	const onClickGenerator = room => {
		const args = button.onClickArgs.map(x => room[x]);
		return () => button.onClick(...args);
	}

	return (
		<Table bordered hover striped className="text-center">
			<thead>
				<tr className="rs-table-head">
					<th colSpan={4}>{props.lable}</th>
				</tr>
				<tr>
					{fields.map((x, i) => 
						<th key={i}>{x.head}</th>
					)}
					{
						button
							?<th>{button.head}</th>
							:true
					}
				</tr>
			</thead>
			<tbody>
				{
					props.rooms.map((room, i) =>
						<tr key={i}>
							{fields.map((x, i) => 
								<td key={i}>{room[x.field]}</td>
							)}
							{
								button
									?<td>
										<Button onClick={onClickGenerator(room)} variant="warning">
											{button.text}
										</Button>
									</td>
									:true
							}
						</tr>
					)
				}
			</tbody>
		</Table>
	);
}
 
export default RoomsTable;