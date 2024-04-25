import { Outlet } from 'react-router-dom';
import './App.css';
import Menu from './components/header/menu';

function App() {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;

