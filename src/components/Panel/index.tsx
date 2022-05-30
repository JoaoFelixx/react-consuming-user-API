import React, { useState, useEffect } from 'react';
import { SwitchButton } from '../buttons';
import { 
  Card, 
  SearchBar, 
  SearchButton 
} from './style';
import { useSelectorUser } from 'Context/UserProvider';
import { useSelectorFilteredUsers } from 'Context/FilteredUsersProvider';

export function Panel() {
  const users = useSelectorUser();
  const { setFilters } = useSelectorFilteredUsers();
  const [name, setName] = useState<string>('');
  const [countries, setCountries] = useState<string[]>(['']);

  const filterByName = () => {
    if (name.length === 0)
      setFilters?.({ name: undefined });

    setFilters?.({ name });      
  } 

  const filterByGender = (gender: string) => {
    if (gender.length === 0)
      setFilters?.({ gender: undefined });

    setFilters?.({ gender });  
  }

  const filterByNationality = (nationality: string) => {
    if (nationality.length === 0)
      setFilters?.({ nationality: undefined });

    setFilters?.({ nationality });  
  }

  useEffect(() => {
    if (!users)
      return

    const allCountries: string[] = users.map((user) => user.location.country); 
     
    const filteredCountries = [...new Set(allCountries)];

    setCountries(filteredCountries);
  }, [users])

  return (
    <Card>
      <div style={{ justifyContent: 'space-between' }}>
        <SearchBar 
          type="search" 
          list='names' 
          placeholder="Pesquise usuário"
          value={name} 
          onChange={(event) => setName(event.target.value)} /> 
        <datalist id='names'>
          {React.Children.toArray(
            users && users.map(user => {
              return (
                <option value={user.name.first}></option>
              )
            })
          )}
        </datalist>
        <SearchButton onClick={filterByName}>Pesquisar</SearchButton>
      </div>
      <div style={{ justifyContent: 'space-around' }}>
        <div>
          <select onChange={(event) => filterByNationality(event.target.value)}>
            <option value="">Todos</option>
            {React.Children.toArray(
              countries.map((country) => {
                return (
                  <option value={country}>{country}</option>
                )
              })
            )}
          </select>
        </div>
        <div>
          <select onChange={(event) => filterByGender(event.target.value)} >
            <option value="">Todos</option>
            <option value="female">Feminino</option>
            <option value="male">Masculino</option>
          </select>
        </div>
        <div className='check'>
          <input type="checkbox" value=""/>
          <label>Adultos</label>
        </div>
        <label className='list'>Lista</label>
        <SwitchButton />
      </div>
    </Card>
  )
}