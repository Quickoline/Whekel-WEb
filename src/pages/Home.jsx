import { Link } from 'react-router-dom'
import { FaMobileAlt, FaCar, FaBox, FaTruck, FaBriefcase, FaBolt, FaLock, FaDollarSign, FaGlobe, FaStar } from 'react-icons/fa'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            One Stop Solution for All
            <span className="gradient-text"> Transportation Needs</span>
          </h1>
          <p className="hero-subtitle">
            Ride, Parcel, Freight & Professional Services - All in One App
          </p>
          <p className="hero-description">
            Experience seamless transportation and professional services with Whekel. We help you connect with drivers, 
            transportation providers, and professional service providers. Whether you need a ride, want to send a parcel, 
            require freight services, or need professional help, we facilitate the connection - you handle payment directly with your service provider.
          </p>
          <div className="hero-buttons">
            <a href="#download" className="btn btn-primary">
              Download App
            </a>
            <Link to="/services" className="btn btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="app-preview">
                <div className="app-header">Whekel</div>
                <div className="app-content">
                  <div className="service-card-preview"><FaCar /> Ride</div>
                  <div className="service-card-preview"><FaBox /> Parcel</div>
                  <div className="service-card-preview"><FaTruck /> Freight</div>
                  <div className="service-card-preview"><FaBriefcase /> Professional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Whekel?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <FaBolt className="feature-icon" />
              <h3>Fast & Reliable</h3>
              <p>Get your transportation needs met quickly with our reliable service network.</p>
            </div>
            <div className="feature-card">
              <FaLock className="feature-icon" />
              <h3>Secure & Safe</h3>
              <p>Your safety and security are our top priorities. All services are verified and insured.</p>
            </div>
            <div className="feature-card">
              <FaDollarSign className="feature-icon" />
              <h3>Affordable Pricing</h3>
              <p>Competitive rates with transparent pricing. No hidden fees, ever.</p>
            </div>
            <div className="feature-card">
              <FaGlobe className="feature-icon" />
              <h3>Wide Coverage</h3>
              <p>Available in multiple cities with expanding network coverage.</p>
            </div>
            <div className="feature-card">
              <FaMobileAlt className="feature-icon" />
              <h3>Easy to Use</h3>
              <p>Simple, intuitive app interface that makes booking effortless.</p>
            </div>
            <div className="feature-card">
              <FaStar className="feature-icon" />
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support to assist you whenever you need help.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <FaCar className="service-icon" />
              <h3>Ride Services</h3>
              <p>Book bike, taxi, bus, or van rides on our mobile app. Select pickup & drop locations, get driver contact instantly, and view bus schedules.</p>
              <Link to="/services#ride" className="service-link">
                Learn More →
              </Link>
            </div>
            <div className="service-card">
              <FaBox className="service-icon" />
              <h3>Parcel Delivery</h3>
              <p>Send parcels quickly and safely. Connect with delivery drivers for reliable service.</p>
              <Link to="/services#parcel" className="service-link">
                Learn More →
              </Link>
            </div>
            <div className="service-card">
              <FaTruck className="service-icon" />
              <h3>Freight Services</h3>
              <p>Heavy-duty freight transportation for businesses. Reliable and cost-effective solutions.</p>
              <Link to="/services#freight" className="service-link">
                Learn More →
              </Link>
            </div>
            <div className="service-card">
              <FaBriefcase className="service-icon" />
              <h3>Professional Services</h3>
              <p>Get any professional service by selecting location and profession. Connect with verified service providers in your area.</p>
              <Link to="/services#professional" className="service-link">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="download-section">
        <div className="container">
          <div className="download-content">
            <h2>Ready to Get Started?</h2>
            <p>Download Whekel app today and experience the future of transportation.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

