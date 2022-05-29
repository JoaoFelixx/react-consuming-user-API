import React from "react";
import { useSelectorUser } from 'Context/UserProvider';
import { Link } from "react-router-dom";

export function Home() {
  const users = useSelectorUser();

  return (
    <React.Fragment>
      {React.Children.toArray(
        users?.map(user => {
          return (
            <Link to={`/user/${user.login.uuid}`}>
              <p>{`${user.name.first} ${user.name.last}`}</p>
            </Link>
          )
        })
      )}
    </React.Fragment>
  )
}