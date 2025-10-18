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
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="card text-center">
          <div className="text-6xl mb-6">✅</div>
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            تم إرسال طلب الحجز بنجاح!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
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
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-beauty-text mb-4 hero-gradient bg-clip-text text-transparent">
          احجزي موعدك
        </h1>
        <p className="text-lg text-beauty-muted">
          املئي النموذج أدناه وسنقوم بالتواصل معك لتأكيد الموعد
        </p>
      </div>

      <div className="card">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="label">
              الاسم الكامل *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="input-field"
              placeholder="أدخلي اسمك الكامل"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="label">
              رقم الهاتف *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="input-field"
              placeholder="مثال: +966501234567"
              required
            />
          </div>

          {/* Service Type */}
          <div>
            <label htmlFor="serviceType" className="label">
              نوع الخدمة *
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              className="input-field"
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

          {/* Preferred Date */}
          <div>
            <label htmlFor="preferredDate" className="label">
              التاريخ المفضل *
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleInputChange}
              className="input-field"
              min={getMinDate()}
              max={getMaxDate()}
              required
            />
          </div>

          {/* Preferred Time */}
          <div>
            <label htmlFor="preferredTime" className="label">
              الوقت المفضل *
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleInputChange}
              className="input-field"
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

          {/* Notes */}
          <div>
            <label htmlFor="notes" className="label">
              ملاحظات إضافية (اختياري)
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              className="input-field"
              rows={4}
              placeholder="أي ملاحظات أو طلبات خاصة..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary text-lg px-8 py-4 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'جاري الإرسال...' : 'إرسال طلب الحجز'}
            </button>
          </div>
        </form>
      </div>

      {/* Info Section */}
      <div className="mt-8 card bg-beauty-light">
        <h3 className="text-lg font-bold text-beauty-text mb-3">معلومات مهمة:</h3>
        <ul className="text-beauty-muted space-y-2 text-sm">
          <li>• سيتم تأكيد الموعد خلال 24 ساعة</li>
          <li>• يرجى الحضور قبل الموعد بـ 10 دقائق</li>
          <li>• يمكن إلغاء أو تغيير الموعد قبل 24 ساعة من الموعد المحدد</li>
          <li>• للاستفسارات: +966 50 123 4567</li>
        </ul>
      </div>
    </div>
  )
}

export default Booking

