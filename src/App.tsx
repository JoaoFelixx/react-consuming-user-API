import Routes from 'Router';
import { UserProvider } from 'Context/UserProvider';
import { FilteredUsersProvider } from 'Context/FilteredUsersProvider';
import { FormatPresentationProvider } from 'Context/FormatPresentationProvider';
import { IconContext } from 'react-icons';
import { GlobalStyle } from 'styles';

function App() {
  return (
    <UserProvider>
      <FilteredUsersProvider>
        <FormatPresentationProvider>
          <IconContext.Provider value={{ color: '#0099ff', size: '2em' }}>
            <GlobalStyle />
            <Routes />
          </IconContext.Provider>
        </FormatPresentationProvider>
      </FilteredUsersProvider>
    </UserProvider>
  );
}

export default App;