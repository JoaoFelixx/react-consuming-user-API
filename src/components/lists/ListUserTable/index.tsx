import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Flex } from './style';
import { useSelectorFilteredUsers } from 'Context/FilteredUsersProvider';

export function ListUserTable() {
	const { usersFiltered: users } = useSelectorFilteredUsers();

	const MemorizedTable = React.memo(() => {
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
									<td>
										<Link to={`/user/${user.login.uuid}`} >
											<img src={user.picture.large} alt="user" /> 
										</Link>
									</td>
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
	});

	return (
		<Flex>
			{!users?.length ? <h2>Usuário não encontrado !</h2> : <MemorizedTable /> }
		</Flex>
	)
} 