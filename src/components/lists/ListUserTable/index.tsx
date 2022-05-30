import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Flex } from './style';
import { useSelectorFilteredUsers } from 'Context/FilteredUsersProvider';
import { localizedStrings } from 'constants/localizedStrings';

export function ListUserTable() {
	const { usersFiltered: users } = useSelectorFilteredUsers();

	const MemorizedTable = React.memo(() => {
		return (
			<Table>
				<tbody>
					<tr>
						<th>{localizedStrings.photo}</th>
						<th>{localizedStrings.name}</th>
						<th>{localizedStrings.age}</th>
						<th>{localizedStrings.country}</th>
						<th>{localizedStrings.gender}</th>
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
			{!users?.length ? <h2>{localizedStrings.userNotAFound}</h2> : <MemorizedTable />}
		</Flex>
	)
} 