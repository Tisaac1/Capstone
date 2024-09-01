
import './App.css'
import {Route, Routes} from 'react-router-dom'
import WelcomePage from './pages/WelcomePage';
import Navigation from './pages/Navbar';
import Travel from './pages/Travelpage';
import Navbar from './pages/Navbar';
import Context from './pages/WeatherContext';
import Fiveday from './pages/Fiveday';


function App() {

  return (
    <>
    <h1>Welcome To the weather App Page</h1>
    <Navbar/>
    <Routes>
      <Route path='/WelcomePage' element={<WelcomePage />}/>
      <Route path='/Fiveday' element={<Fiveday />}/>
      <Route path='/Navbar' element={<Navigation />}/>
      <Route path='/Travelpage' element={<Travel />}/>
      <Route path='/WeatherContext' element={<Context />}/>
    </Routes>
    
    <footer />
    </>
  )
}

export default App