import React from 'react';
import { Table } from './style';
import { useSelectorUser } from 'Context/UserProvider';

export function ListUserTable() {
	const users = useSelectorUser();

	return (
		<Table>
			<tbody>
			  <tr>
				  <th>Foto</th>
				  <th>Nome</th>
				  <th>Idade</th>
				  <th>Pais</th>
				  <th>Genero</th>
				</tr>
				{React.Children.toArray(
					users && users.map((user) => {
						return (
							<tr>
								<td><img src={user.picture.large} alt="user" /> </td>
								<td>{`${user.name.first} ${user.name.last}`}</td>
								<td>{user.dob.age}</td>
								<td>{user.location.country}</td>
								<td>{user.gender}</td>
							</tr>
						)
					})
				)}
			</tbody>
		</Table>
	)
} 