import './App.css';
import Home from './components/Home';
import Game from './components/Game';
import Rules from './components/Rules';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='game/:difficulty' element={<Game />} />
        <Route path='rules' element={<Rules />} />
      </Routes>
    </div>
  );
}
