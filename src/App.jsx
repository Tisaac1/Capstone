
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Week from './pages/Sevenday';
import WelcomePage from './pages/WelcomePage';
import Navigation from './pages/Navbar';
import Travel from './pages/Travelpage';



function App() {

  return (
    <>
    <h1>Welcome</h1>
    <Routes>
      <Route path='/' element={<WelcomePage}
      <Route path='/Sevenday'
    </Routes>
    </>
  )
}