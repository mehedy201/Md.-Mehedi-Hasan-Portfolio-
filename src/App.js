import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

function App() {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className='bg-dark'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
