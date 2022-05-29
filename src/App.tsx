import Routes from 'Router';
import { UserProvider } from 'Context/UserProvider';
import { IconContext } from 'react-icons';
import { GlobalStyle } from 'styles';

function App() {
  return (
    <UserProvider>
      <IconContext.Provider value={{ color: '#0099ff', size: '2em' }}>
        <GlobalStyle />
        <Routes />
      </IconContext.Provider>
    </UserProvider>
  );
}

export default App;