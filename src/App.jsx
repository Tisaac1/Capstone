
import './App.css'
import {Route, Routes} from 'react-router-dom'
import WelcomePage from './pages/WelcomePage';
import Navigation from './pages/Navbar';
import Travel from './pages/Travelpage';
import Navbar from './pages/Navbar';
import WeatherContext from './pages/WeatherContext';
import Fiveday from './pages/Fiveday';


function App() {

  return (
    <>
    <h1>Tiffany Isaac</h1>
    <Navbar/>
    <Routes>
      <Route path='/' element={<WelcomePage />}/>
      <Route path='/Fiveday' element={<Fiveday />}/>
      <Route path='/Navbar' element={<Navigation />}/>
      <Route path='/Travelpage' element={<Travel />}/>
      <Route path='/WeatherContext' element={<WeatherContext />}/>
    </Routes>
    
    <h2>Welcome To the weather App Page</h2>

    <footer />
    </>
  )
}

export default App