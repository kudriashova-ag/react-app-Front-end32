import { Outlet } from 'react-router-dom';
import './App.css';
import Menu from './components/header/menu';
import ThemeProvider from './providers/ThemeProvider';


function App() {

  return (
    <ThemeProvider>
        <Menu />
        <Outlet />
    </ThemeProvider>
  );
}

export default App;

