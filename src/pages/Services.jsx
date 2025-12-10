import { FaCar, FaBox, FaTruck, FaBriefcase, FaMobileAlt, FaMotorcycle, FaTaxi, FaBus, FaShuttleVan, FaMapMarkedAlt } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive transportation and professional service solutions tailored to your needs</p>
        </div>
      </div>

      <div className="container">
        {/* Ride Services */}
        <section id="ride" className="service-section">
          <div className="service-content">
            <div className="service-text">
              <FaCar className="service-badge" />
              <h2>Ride Services</h2>
              <p className="service-intro">
                Get where you need to go with Whekel's comprehensive ride services. 
                Available on our mobile app - choose from multiple vehicle types, select your pickup and drop locations, 
                and get instant driver contact details. We help you connect with drivers - payment is handled directly with the driver.
              </p>
              
              <div className="mobile-app-badge">
                <FaMobileAlt className="app-icon" />
                <span>Available on Mobile App</span>
              </div>

              <h3 className="subsection-title">Vehicle Types Available on App</h3>
              <div className="vehicle-types">
                <div className="vehicle-type-card">
                  <FaMotorcycle className="vehicle-icon" />
                  <h4>Bike</h4>
                  <p>Quick and affordable rides for solo travelers</p>
                </div>
                <div className="vehicle-type-card">
                  <FaTaxi className="vehicle-icon" />
                  <h4>Taxi</h4>
                  <p>Comfortable rides for individuals and small groups</p>
                </div>
                <div className="vehicle-type-card">
                  <FaBus className="vehicle-icon" />
                  <h4>Bus</h4>
                  <p>Economical travel with scheduled routes and timings</p>
                </div>
                <div className="vehicle-type-card">
                  <FaShuttleVan className="vehicle-icon" />
                  <h4>Others (Van & More)</h4>
                  <p>Larger vehicles for groups and special requirements</p>
                </div>
              </div>

              <h3 className="subsection-title">Local Booking Services</h3>
              <div className="local-booking">
                <div className="local-booking-item">
                  <FaMapMarkedAlt className="booking-icon" />
                  <div>
                    <h4>Tour Booking</h4>
                    <p>Book local tour vehicles for sightseeing and travel experiences</p>
                  </div>
                </div>
                <div className="local-booking-item">
                  <FaShuttleVan className="booking-icon" />
                  <div>
                    <h4>Mini Transport</h4>
                    <p>Local mini vehicles for short-distance travel and group transport</p>
                  </div>
                </div>
              </div>

              <h3 className="subsection-title">Key App Features</h3>
              <div className="service-features">
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Pickup & Drop Selection</h4>
                    <p>Easily select your pickup and drop locations for bike, taxi, bus, and other vehicles directly in the app.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>One-Click Driver Contact</h4>
                    <p>Get driver contact number instantly with just one click. Connect directly with your assigned driver 
                    for better coordination and communication.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Bus Schedule Details</h4>
                    <p>View complete bus schedule details including departure times, routes, stops, and arrival times. 
                    Plan your journey with accurate schedule information available in the app.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Safe & Verified Drivers</h4>
                    <p>All our drivers are background-checked and verified for your safety and peace of mind.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Direct Driver Connection</h4>
                    <p>We help you meet and connect with drivers. Payment arrangements are made directly with the driver - 
                    we simply facilitate the connection between you and your transportation provider.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parcel Services */}
        <section id="parcel" className="service-section alt">
          <div className="service-content reverse">
            <div className="service-text">
              <FaBox className="service-badge" />
              <h2>Parcel Delivery</h2>
              <p className="service-intro">
                Send parcels quickly and safely with Whekel's parcel delivery service. 
                Fast and reliable delivery to any destination.
              </p>
              
              <div className="mobile-app-badge">
                <FaMobileAlt className="app-icon" />
                <span>Available on Mobile App</span>
              </div>

              <div className="service-features">
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Multiple Size Options</h4>
                    <p>We handle medium and large packages for parcel delivery.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Secure Handling</h4>
                    <p>Your parcels are handled with care and security throughout the delivery process.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Freight Services */}
        <section id="freight" className="service-section">
          <div className="service-content">
            <div className="service-text">
              <FaTruck className="service-badge" />
              <h2>Freight Services</h2>
              <p className="service-intro">
                Professional freight transportation for businesses. Reliable, cost-effective, 
                and scalable solutions for all your commercial shipping needs.
              </p>
              
              <div className="mobile-app-badge">
                <FaMobileAlt className="app-icon" />
                <span>Available on Mobile App</span>
              </div>

              <div className="service-features">
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Heavy-Duty Vehicles</h4>
                    <p>Fleet of trucks and vehicles designed for heavy and bulk cargo transportation.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Business Solutions</h4>
                    <p>Tailored freight solutions for businesses of all sizes with flexible pricing.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Warehouse Services</h4>
                    <p>Integrated warehouse and distribution services for complete logistics solutions.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Route Optimization</h4>
                    <p>Smart routing technology to ensure efficient and timely deliveries.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Dedicated Account Managers</h4>
                    <p>Personal account managers for business clients to ensure smooth operations.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Compliance & Documentation</h4>
                    <p>Full compliance with regulations and comprehensive documentation for all shipments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Services */}
        <section id="professional" className="service-section alt">
          <div className="service-content reverse">
            <div className="service-text">
              <FaBriefcase className="service-badge" />
              <h2>Professional Services</h2>
              <p className="service-intro">
                Get any professional service by just selecting location and profession. 
                Connect with verified service providers in your area through our mobile app.
              </p>
              
              <div className="mobile-app-badge">
                <FaMobileAlt className="app-icon" />
                <span>Available on Mobile App</span>
              </div>

              <div className="service-features">
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Easy Selection Process</h4>
                    <p>Simply select your location and profession type to find the right service provider for your needs.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Wide Range of Professions</h4>
                    <p>Access professionals from various fields including plumbers, electricians, carpenters, mechanics, and many more.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Location-Based Search</h4>
                    <p>Find service providers near you by selecting your location. Get connected with professionals in your area.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Direct Contact</h4>
                    <p>Get contact details of service providers instantly. Connect directly with professionals to discuss your requirements.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Verified Professionals</h4>
                    <p>All service providers are verified to ensure quality and reliability for your peace of mind.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Direct Payment</h4>
                    <p>Payment arrangements are made directly with the service provider. We simply facilitate the connection.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Services

