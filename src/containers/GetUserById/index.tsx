import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapUserById, UserImage } from 'components';
import { useSelectorUser } from 'Context/UserProvider';
import { Flex, Container } from './style'
import { User } from "interfaces";

export function GetUserById() {
  const { id } = useParams();
  const users = useSelectorUser();
  const [userSelected, setUserSelected] = useState<null | User>(null);

  useEffect(() => {
    try {
      if (!Array.isArray(users))
        return

      const hasUser = users.find((user: User) => user.login.uuid === id);

      if (!hasUser)
        return

      setUserSelected(hasUser);

    } catch (err) {
      return
    }
  }, [users, id])

  return (
    <React.Fragment>
      {userSelected && (
        <div>
        <MapUserById 
          lat={Number(userSelected.location.coordinates.latitude)} 
          lng={Number(userSelected.location.coordinates.longitude)} />
          <Flex>
            <Container>
              <UserImage src={userSelected.picture.large} alt="user" />
              <h3>{userSelected.name.first}</h3>
              <span>
                {`${userSelected.name.first} mora em ${userSelected.location.city}, ${userSelected.location.state}`}
              </span>
            </Container>
          </Flex>
        </div>
      )}
    </React.Fragment>
  )
}