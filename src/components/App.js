import '../css/App.css';
import Home from './Home';
import Game from './Game';
import Rules from './Rules';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './NavigationBar';

export default function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/game/:difficulty' element={<Game />} />
        <Route path='/rules' element={<Rules />} />
      </Routes>
    </div>
  );
}
