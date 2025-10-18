import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Hero Section */}
      <div className="text-center mb-6">
        <div className="hero-gradient rounded-2xl p-6 md:p-8 shadow-xl">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
            مرحباً بك في صالون الجمال
          </h1>
          <p className="text-sm md:text-lg text-white mb-4 max-w-2xl mx-auto opacity-95">
            نحن نقدم أفضل خدمات التجميل والعناية بالجمال في أجواء من الفخامة والراحة
          </p>
          <Link
            to="/booking"
            className="bg-white text-beauty-primary hover:bg-beauty-light font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl inline-block transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            احجزي موعدك الآن 💄
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-center text-beauty-text mb-6 hero-gradient bg-clip-text text-transparent">
          خدماتنا المميزة
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          <div className="service-card text-center p-3">
            <div className="w-full h-20 md:h-24 mb-2 rounded-lg overflow-hidden bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop&crop=face" 
                alt="العناية بالوجه"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden text-2xl text-pink-400">✨</div>
            </div>
            <h3 className="text-xs md:text-sm font-bold text-beauty-text mb-1">العناية بالوجه</h3>
            <p className="text-xs text-beauty-muted mb-1 hidden md:block">
              تنظيف عميق للوجه
            </p>
            <span className="text-beauty-primary font-bold text-xs">150 ريال</span>
          </div>

          <div className="service-card text-center p-3">
            <div className="w-full h-20 md:h-24 mb-2 rounded-lg overflow-hidden bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop" 
                alt="العناية بالأظافر"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden text-2xl text-purple-400">💅</div>
            </div>
            <h3 className="text-xs md:text-sm font-bold text-beauty-text mb-1">العناية بالأظافر</h3>
            <p className="text-xs text-beauty-muted mb-1 hidden md:block">
              مانيكير وباديكير
            </p>
            <span className="text-beauty-primary font-bold text-xs">80 ريال</span>
          </div>

          <div className="service-card text-center p-3">
            <div className="w-full h-20 md:h-24 mb-2 rounded-lg overflow-hidden bg-gradient-to-br from-rose-200 to-rose-300 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop" 
                alt="إزالة الشعر"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden text-2xl text-rose-400">🧴</div>
            </div>
            <h3 className="text-xs md:text-sm font-bold text-beauty-text mb-1">إزالة الشعر</h3>
            <p className="text-xs text-beauty-muted mb-1 hidden md:block">
              بالشمع أو الليزر
            </p>
            <span className="text-beauty-primary font-bold text-xs">120 ريال</span>
          </div>

          <div className="service-card text-center p-3">
            <div className="w-full h-20 md:h-24 mb-2 rounded-lg overflow-hidden bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop" 
                alt="تصفيف الشعر"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden text-2xl text-amber-400">💇‍♀️</div>
            </div>
            <h3 className="text-xs md:text-sm font-bold text-beauty-text mb-1">تصفيف الشعر</h3>
            <p className="text-xs text-beauty-muted mb-1 hidden md:block">
              قص وتصفيف
            </p>
            <span className="text-beauty-primary font-bold text-xs">200 ريال</span>
          </div>

          <div className="service-card text-center p-3">
            <div className="w-full h-20 md:h-24 mb-2 rounded-lg overflow-hidden bg-gradient-to-br from-red-200 to-red-300 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop" 
                alt="المكياج"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden text-2xl text-red-400">💄</div>
            </div>
            <h3 className="text-xs md:text-sm font-bold text-beauty-text mb-1">المكياج</h3>
            <p className="text-xs text-beauty-muted mb-1 hidden md:block">
              للمناسبات
            </p>
            <span className="text-beauty-primary font-bold text-xs">250 ريال</span>
          </div>

          <div className="service-card text-center p-3">
            <div className="w-full h-20 md:h-24 mb-2 rounded-lg overflow-hidden bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop" 
                alt="العلاجات الطبيعية"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden text-2xl text-green-400">🌿</div>
            </div>
            <h3 className="text-xs md:text-sm font-bold text-beauty-text mb-1">العلاجات الطبيعية</h3>
            <p className="text-xs text-beauty-muted mb-1 hidden md:block">
              بالزيوت والأعشاب
            </p>
            <span className="text-beauty-primary font-bold text-xs">180 ريال</span>
          </div>
        </div>
      </div>

      {/* Working Hours */}
      <div className="card text-center mb-6 p-4">
        <h2 className="text-lg md:text-xl font-bold text-beauty-text mb-4 hero-gradient bg-clip-text text-transparent">ساعات العمل</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-3 bg-beauty-light rounded-lg">
            <h3 className="text-sm md:text-base font-bold text-beauty-primary mb-1">الأيام العادية</h3>
            <p className="text-xs md:text-sm text-beauty-muted">السبت - الخميس</p>
            <p className="text-xs md:text-sm text-beauty-muted">9:00 ص - 9:00 م</p>
          </div>
          <div className="p-3 bg-beauty-light rounded-lg">
            <h3 className="text-sm md:text-base font-bold text-beauty-primary mb-1">يوم الجمعة</h3>
            <p className="text-xs md:text-sm text-beauty-muted">2:00 م - 10:00 م</p>
          </div>
        </div>
        <div className="mt-3 p-3 bg-beauty-gradient rounded-lg">
          <p className="text-white text-sm md:text-base">
            📞 للاستفسارات: <span className="font-bold">+966 50 123 4567</span>
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center hero-gradient rounded-2xl p-6 md:p-8 text-white shadow-xl">
        <h2 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 drop-shadow-lg">
          احجزي موعدك اليوم واستمتعي بأفضل خدمات التجميل
        </h2>
        <p className="text-sm md:text-base mb-4 md:mb-6 opacity-95">
          فريقنا المحترف في انتظارك لتقديم أجود الخدمات
        </p>
        <Link
          to="/booking"
          className="bg-white text-beauty-primary hover:bg-beauty-light font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl text-sm md:text-base transition-all duration-300 transform hover:scale-105 inline-block shadow-lg"
        >
          احجز موعدك الآن
        </Link>
      </div>
    </div>
  )
}

export default Home

