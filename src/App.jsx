import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return(
    <div className='w-screen h-screen flex justify-center items-center bg-primary text-secondary overflow-x-hidden scroll-smooth font-poppins'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App
