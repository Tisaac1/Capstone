import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='nav'>
      <Link to='/'>
        <div>WelcomePage</div>
      </Link>
      <Link to='/Travelpage'>
        <div>TravelPage</div>
      </Link>
      <Link to='/Fiveday'>
        <div>FiveDay</div>
      </Link>
      <Link to='/WeatherContext'>
        <div>Context</div>
      </Link>
    </div>
  );
}

export default Nav;