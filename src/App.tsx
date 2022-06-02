import Routes from 'Router';
import { ApplicationProvider } from 'Context/ApplicationProvider';
import { FilteredUsersProvider } from 'Context/FilteredUsersProvider';
import { GlobalStyle } from 'styles';

function App() {
  return (
    <ApplicationProvider>
      <FilteredUsersProvider>
        <GlobalStyle />
        <Routes />
      </FilteredUsersProvider>
    </ApplicationProvider>
  );
}

export default App;