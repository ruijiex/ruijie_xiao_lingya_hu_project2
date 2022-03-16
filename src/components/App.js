import '../css/App.css';
import Home from './Home';
import Game from './Game';
import Rules from './Rules';
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
