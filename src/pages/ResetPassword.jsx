import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { FaLock, FaCheckCircle, FaExclamationTriangle, FaSpinner } from 'react-icons/fa'
import './ResetPassword.css'

// Reuse the same pattern as Admin page for API base URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.whekel.com'

const ResetPassword = () => {
  const [searchParams] = useSearchParams()
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const t = searchParams.get('token') || ''
    setToken(t)
    if (!t) {
      setError('Invalid or missing reset link. Please request a new password reset email.')
    }
  }, [searchParams])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!token) {
      setError('Invalid or missing reset link. Please request a new password reset email.')
      return
    }

    if (!password || !confirmPassword) {
      setError('Please enter and confirm your new password.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please try again.')
      return
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.')
      return
    }

    setLoading(true)

    try {
      const response = await fetch(`${API_BASE_URL}/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token,
          newPassword: password
        })
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok) {
        setSuccess(data.message || 'Your password has been reset successfully. You can now log in with your new password.')
        setPassword('')
        setConfirmPassword('')
      } else {
        setError(
          data.message ||
            'Unable to reset password. Your link may have expired or already been used. Please request a new password reset.'
        )
      }
    } catch (err) {
      console.error('Reset password error:', err)
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="reset-page">
      <div className="reset-container">
        <div className="reset-card">
          <div className="reset-header">
            <FaLock className="reset-icon" />
            <h1>Reset Your Password</h1>
            <p>Choose a strong, unique password to secure your account.</p>
          </div>

          {error && (
            <div className="reset-alert reset-alert-error">
              <FaExclamationTriangle />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="reset-alert reset-alert-success">
              <FaCheckCircle />
              <span>{success}</span>
            </div>
          )}

          <form className="reset-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your new password"
                  required
                  minLength={8}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter your new password"
                  required
                  minLength={8}
                />
              </div>
            </div>

            <button type="submit" className="reset-btn" disabled={loading || !token}>
              {loading ? (
                <>
                  <FaSpinner className="spinner" />
                  Updating Password...
                </>
              ) : (
                <>
                  <FaLock />
                  Reset Password
                </>
              )}
            </button>
          </form>

          <div className="reset-footer">
            <p>
              If this link does not work, you can request a new reset email from the{' '}
              <Link to="/">login / home page</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword


