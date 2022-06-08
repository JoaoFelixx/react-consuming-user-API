import React, { createContext, useContext, useEffect, useState } from 'react';
import { Provider, RequestUsers, User } from 'interfaces';
import { environments } from 'constants/environments';

interface Application {
  users?: User[],
  formatList: string;
  isLoading: boolean;
  setFormatList?: React.Dispatch<string>;
}

const Context = createContext<Application>({ formatList: 'Card', isLoading: true });

const useSelectorApp = () => useContext(Context);

function ApplicationProvider({ children }: Provider) {
  const [users, setUsers] = useState<User[] | undefined>(undefined);
  const [formatList, setFormatList] = useState<string>('Card');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(environments.URL_RANDOM_USERS, { method: 'GET' });
        const users: RequestUsers = await data.json();

        const usersFormatted = users.results.map(user => {
          user.name.first[0].toUpperCase();
          user.name.last[0].toUpperCase();

          return user
        })

        setUsers(usersFormatted);
      } catch (error) {
        return
      } finally {
        setIsLoading(false)
      } 
    })()
  }, [])

  return (
    <Context.Provider value={{ users, formatList, setFormatList, isLoading }} >
      {children}
    </Context.Provider>
  )
}

export { ApplicationProvider, useSelectorApp };