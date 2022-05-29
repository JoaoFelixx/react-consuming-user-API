import { useEffect, useState } from "react";
import { useSelectorUser } from 'Context/UserProvider';
import { MapUserById, UserImage } from 'components';
import { useParams } from "react-router-dom";
import { User } from "interfaces";

export function GetUserById() {
  const { id } = useParams();
  const users = useSelectorUser();
  const [userSelected, setUserSelected] = useState<null | User>(null);

  useEffect(() => {
    try {
      console.log(id)

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
    <div>
      <MapUserById />
      {userSelected && (
        <UserImage src={userSelected.picture.large} alt="user" /> 
      )}
    </div>
  )
}