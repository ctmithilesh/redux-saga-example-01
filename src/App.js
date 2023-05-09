import './App.css';
import Navigation from './Components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Cats from './Components/Cats';
import Dogs from './Components/Dogs';
import Welcome from './Components/Welcome';

function App() {

  return (
    <>
    <Navigation />
    <Routes>
    <Route exact path='/' element={<Welcome />}/>
        <Route exact path='/cats' element={<Cats />}/>
        <Route exact path='/dogs' element={<Dogs />} />
    </Routes>
    </>
  );
}

export default App;
