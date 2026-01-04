import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { 
  FaUser, FaPhone, FaCar, FaBriefcase, FaTag, FaArrowLeft, 
  FaSpinner, FaDownload, FaEnvelope, FaIdCard, FaStore, FaHome 
} from 'react-icons/fa'
import './AdminProfile.css'

// API Base URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.whekel.com'

const AdminProfile = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [admin, setAdmin] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchAdmin = async () => {
      setLoading(true)
      setError('')
      
      try {
        let foundAdmin = null
        let page = 1
        const maxPages = 5 // Search through first 5 pages
        
        while (!foundAdmin && page <= maxPages) {
          const params = new URLSearchParams({
            page: page.toString(),
            limit: '50'
          })
          
          // Add timestamp to prevent caching and get fresh signed URLs
          params.append('_t', Date.now().toString())
          
          const response = await fetch(`${API_BASE_URL}/admin/auth/admins/public?${params.toString()}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          
          const data = await response.json()
          
          if (data.success) {
            // Try to find by _id first
            foundAdmin = data.data?.admins?.find(a => a._id === id)
            
            // If not found, try by employeeId
            if (!foundAdmin) {
              foundAdmin = data.data?.admins?.find(a => a.employeeId === id)
            }
            
            if (foundAdmin) {
              setAdmin(foundAdmin)
              break
            }
            
            // If no more pages, stop searching
            if (!data.data?.pagination?.hasNextPage) {
              break
            }
            
            page++
          } else {
            break
          }
        }
        
        if (!foundAdmin) {
          setError('Admin not found')
        }
      } catch (err) {
        console.error('Fetch error:', err)
        setError(err.message || 'Network error. Please check your connection and try again.')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchAdmin()
    }
  }, [id])

  const getCategoryDisplayName = (roles) => {
    if (!roles || roles.length === 0) return 'Other'
    return roles.map(role => role.replace('Admin', '')).join(', ')
  }

  const isVendorPartner = (roles) => {
    return roles && roles.includes('VendorAdmin')
  }

  const handleDownloadApp = () => {
    // You can customize these app store links
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const isAndroid = /Android/.test(navigator.userAgent)
    
    if (isIOS) {
      window.open('https://apps.apple.com/app/whekel', '_blank')
    } else if (isAndroid) {
      window.open('https://play.google.com/store/apps/details?id=com.whekel.app', '_blank')
    } else {
      // Default to both links or a landing page
      window.open('https://whekel.com/download', '_blank')
    }
  }

  if (loading) {
    return (
      <div className="admin-profile-page">
        <div className="loading-state">
          <FaSpinner className="spinner" />
          <p>Loading profile...</p>
        </div>
      </div>
    )
  }

  if (error || !admin) {
    return (
      <div className="admin-profile-page">
        <div className="container">
          <div className="error-state">
            <h3>{error || 'Admin not found'}</h3>
            <Link to="/admins" className="back-btn">
              <FaArrowLeft />
              Back to Admins List
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-profile-page">
      <div className="profile-hero">
        <div className="container">
          <Link to="/admins" className="back-link">
            <FaArrowLeft />
            Back to List
          </Link>
          <div className="profile-header">
            {admin.profilePhotoSignedUrl ? (
              <img
                src={admin.profilePhotoSignedUrl}
                alt={admin.name}
                className="profile-avatar-large"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
            ) : null}
            <div
              className="profile-avatar-placeholder-large"
              style={{ display: admin.profilePhotoSignedUrl ? 'none' : 'flex' }}
            >
              <FaUser />
            </div>
            <div className="profile-info-header">
              <h1>{admin.name || 'N/A'}</h1>
              <div className="profile-badge-large">
                <FaTag />
                <span>{getCategoryDisplayName(admin.roles)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="profile-content">
          <div className="profile-main">
            <div className="profile-section">
              <h2>Profile Details</h2>
              <div className="details-grid">
                {admin.profession && (
                  <div className="detail-item">
                    <div className="detail-icon">
                      <FaBriefcase />
                    </div>
                    <div className="detail-content">
                      <span className="detail-label">Profession</span>
                      <span className="detail-value">{admin.profession}</span>
                    </div>
                  </div>
                )}

                {admin.phone && (
                  <div className="detail-item">
                    <div className="detail-icon">
                      <FaPhone />
                    </div>
                    <div className="detail-content">
                      <span className="detail-label">Phone</span>
                      <a href={`tel:${admin.phone}`} className="detail-value link">
                        {admin.phone}
                      </a>
                    </div>
                  </div>
                )}

                {admin.email && (
                  <div className="detail-item">
                    <div className="detail-icon">
                      <FaEnvelope />
                    </div>
                    <div className="detail-content">
                      <span className="detail-label">Email</span>
                      <a href={`mailto:${admin.email}`} className="detail-value link">
                        {admin.email}
                      </a>
                    </div>
                  </div>
                )}

                <div className="detail-item">
                  <div className="detail-icon">
                    <FaTag />
                  </div>
                  <div className="detail-content">
                    <span className="detail-label">Category</span>
                    <span className="detail-value">{getCategoryDisplayName(admin.roles)}</span>
                  </div>
                </div>

                {!isVendorPartner(admin.roles) && admin.vehicleNumber && (
                  <div className="detail-item">
                    <div className="detail-icon">
                      <FaCar />
                    </div>
                    <div className="detail-content">
                      <span className="detail-label">Vehicle Number</span>
                      <span className="detail-value">{admin.vehicleNumber}</span>
                    </div>
                  </div>
                )}

                {admin.employeeId && (
                  <div className="detail-item">
                    <div className="detail-icon">
                      <FaIdCard />
                    </div>
                    <div className="detail-content">
                      <span className="detail-label">Employee ID</span>
                      <span className="detail-value">{admin.employeeId}</span>
                    </div>
                  </div>
                )}

                {admin.shopName && (
                  <div className="detail-item">
                    <div className="detail-icon">
                      <FaStore />
                    </div>
                    <div className="detail-content">
                      <span className="detail-label">Shop Name</span>
                      <span className="detail-value">{admin.shopName}</span>
                    </div>
                  </div>
                )}

                {admin.homeServiceAvailable !== undefined && (
                  <div className="detail-item">
                    <div className="detail-icon">
                      <FaHome />
                    </div>
                    <div className="detail-content">
                      <span className="detail-label">Home Service</span>
                      <span className="detail-value">
                        {admin.homeServiceAvailable ? 'Available' : 'Not Available'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="profile-sidebar">
            <div className="download-app-card">
              <div className="download-app-header">
                <FaDownload className="download-icon" />
                <h3>Get the Whekel App</h3>
                <p>Book services, track orders, and more with our mobile app</p>
              </div>
              <button onClick={handleDownloadApp} className="download-app-btn">
                <FaDownload />
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProfile

