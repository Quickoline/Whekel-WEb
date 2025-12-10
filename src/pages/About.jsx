import { Link } from 'react-router-dom'
import { FaBullseye, FaLightbulb, FaHandshake, FaHeart, FaLeaf, FaBolt, FaRocket, FaShieldAlt, FaChartLine, FaStar } from 'react-icons/fa'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>About Whekel</h1>
          <p>Transforming transportation, one journey at a time</p>
        </div>
      </div>

      <div className="container">
        {/* Mission Section */}
        <section className="about-section">
          <div className="about-content">
            <h2>Our Mission</h2>
            <p>
              At Whekel, we believe that transportation should be simple, accessible, and reliable. 
              Our mission is to provide a one-stop solution for all transportation needs, making it 
              easier for people and businesses to connect with transportation providers efficiently.
            </p>
            <p>
              We're committed to leveraging technology to create seamless connections, whether you're 
              booking a ride, sending a parcel, or managing freight logistics. Our platform helps 
              you meet and connect with verified drivers and service providers. We facilitate the 
              connection - payment arrangements are made directly between you and your service provider.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="about-section alt">
          <div className="about-content">
            <h2>Our Vision</h2>
            <p>
              We envision a future where transportation is not just a service, but an integrated part 
              of daily life. Our goal is to become the leading transportation platform that serves 
              millions of users across multiple cities and countries.
            </p>
            <p>
              By continuously innovating and expanding our services, we aim to make transportation 
              more sustainable, efficient, and accessible to everyone, regardless of their location 
              or needs.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <FaBullseye className="value-icon" />
              <h3>Reliability</h3>
              <p>We deliver on our promises and ensure consistent, dependable service for all our users.</p>
            </div>
            <div className="value-card">
              <FaLightbulb className="value-icon" />
              <h3>Innovation</h3>
              <p>We continuously improve our platform with cutting-edge technology and user-focused solutions.</p>
            </div>
            <div className="value-card">
              <FaHandshake className="value-icon" />
              <h3>Trust</h3>
              <p>Building trust through transparency, security, and honest communication with our community.</p>
            </div>
            <div className="value-card">
              <FaHeart className="value-icon" />
              <h3>Customer First</h3>
              <p>Our customers are at the heart of everything we do. Their satisfaction is our success.</p>
            </div>
            <div className="value-card">
              <FaLeaf className="value-icon" />
              <h3>Sustainability</h3>
              <p>We're committed to reducing our environmental impact and promoting sustainable transportation.</p>
            </div>
            <div className="value-card">
              <FaBolt className="value-icon" />
              <h3>Efficiency</h3>
              <p>We optimize every process to save time and resources for both our users and partners.</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <h2>Whekel by the Numbers</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">25K+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Cities Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">150K+</div>
              <div className="stat-label">Trips Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4.8★</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Why Choose Whekel?</h2>
          <div className="team-grid">
            <div className="team-card">
              <FaRocket className="team-icon" />
              <h3>Fast Growth</h3>
              <p>Rapidly expanding network with new cities and services added regularly.</p>
            </div>
            <div className="team-card">
              <FaShieldAlt className="team-icon" />
              <h3>Secure Platform</h3>
              <p>Advanced security measures to protect your data and ensure safe connections with drivers.</p>
            </div>
            <div className="team-card">
              <FaChartLine className="team-icon" />
              <h3>Proven Track Record</h3>
              <p>Years of experience in transportation and logistics management.</p>
            </div>
            <div className="team-card">
              <FaStar className="team-icon" />
              <h3>Excellent Support</h3>
              <p>Dedicated customer support team available 24/7 to assist you.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <h2>Join the Whekel Community</h2>
          <p>Be part of the transportation revolution. Download the app and start your journey with us today!</p>
          <div className="cta-buttons">
            <a href="#download" className="btn btn-primary">
              Download App
            </a>
            <Link to="/services" className="btn btn-secondary">
              Explore Services
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About

