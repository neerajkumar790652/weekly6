import Navbar from './components/Navbar';
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import Home from './components/Home';
import Contact from './components/Contact';
import Service from './components/Service';
import {Routes,Route} from 'react-router-dom'
function App() {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };


  return (
    <>
       <div className={isDarkMode ? 'dark' : 'light'}>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/service" element={<Service/>}/>
     </Routes>
    </div>



    </>
  )
}

export default App
