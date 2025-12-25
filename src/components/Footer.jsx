import { Link, useNavigate } from 'react-router-dom'
import { FaCar, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const navigate = useNavigate()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLinkClick = (e, path) => {
    e.preventDefault()
    scrollToTop()
    setTimeout(() => {
      navigate(path)
    }, 100)
  }

  const handleHashLinkClick = (e, path) => {
    e.preventDefault()
    const [route, hash] = path.split('#')
    if (hash) {
      navigate(route)
      setTimeout(() => {
        scrollToTop()
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 300)
      }, 100)
    } else {
      scrollToTop()
      navigate(path)
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>
            <FaCar className="logo-icon" /> Whekel
          </h3>
          <p>One stop solution for all your transportation and professional service needs.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/services" onClick={scrollToTop}>Services</Link></li>
            <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
            <li><Link to="/partner" onClick={scrollToTop}>Become a Partner</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="/services#ride" onClick={(e) => handleHashLinkClick(e, '/services#ride')}>Ride Services</a></li>
            <li><a href="/services#parcel" onClick={(e) => handleHashLinkClick(e, '/services#parcel')}>Parcel Delivery</a></li>
            <li><a href="/services#freight" onClick={(e) => handleHashLinkClick(e, '/services#freight')}>Freight Services</a></li>
            <li><a href="/services#professional" onClick={(e) => handleHashLinkClick(e, '/services#professional')}>Professional Services</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacy-policy" onClick={scrollToTop}>Privacy Policy</Link></li>
            <li><Link to="/terms-conditions" onClick={scrollToTop}>Terms & Conditions</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li><FaEnvelope /> contact@whekel.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Whekel. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

