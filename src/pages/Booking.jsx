import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Booking = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const services = [
    { value: 'facial', label: 'العناية بالوجه', price: '150 ريال' },
    { value: 'manicure', label: 'العناية بالأظافر', price: '80 ريال' },
    { value: 'waxing', label: 'إزالة الشعر', price: '120 ريال' },
    { value: 'haircut', label: 'تصفيف الشعر', price: '200 ريال' },
    { value: 'makeup', label: 'المكياج', price: '250 ريال' },
    { value: 'natural-treatments', label: 'العلاجات الطبيعية', price: '180 ريال' }
  ]

  const timeSlots = [
    '9:00 صباحاً', '10:00 صباحاً', '11:00 صباحاً', '12:00 ظهراً',
    '1:00 مساءً', '2:00 مساءً', '3:00 مساءً', '4:00 مساءً',
    '5:00 مساءً', '6:00 مساءً', '7:00 مساءً', '8:00 مساءً'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const generateWhatsAppMessage = (bookingData) => {
    const selectedService = services.find(s => s.value === bookingData.serviceType)
    const message = `تم استلام حجز جديد من ${bookingData.fullName}، لخدمة ${selectedService?.label || bookingData.serviceType} بتاريخ ${bookingData.preferredDate} الساعة ${bookingData.preferredTime}. رقم الهاتف: ${bookingData.phoneNumber}`
    return encodeURIComponent(message)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save booking to localStorage
      const bookingId = Date.now().toString()
      const booking = {
        id: bookingId,
        ...formData,
        createdAt: new Date().toISOString(),
        status: 'pending'
      }

      const existingBookings = JSON.parse(localStorage.getItem('beautySalonBookings') || '[]')
      existingBookings.push(booking)
      localStorage.setItem('beautySalonBookings', JSON.stringify(existingBookings))

      // Generate WhatsApp message
      const whatsappMessage = generateWhatsAppMessage(formData)
      const whatsappUrl = `https://api.whatsapp.com/send?phone=966501234567&text=${whatsappMessage}`
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank')

      setShowSuccess(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          phoneNumber: '',
          serviceType: '',
          preferredDate: '',
          preferredTime: '',
          notes: ''
        })
        setShowSuccess(false)
        navigate('/')
      }, 3000)

    } catch (error) {
      console.error('Error saving booking:', error)
      alert('حدث خطأ أثناء حفظ الحجز. يرجى المحاولة مرة أخرى.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getMinDate = () => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  const getMaxDate = () => {
    const today = new Date()
    const maxDate = new Date(today)
    maxDate.setDate(maxDate.getDate() + 30)
    return maxDate.toISOString().split('T')[0]
  }

  if (showSuccess) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
        <div className="card text-center p-6 md:p-8">
          <div className="text-4xl md:text-6xl mb-4 md:mb-6">✅</div>
          <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-3 md:mb-4">
            تم إرسال طلب الحجز بنجاح!
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
            شكراً لك! تم حفظ تفاصيل حجزك وسيتم التواصل معك قريباً لتأكيد الموعد.
          </p>
          <p className="text-sm text-gray-500">
            سيتم توجيهك إلى الصفحة الرئيسية خلال لحظات...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-2">
      <div className="text-center mb-3">
        <h1 className="text-xl md:text-2xl font-bold text-beauty-text mb-1 hero-gradient bg-clip-text text-transparent">
          احجزي موعدك
        </h1>
        <p className="text-xs md:text-sm text-beauty-muted">
          املئي النموذج أدناه وسنقوم بالتواصل معك لتأكيد الموعد
        </p>
      </div>

      <div className="card p-4">
        <form onSubmit={handleSubmit} className="space-y-2">
          {/* Name and Phone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label htmlFor="fullName" className="label text-xs md:text-sm mb-1">
                الاسم الكامل *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="input-field py-2 text-sm"
                placeholder="الاسم الكامل"
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="label text-xs md:text-sm mb-1">
                رقم الهاتف *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="input-field py-2 text-sm"
                placeholder="+966501234567"
                required
              />
            </div>
          </div>

          {/* Service Type */}
          <div>
            <label htmlFor="serviceType" className="label text-xs md:text-sm mb-1">
              نوع الخدمة *
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              className="input-field py-2 text-sm"
              required
            >
              <option value="">اختيار الخدمة</option>
              {services.map(service => (
                <option key={service.value} value={service.value}>
                  {service.label} - {service.price}
                </option>
              ))}
            </select>
          </div>

          {/* Date and Time Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label htmlFor="preferredDate" className="label text-xs md:text-sm mb-1">
                التاريخ المفضل *
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                className="input-field py-2 text-sm"
                min={getMinDate()}
                max={getMaxDate()}
                required
              />
            </div>
            <div>
              <label htmlFor="preferredTime" className="label text-xs md:text-sm mb-1">
                الوقت المفضل *
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="input-field py-2 text-sm"
                required
              >
                <option value="">اختيار الوقت</option>
                {timeSlots.map(time => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label htmlFor="notes" className="label text-xs md:text-sm mb-1">
              ملاحظات إضافية (اختياري)
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              className="input-field py-2 text-sm"
              rows={2}
              placeholder="أي ملاحظات أو طلبات خاصة..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary text-sm md:text-base px-6 py-2 md:py-3 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'جاري الإرسال...' : 'إرسال طلب الحجز'}
            </button>
          </div>
        </form>
      </div>

      {/* Info Section - Compact */}
      <div className="mt-3 p-3 bg-beauty-light rounded-lg">
        <p className="text-xs text-beauty-muted text-center">
          <span className="font-semibold">ملاحظة:</span> سيتم تأكيد الموعد خلال 24 ساعة • للحضور قبل الموعد بـ 10 دقائق • للاستفسارات: +966 50 123 4567
        </p>
      </div>
    </div>
  )
}

export default Booking

