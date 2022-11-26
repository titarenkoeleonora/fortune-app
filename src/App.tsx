import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import AddNewEpigramForm from './components/AddNewEpigramForm/AddNewEpigramForm';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Main from './components/UI/Main/Main';
import EpigramsContext from './store/epigramsContext';
import { GlobalStyles, theme } from './styles';
const App = () => {
  const { isAddNewEpigramOpened } = useContext(EpigramsContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Main>
        <Dashboard />
        {isAddNewEpigramOpened && <AddNewEpigramForm />}
      </Main>
    </ThemeProvider>
  );
};

export default App;
