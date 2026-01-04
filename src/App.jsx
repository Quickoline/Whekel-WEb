import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Partner from './pages/Partner'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import Admin from './pages/Admin'
import ResetPassword from './pages/ResetPassword'
import AdminList from './pages/AdminList'
import AdminProfile from './pages/AdminProfile'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const location = useLocation()
  const isAdminPage = location.pathname === '/admin'

  return (
    <div className="App">
      {!isAdminPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admins" element={<AdminList />} />
        <Route path="/admins/:id" element={<AdminProfile />} />
      </Routes>
      {!isAdminPage && <Footer />}
    </div>
  )
}

export default App

