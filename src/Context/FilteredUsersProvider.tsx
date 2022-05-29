import { createContext, useContext } from 'react';
import { Provider, User } from 'interfaces';

interface Filters {
	nacionality: null | string;
	name: null | string;
	gender: null | string;
	age: null | string;
	users: User[] | null;
}

const defaultFilters: Filters = {
	age: null,
	name: null,
	gender: null,
	nacionality: null,
} 

const Context = createContext<Filters>(defaultFilters);

const useSelectorFilteredUsers = useContext(Context);

function FilteredUsersProvider({ children }: Provider) {
	// Fazer um super filtro que ativa por chamada de setStation

	return (
		<Context.Provider value={defaultFilters}>
			{children}
		</Context.Provider>
	)
}

export { useSelectorFilteredUsers, FilteredUsersProvider };