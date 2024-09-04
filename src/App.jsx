

import './App.css'
import {Route, Routes} from 'react-router-dom'
import WelcomePage from './pages/WelcomePage';
import Navigation from './pages/Navbar';
import Travel from './pages/Travelpage';
import Navbar from './pages/Navbar';
import WeatherContext from './pages/WeatherContext';
import Fiveday from './pages/Fiveday';
import LoginForm from './components/Loginform';


function App() {

  return (
    <>
    <h1>Tiffany Isaac</h1>
    <h2>Welcome To the weather App Page</h2>
    <Navbar/>
    <Routes>
      <Route path='/' element={<WelcomePage />}/>
      <Route path='/Fiveday' element={<Fiveday />}/>
      <Route path='/Navbar' element={<Navigation />}/>
      <Route path='/Travelpage' element={<Travel />}/>
      <Route path='/WeatherContext' element={<WeatherContext />}/>
      <Route path='/LoginForm' element={<LoginForm />}/>
    </Routes>
    
    <h3>Your feedback is valued</h3>

    <footer />
    </>
  )
}

export default App