import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Card } from './style';
import { UserImage } from '../../images';
import { useSelectorFilteredUsers } from 'Context/FilteredUsersProvider';

export function ListUserCard() {
	const { usersFiltered: users } = useSelectorFilteredUsers(); 
		
	return (
		<Flex>
			{!users?.length ? <h2> Usuário não encontrado !</h2> : React.Children.toArray(
				users.map((user) => {
					return (
						<Card>
							<Link style={{ textDecoration: 'none', color: '#000' }} to={`/user/${user.login.uuid}`}>
								<UserImage src={user.picture.large} alt="user"/>
								<h3>{user.name.first}</h3>
							</Link>
						</Card>
					)
				})
			)}
		</Flex>
	)
}