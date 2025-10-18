import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-beauty-background">
      {/* Navigation Header */}
      <nav className="bg-beauty-surface shadow-xl sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <div className="flex items-center">
              <Link to="/" className="text-3xl font-bold hero-gradient bg-clip-text text-transparent">
                💄 صالون الجمال
              </Link>
            </div>
            
            <div className="hidden md:flex space-x-6 space-x-reverse">
              <Link
                to="/"
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                الصفحة الرئيسية
              </Link>
              <Link
                to="/booking"
                className={`nav-link ${location.pathname === '/booking' ? 'active' : ''}`}
              >
                حجز موعد
              </Link>
              <Link
                to="/admin"
                className="nav-link"
              >
                الإدارة
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-beauty-text hover:text-beauty-primary focus:outline-none focus:text-beauty-primary p-2 rounded-xl hover:bg-beauty-light transition-all duration-300"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-beauty-surface border-t-2 border-beauty-border mt-16 shadow-lg">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-beauty-text">
            <p className="text-xl font-bold mb-3 hero-gradient bg-clip-text text-transparent">صالون الجمال</p>
            <p className="text-beauty-muted mb-2">ساعات العمل: السبت - الخميس من 9:00 صباحاً إلى 9:00 مساءً</p>
            <p className="text-beauty-muted">📞 للاستفسارات: +966 50 123 4567</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

