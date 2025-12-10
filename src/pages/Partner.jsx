import { useState } from 'react'
import { FaBriefcase, FaDollarSign, FaGift, FaChartLine, FaTools, FaHandshake } from 'react-icons/fa'
import './Partner.css'

const Partner = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    serviceType: '',
    location: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will contact you soon.')
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      businessName: '',
      serviceType: '',
      location: '',
      message: ''
    })
  }

  return (
    <div className="partner-page">
      <div className="partner-hero">
        <div className="container">
          <h1>Become a Partner</h1>
          <p>Join Whekel and grow your business with our platform</p>
        </div>
      </div>

      <div className="container">
        {/* Benefits Section */}
        <section className="partner-benefits">
          <h2>Why Partner with Whekel?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <FaBriefcase className="benefit-icon" />
              <h3>SAAS Model</h3>
              <p>Software as a Service platform - simple, scalable, and efficient business model</p>
            </div>
            <div className="benefit-card">
              <FaDollarSign className="benefit-icon" />
              <h3>No Commission</h3>
              <p>Keep 100% of your earnings. We don't take any commission from your transactions</p>
            </div>
            <div className="benefit-card">
              <FaGift className="benefit-icon" />
              <h3>1 Month Free Trial</h3>
              <p>Start with a full month free trial - no credit card required, no commitment</p>
            </div>
            <div className="benefit-card">
              <FaChartLine className="benefit-icon" />
              <h3>Grow Your Business</h3>
              <p>Access to our platform and customer base to expand your reach</p>
            </div>
            <div className="benefit-card">
              <FaTools className="benefit-icon" />
              <h3>Easy Management</h3>
              <p>Simple dashboard to manage your services, bookings, and customer interactions</p>
            </div>
            <div className="benefit-card">
              <FaHandshake className="benefit-icon" />
              <h3>Support & Training</h3>
              <p>Comprehensive support and training to help you succeed on our platform</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Sign Up</h3>
              <p>Fill out the partner registration form below</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Get Approved</h3>
              <p>Our team reviews your application and gets in touch</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Start Free Trial</h3>
              <p>Begin your 1-month free trial with full platform access</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Grow Your Business</h3>
              <p>Connect with customers and grow with zero commission fees</p>
            </div>
          </div>
        </section>

        {/* Partner Form */}
        <section className="partner-form-section">
          <div className="form-container">
            <h2>Partner Registration Form</h2>
            <p className="form-intro">
              Fill out the form below to become a Whekel partner. We'll review your application 
              and get back to you within 24-48 hours.
            </p>
            
            <form onSubmit={handleSubmit} className="partner-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="businessName">Business Name</label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Enter your business name (if applicable)"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="serviceType">Service Type *</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select service type</option>
                    <option value="ride">Ride Services (Bike, Taxi, Bus, Van)</option>
                    <option value="parcel">Parcel Delivery</option>
                    <option value="freight">Freight Services</option>
                    <option value="professional">Professional Services</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location/City *</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="Enter your service location"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your business, experience, or any questions you have..."
                />
              </div>

              <button type="submit" className="submit-btn">
                Submit Application
              </button>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="partner-faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What is the SAAS model?</h3>
              <p>SAAS (Software as a Service) means you get access to our platform through a subscription. 
              You pay a fixed monthly fee to use the platform, and there are no commission charges on your transactions.</p>
            </div>
            <div className="faq-item">
              <h3>Is the free trial really free?</h3>
              <p>Yes! The 1-month free trial is completely free with no credit card required. 
              You get full access to all platform features during the trial period.</p>
            </div>
            <div className="faq-item">
              <h3>What happens after the free trial?</h3>
              <p>After your free trial, you can choose to continue with a monthly subscription. 
              The pricing is transparent and there are no hidden fees or commissions.</p>
            </div>
            <div className="faq-item">
              <h3>Do you take commission?</h3>
              <p>No, we don't take any commission. You keep 100% of what you earn from your customers. 
              You only pay the monthly platform subscription fee.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Partner

