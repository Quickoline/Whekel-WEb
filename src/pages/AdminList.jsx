import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaUsers, FaSearch, FaFilter, FaSpinner, FaUser, FaPhone, FaCar, FaBriefcase, FaTag } from 'react-icons/fa'
import './AdminList.css'

// API Base URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.whekel.com'

const AdminList = () => {
  const [admins, setAdmins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  
  // Filters and sorting
  const [category, setCategory] = useState('')
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('category')
  const [sortOrder, setSortOrder] = useState('asc')
  
  // Pagination
  const [page, setPage] = useState(1)
  const [limit] = useState(20)
  const [pagination, setPagination] = useState({
    total: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPrevPage: false
  })

  const fetchAdmins = async () => {
    setLoading(true)
    setError('')
    
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        sortBy,
        sortOrder,
        // Add timestamp to prevent caching and get fresh signed URLs
        _t: Date.now().toString()
      })
      
      if (category) params.append('category', category)
      if (search) params.append('search', search)
      
      const response = await fetch(`${API_BASE_URL}/admin/auth/admins/public?${params}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      })
      const data = await response.json()
      
      if (response.ok && data.success) {
        setAdmins(data.data.admins || [])
        setPagination(data.data.pagination || {})
      } else {
        setError(data.message || 'Failed to fetch admins')
      }
    } catch (err) {
      console.error('Fetch error:', err)
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAdmins()
  }, [page, category, sortBy, sortOrder, search])

  // Refresh data when page becomes visible to get fresh signed URLs
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchAdmins()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [page, category, sortBy, sortOrder, search])

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
    setPage(1) // Reset to first page when filter changes
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    setPage(1)
  }

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
    setPage(1)
  }

  const handleSortOrderChange = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    setPage(1)
  }

  const getCategoryDisplayName = (roles) => {
    if (!roles || roles.length === 0) return 'Other'
    return roles[0].replace('Admin', '')
  }

  const isVendorPartner = (roles) => {
    return roles && roles.includes('VendorAdmin')
  }

  return (
    <div className="admin-list-page">
      <div className="admin-list-hero">
        <div className="container">
          <h1>Our Service Partners</h1>
          <p>Find trusted service providers in your area</p>
        </div>
      </div>

      <div className="container">
        {/* Filters Section */}
        <div className="filters-section">
          <div className="filters-row">
            <div className="filter-group">
              <FaSearch className="filter-icon" />
              <input
                type="text"
                placeholder="Search by name, email, or employee ID..."
                value={search}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>
            
            <div className="filter-group">
              <FaFilter className="filter-icon" />
              <select
                value={category}
                onChange={handleCategoryChange}
                className="category-select"
              >
                <option value="">All Categories</option>
                <option value="RideAdmin">Ride</option>
                <option value="ParcelAdmin">Parcel</option>
                <option value="FreightAdmin">Freight</option>
                <option value="VendorAdmin">Vendor</option>
                <option value="LocalAdmin">Local</option>
                <option value="OtherAdmin">Other</option>
              </select>
            </div>

            <div className="filter-group">
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="sort-select"
              >
                <option value="category">Sort by Category</option>
                <option value="name">Sort by Name</option>
                <option value="email">Sort by Email</option>
                <option value="createdAt">Sort by Date</option>
              </select>
              <button
                onClick={handleSortOrderChange}
                className="sort-order-btn"
                title={`Sort ${sortOrder === 'asc' ? 'Ascending' : 'Descending'}`}
              >
                {sortOrder === 'asc' ? '↑' : '↓'}
              </button>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="alert alert-error">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="loading-state">
            <FaSpinner className="spinner" />
            <p>Loading admins...</p>
          </div>
        ) : (
          <>
            {/* Admins Grid */}
            {admins.length === 0 ? (
              <div className="empty-state">
                <FaUsers className="empty-icon" />
                <h3>No Admins Found</h3>
                <p>Try adjusting your filters or search terms.</p>
              </div>
            ) : (
              <div className="admins-grid">
                {admins.map((admin) => (
                  <Link
                    key={admin._id}
                    to={`/admins/${admin._id}`}
                    className="admin-card"
                  >
                    <div className="admin-card-header">
                      {admin.profilePhotoSignedUrl ? (
                        <img
                          src={admin.profilePhotoSignedUrl}
                          alt={admin.name}
                          className="admin-avatar"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                          }}
                        />
                      ) : null}
                      <div
                        className="admin-avatar-placeholder"
                        style={{ display: admin.profilePhotoSignedUrl ? 'none' : 'flex' }}
                      >
                        <FaUser />
                      </div>
                      <div className="admin-card-badge">
                        <FaTag />
                        <span>{getCategoryDisplayName(admin.roles)}</span>
                      </div>
                    </div>
                    
                    <div className="admin-card-body">
                      <h3>{admin.name || 'N/A'}</h3>
                      {admin.profession && (
                        <p className="admin-profession">
                          <FaBriefcase />
                          {admin.profession}
                        </p>
                      )}
                      {admin.phone && (
                        <p className="admin-phone">
                          <FaPhone />
                          {admin.phone}
                        </p>
                      )}
                      {!isVendorPartner(admin.roles) && admin.vehicleNumber && (
                        <p className="admin-vehicle">
                          <FaCar />
                          {admin.vehicleNumber}
                        </p>
                      )}
                    </div>
                    
                    <div className="admin-card-footer">
                      <span className="view-profile-btn">View Profile →</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="pagination">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={!pagination.hasPrevPage || loading}
                  className="pagination-btn"
                >
                  Previous
                </button>
                
                <span className="pagination-info">
                  Page {page} of {pagination.totalPages} ({pagination.total} total)
                </span>
                
                <button
                  onClick={() => setPage(p => p + 1)}
                  disabled={!pagination.hasNextPage || loading}
                  className="pagination-btn"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default AdminList

