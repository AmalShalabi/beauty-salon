import React, { useState, useEffect } from 'react'

const Admin = () => {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [bookings, setBookings] = useState([])
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const ADMIN_PASSWORD = 'admin123' // In production, use proper authentication

  useEffect(() => {
    if (isAuthenticated) {
      loadBookings()
    }
  }, [isAuthenticated])

  const loadBookings = () => {
    const storedBookings = JSON.parse(localStorage.getItem('beautySalonBookings') || '[]')
    setBookings(storedBookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setPassword('')
    } else {
      alert('كلمة المرور غير صحيحة')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setPassword('')
  }

  const updateBookingStatus = (bookingId, newStatus) => {
    const updatedBookings = bookings.map(booking =>
      booking.id === bookingId ? { ...booking, status: newStatus } : booking
    )
    setBookings(updatedBookings)
    localStorage.setItem('beautySalonBookings', JSON.stringify(updatedBookings))
  }

  const deleteBooking = (bookingId) => {
    if (window.confirm('هل أنت متأكد من حذف هذا الحجز؟')) {
      const updatedBookings = bookings.filter(booking => booking.id !== bookingId)
      setBookings(updatedBookings)
      localStorage.setItem('beautySalonBookings', JSON.stringify(updatedBookings))
    }
  }

  const filteredBookings = bookings.filter(booking => {
    const matchesFilter = filter === 'all' || booking.status === filter
    const matchesSearch = booking.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.phoneNumber.includes(searchTerm) ||
                         booking.serviceType.includes(searchTerm)
    return matchesFilter && matchesSearch
  })

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { text: 'في الانتظار', color: 'bg-yellow-100 text-yellow-800' },
      confirmed: { text: 'مؤكد', color: 'bg-green-100 text-green-800' },
      completed: { text: 'مكتمل', color: 'bg-blue-100 text-blue-800' },
      cancelled: { text: 'ملغي', color: 'bg-red-100 text-red-800' }
    }
    
    const config = statusConfig[status] || statusConfig.pending
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        {config.text}
      </span>
    )
  }

  const getServiceLabel = (serviceValue) => {
    const services = {
      'facial': 'العناية بالوجه',
      'manicure': 'العناية بالأظافر',
      'waxing': 'إزالة الشعر',
      'haircut': 'تصفيف الشعر',
      'makeup': 'المكياج',
      'natural-treatments': 'العلاجات الطبيعية'
    }
    return services[serviceValue] || serviceValue
  }

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-16">
        <div className="card">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-beauty-text mb-2 hero-gradient bg-clip-text text-transparent">
              صفحة الإدارة
            </h1>
            <p className="text-beauty-muted">
              أدخلي كلمة المرور للوصول إلى لوحة الإدارة
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="label">
                كلمة المرور
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="أدخلي كلمة المرور"
                required
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              تسجيل الدخول
            </button>
          </form>

          <div className="mt-6 p-4 bg-beauty-light rounded-2xl">
            <p className="text-sm text-beauty-muted text-center">
              كلمة المرور الافتراضية: <span className="font-mono text-beauty-primary font-bold">admin123</span>
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-beauty-text mb-2 hero-gradient bg-clip-text text-transparent">
            لوحة الإدارة - إدارة الحجوزات
          </h1>
          <p className="text-beauty-muted">
            إجمالي الحجوزات: <span className="font-bold text-beauty-primary">{bookings.length}</span> | المعلقة: <span className="font-bold text-beauty-accent">{bookings.filter(b => b.status === 'pending').length}</span>
          </p>
        </div>
        
        <button
          onClick={handleLogout}
          className="btn-secondary mt-4 md:mt-0"
        >
          تسجيل الخروج
        </button>
      </div>

      {/* Filters and Search */}
      <div className="card mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="filter" className="label">
              تصفية حسب الحالة
            </label>
            <select
              id="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="input-field"
            >
              <option value="all">جميع الحجوزات</option>
              <option value="pending">في الانتظار</option>
              <option value="confirmed">مؤكد</option>
              <option value="completed">مكتمل</option>
              <option value="cancelled">ملغي</option>
            </select>
          </div>

          <div>
            <label htmlFor="search" className="label">
              البحث
            </label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field"
              placeholder="البحث بالاسم أو رقم الهاتف..."
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={loadBookings}
              className="btn-primary w-full"
            >
              تحديث البيانات
            </button>
          </div>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="card">
        {filteredBookings.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-beauty-muted mb-2">
              لا توجد حجوزات
            </h3>
            <p className="text-beauty-muted">
              {filter === 'all' ? 'لم يتم العثور على أي حجوزات' : 'لا توجد حجوزات بالحالة المحددة'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">الاسم</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">الهاتف</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">الخدمة</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">التاريخ</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">الوقت</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">الحالة</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">{booking.fullName}</td>
                    <td className="py-3 px-4">{booking.phoneNumber}</td>
                    <td className="py-3 px-4">{getServiceLabel(booking.serviceType)}</td>
                    <td className="py-3 px-4">{booking.preferredDate}</td>
                    <td className="py-3 px-4">{booking.preferredTime}</td>
                    <td className="py-3 px-4">{getStatusBadge(booking.status)}</td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-2">
                        {booking.status === 'pending' && (
                          <>
                            <button
                              onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                              className="px-3 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"
                            >
                              تأكيد
                            </button>
                            <button
                              onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                              className="px-3 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600"
                            >
                              إلغاء
                            </button>
                          </>
                        )}
                        {booking.status === 'confirmed' && (
                          <button
                            onClick={() => updateBookingStatus(booking.id, 'completed')}
                            className="px-3 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600"
                          >
                            مكتمل
                          </button>
                        )}
                        <button
                          onClick={() => deleteBooking(booking.id)}
                          className="px-3 py-1 bg-gray-500 text-white rounded text-xs hover:bg-gray-600"
                        >
                          حذف
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Booking Details Modal */}
      {bookings.length > 0 && (
        <div className="mt-8 card bg-beauty-soft-pink">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">تفاصيل إضافية</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>أحدث حجز:</strong> {bookings[0]?.fullName} - {bookings[0]?.preferredDate}</p>
            </div>
            <div>
              <p><strong>آخر تحديث:</strong> {new Date().toLocaleDateString('ar-SA')}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Admin

