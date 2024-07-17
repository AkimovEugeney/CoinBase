import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { ThemeProvider } from './Providers/ThemeProvider';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Dashboard />
        <Main />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
