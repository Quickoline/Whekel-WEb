import { useState, useEffect } from 'react'
import { FaLock, FaUser, FaCheck, FaTimes, FaSpinner, FaSignOutAlt, FaUsers, FaIdCard, FaEye } from 'react-icons/fa'
import './Admin.css'

// API Base URL - Update this to match your backend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.whekel.com'

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const [pendingUsers, setPendingUsers] = useState([])
  const [loadingUsers, setLoadingUsers] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Check if user is already logged in
  useEffect(() => {
    const storedToken = localStorage.getItem('adminToken')
    if (storedToken) {
      setToken(storedToken)
      setIsAuthenticated(true)
      fetchPendingUsers(storedToken)
    }
  }, [])

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const response = await fetch(`${API_BASE_URL}/admin/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password
        })
      })

      const data = await response.json()

      if (response.ok && data.data && data.data.token) {
        const token = data.data.token
        localStorage.setItem('adminToken', token)
        setToken(token)
        setIsAuthenticated(true)
        setSuccess(data.message || 'Login successful!')
        await fetchPendingUsers(token)
      } else {
        setError(data.message || 'Login failed. Please check your credentials.')
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
      console.error('Login error:', err)
    } finally {
      setLoading(false)
    }
  }

  const fetchPendingUsers = async (authToken) => {
    setLoadingUsers(true)
    setError('')

    try {
      const response = await fetch(`${API_BASE_URL}/admin/superadmin/pending-verifications`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        }
      })

      const data = await response.json()

      if (response.ok) {
        // Handle the response structure: { message, count, data: [...] }
        setPendingUsers(data.data || data.users || data || [])
      } else {
        setError(data.message || 'Failed to fetch pending users.')
        if (response.status === 401) {
          handleLogout()
        }
      }
    } catch (err) {
      setError('Failed to fetch pending users. Please try again.')
      console.error('Fetch error:', err)
    } finally {
      setLoadingUsers(false)
    }
  }

  const handleVerifyUser = async (userId, status) => {
    setError('')
    setSuccess('')

    try {
      const response = await fetch(`${API_BASE_URL}/admin/superadmin/verify-user`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          status: status
        })
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(`User ${status === 'verified' ? 'verified' : 'rejected'} successfully!`)
        // Refresh the pending users list
        await fetchPendingUsers(token)
        // Clear success message after 3 seconds
        setTimeout(() => setSuccess(''), 3000)
      } else {
        setError(data.message || `Failed to ${status} user.`)
        if (response.status === 401) {
          handleLogout()
        }
      }
    } catch (err) {
      setError(`Failed to ${status} user. Please try again.`)
      console.error('Verify error:', err)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    setToken(null)
    setIsAuthenticated(false)
    setPendingUsers([])
    setError('')
    setSuccess('')
  }

  // Login Form
  if (!isAuthenticated) {
    return (
      <div className="admin-page">
        <div className="admin-container">
          <div className="admin-login-card">
            <div className="login-header">
              <FaLock className="login-icon" />
              <h1>Admin Login</h1>
              <p>SuperAdmin Access Only</p>
            </div>

            {error && <div className="alert alert-error">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group">
                <label htmlFor="email">
                  <FaUser className="input-icon" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  placeholder="superadmin@ride.com"
                  required
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  <FaLock className="input-icon" />
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Enter your password"
                  required
                  autoComplete="current-password"
                />
              </div>

              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? (
                  <>
                    <FaSpinner className="spinner" />
                    Logging in...
                  </>
                ) : (
                  <>
                    <FaLock />
                    Login
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  // Verification Dashboard
  return (
    <div className="admin-page">
      <div className="admin-header">
        <div className="admin-header-content">
          <div className="admin-title">
            <FaUsers className="admin-icon" />
            <h1>User Verification Dashboard</h1>
          </div>
          <button onClick={handleLogout} className="logout-btn">
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>

      <div className="admin-container">
        {error && <div className="alert alert-error">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <div className="dashboard-header">
          <h2>Pending User Verifications</h2>
          <button onClick={() => fetchPendingUsers(token)} className="refresh-btn" disabled={loadingUsers}>
            {loadingUsers ? <FaSpinner className="spinner" /> : 'Refresh'}
          </button>
        </div>

        {loadingUsers ? (
          <div className="loading-state">
            <FaSpinner className="spinner large" />
            <p>Loading pending users...</p>
          </div>
        ) : pendingUsers.length === 0 ? (
          <div className="empty-state">
            <FaUsers className="empty-icon" />
            <h3>No Pending Verifications</h3>
            <p>All users have been processed.</p>
          </div>
        ) : (
          <div className="users-grid">
            {pendingUsers.map((user) => (
              <div key={user._id || user.id} className="user-card">
                <div className="user-header">
                  <div className="user-avatar">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <div className="user-info">
                    <h3>{user.name || 'N/A'}</h3>
                    <p className="user-email">{user.email || 'N/A'}</p>
                  </div>
                </div>

                <div className="user-details">
                  {user.phone && (
                    <div className="detail-item">
                      <strong>Phone:</strong> {user.phone}
                    </div>
                  )}
                  {user.location && (
                    <div className="detail-item">
                      <strong>Location:</strong> {user.location}
                    </div>
                  )}
                  {user.businessName && (
                    <div className="detail-item">
                      <strong>Business:</strong> {user.businessName}
                    </div>
                  )}
                  {user.serviceType && (
                    <div className="detail-item">
                      <strong>Service Type:</strong> {user.serviceType}
                    </div>
                  )}
                  {user.verificationStatus && (
                    <div className="detail-item">
                      <strong>Status:</strong> 
                      <span className={`status-badge status-${user.verificationStatus}`}>
                        {user.verificationStatus}
                      </span>
                    </div>
                  )}
                  {user.createdAt && (
                    <div className="detail-item">
                      <strong>Registered:</strong> {new Date(user.createdAt).toLocaleDateString()}
                    </div>
                  )}
                </div>

                {user.aadhaarPhotoSignedUrl && (
                  <div className="aadhaar-section">
                    <div className="aadhaar-header">
                      <FaIdCard className="aadhaar-icon" />
                      <strong>Aadhaar Photo</strong>
                    </div>
                    <div className="aadhaar-image-container">
                      <img 
                        src={user.aadhaarPhotoSignedUrl} 
                        alt="Aadhaar Verification" 
                        className="aadhaar-image"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                      <div className="image-error" style={{ display: 'none' }}>
                        <FaIdCard />
                        <span>Image not available</span>
                      </div>
                      <a 
                        href={user.aadhaarPhotoSignedUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="view-image-btn"
                      >
                        <FaEye />
                        View Full Size
                      </a>
                    </div>
                  </div>
                )}

                <div className="user-actions">
                  <button
                    onClick={() => handleVerifyUser(user._id || user.id, 'verified')}
                    className="action-btn verify-btn"
                  >
                    <FaCheck />
                    Verify
                  </button>
                  <button
                    onClick={() => handleVerifyUser(user._id || user.id, 'rejected')}
                    className="action-btn reject-btn"
                  >
                    <FaTimes />
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Admin

