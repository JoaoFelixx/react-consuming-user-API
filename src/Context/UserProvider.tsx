import { createContext, useContext, useEffect, useState } from 'react';
import { Provider, RequestUsers, User } from 'interfaces';

const Context = createContext<User[] | null>(null);

const useSelectorUser = () => useContext(Context);

function UserProvider({ children }: Provider) {
  const URL_RANDOM_USERS = 'https://randomuser.me/api/?results=12';
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(URL_RANDOM_USERS, { method: 'GET' });
        const users: RequestUsers = await data.json();

        const usersFormatted = users.results.map(user => {
          user.name.first[0].toUpperCase();
          user.name.last[0].toUpperCase();

          return user
        })

        setUsers(usersFormatted);
      } catch (error) {
        return
      }
    })()
  }, [])

  return (
    <Context.Provider value={users} >
      {children}
    </Context.Provider>
  )
}

export { UserProvider, useSelectorUser };