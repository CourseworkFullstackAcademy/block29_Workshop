//NavBar.jsx

import { Link } from 'react-router-dom';



function NavBar() {
  return (
    <nav className="nav-container">
      <Link to="/" className="nav-link">HOME</Link>
      
      <Link to="/newplayerform" className="nav-link">Create New Player</Link>
    </nav>
  );
}

export default NavBar;
