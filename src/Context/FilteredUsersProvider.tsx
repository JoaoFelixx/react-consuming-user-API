import React, { createContext, useContext, useEffect, useState } from 'react';
import { Provider, User } from 'interfaces';
import { useSelectorApp } from './ApplicationProvider';

interface FiltersProperties {
	age?: number;
	name?: string;
	gender?: string;
	nationality?: string;
}

interface Filters {
	setFilters?: React.Dispatch<Partial<FiltersProperties>>,
	usersFiltered?: User[] | null
}

const Context = createContext<Filters>({});

const useSelectorFilteredUsers = () => useContext<Filters>(Context);

function FilteredUsersProvider({ children }: Provider) {
	const { users } = useSelectorApp()
	const [filters, setFilters] = useState<FiltersProperties>({});
	const [usersFiltered, setUsersFiltered] = useState<User[] | null>(null);

	const setFiltersPartially = (preferences: Partial<FiltersProperties>) => setFilters({ ...filters, ...preferences })

	useEffect(() => {
		if (!users)
			return

		const hasValues = Object.values(filters).filter(value => value.length !== 0);

		if (!hasValues.length) {
			setUsersFiltered(users);
			return
		}

		const filteredUsers = users.filter((user) => {
			if (filters.age && user.dob.age !== filters.age)
				return false;

			if (filters.name && user.name.first !== filters.name)
				return false;

			if (filters.gender && user.gender !== filters.gender)
				return false;

			if (filters.nationality && user.location.country !== filters.nationality)
				return false;

			return true;
		});

		setUsersFiltered(filteredUsers);

	}, [filters, users])

	return (
		<Context.Provider value={{ setFilters: setFiltersPartially, usersFiltered }}>
			{children}
		</Context.Provider>
	)
}

export { useSelectorFilteredUsers, FilteredUsersProvider };