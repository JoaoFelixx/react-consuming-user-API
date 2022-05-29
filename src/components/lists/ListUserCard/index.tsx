import React from 'react';
import { Flex, Card } from './style';
import { UserImage } from '../../images';
import { useSelectorUser } from 'Context/UserProvider';

export function ListUserCard() {
	const users = useSelectorUser(); 

	return (
		<Flex>
			{React.Children.toArray(
				users && users.map((user) => {
					return (
						<Card>
							<UserImage src={user.picture.large} alt="user"/>
							<h3>{user.name.first}</h3>
						</Card>
					)
				})
			)}
		</Flex>
	)
}