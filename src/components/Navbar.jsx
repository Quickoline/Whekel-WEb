import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaCar, FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <FaCar className="logo-icon" />
          <span className="logo-text">Whekel</span>
        </Link>
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={location.pathname === '/services' ? 'active' : ''}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={location.pathname === '/about' ? 'active' : ''}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/partner" 
                className={location.pathname === '/partner' ? 'active' : ''}
                onClick={closeMenu}
              >
                Become a Partner
              </Link>
            </li>
            <li>
              <a 
                href="https://drive.google.com/file/d/1WHGIzd9JiU21KR6JKrbXnLFWHN08XpDA/view?usp=drivesdk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="download-btn" 
                onClick={closeMenu}
              >
                Download App
              </a>
            </li>
          </ul>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

