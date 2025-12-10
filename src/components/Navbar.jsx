import { Link, useLocation } from 'react-router-dom'
import { FaCar } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <FaCar className="logo-icon" />
          <span className="logo-text">Whekel</span>
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={location.pathname === '/services' ? 'active' : ''}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/partner" 
              className={location.pathname === '/partner' ? 'active' : ''}
            >
              Become a Partner
            </Link>
          </li>
          <li>
            <a href="#download" className="download-btn">
              Download App
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

