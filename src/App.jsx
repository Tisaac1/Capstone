
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Week from './pages/Fiveday';
import WelcomePage from './pages/WelcomePage';
import Navigation from './pages/Navbar';
import Travel from './pages/Travelpage';



function App() {

  return (
    <>
    <h1>Welcome</h1>
    <Routes>
      <Route path='/' element={<WelcomePage />}/>
      <Route path='/Fiveday' element={<Week />}/>
      <Route path='/Navbar' element={<Navigation />}/>
      <Route path='/Travelpage' element={<Travel />}/>
    </Routes>
    <footer />
    </>
  )
}

export default App