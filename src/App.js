import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Footer from './Shared/Footer/Footer'


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
          <Route path='/our-projects' element={<Projects></Projects>}></Route>
        </Routes>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
