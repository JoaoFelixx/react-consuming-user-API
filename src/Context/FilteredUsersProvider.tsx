import React, { createContext, useContext, useEffect, useState } from 'react';
import { Provider, User } from 'interfaces';
import { useSelectorUser } from './UserProvider';

interface FiltersProperties {
	age: null | number;
	name: null | string;
	gender: null | string;
	nationality?: null | string;
}

interface Filters {
	setFilters?: React.Dispatch<Partial<FiltersProperties>>,
	usersFiltered?: User[] | null
}

const initialFilters: FiltersProperties = { age: null, gender: null, name: null, nationality: null };
const Context = createContext<Filters>({});

const useSelectorFilteredUsers = () => useContext<Filters>(Context);

function FilteredUsersProvider({ children }: Provider) {
	const users = useSelectorUser()
	const [filters, setFilters] = useState<FiltersProperties>(initialFilters);
	const [usersFiltered, setUsersFiltered] = useState<User[] | null>(null);

	const setFiltersPartially = (preferences: Partial<FiltersProperties>) => setFilters({ ...filters, ...preferences })

	useEffect(() => {
		if (!users)
			return

		if (filters.nationality)
			users.filter((user) => user.location.country === filters.nationality);

		if (filters.age)
			users.filter((user) => user.dob.age === filters.age);

		if (filters.gender)
			users.filter((user) => user.gender === filters.gender);

		if (filters.name)
			users.filter((user) => user.name.first === filters.name);

		if (filters.name)
			users.filter((user) => user.name.first === filters.name);

		setUsersFiltered(users);

	}, [filters, users])

	return (
		<Context.Provider value={{ setFilters: setFiltersPartially, usersFiltered }}>
			{children}
		</Context.Provider>
	)
}

export { useSelectorFilteredUsers, FilteredUsersProvider };