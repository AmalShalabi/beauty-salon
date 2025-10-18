import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="hero-gradient rounded-3xl p-12 mb-8 shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            مرحباً بك في صالون الجمال
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
            نحن نقدم أفضل خدمات التجميل والعناية بالجمال في أجواء من الفخامة والراحة
          </p>
          <Link
            to="/booking"
            className="bg-white text-beauty-primary hover:bg-beauty-light font-bold text-lg px-10 py-5 rounded-2xl inline-block transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            احجزي موعدك الآن 💄
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-beauty-text mb-12 hero-gradient bg-clip-text text-transparent">
          خدماتنا المميزة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-card text-center">
            <div className="w-full h-48 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop&crop=face" 
                alt="العناية بالوجه"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden text-6xl text-pink-400">✨</div>
            </div>
            <h3 className="text-xl font-bold text-beauty-text mb-3">العناية بالوجه</h3>
            <p className="text-beauty-muted mb-4">
              تنظيف عميق للوجه مع أقنعة طبيعية للحصول على بشرة نضرة ومشرقة
            </p>
            <span className="text-beauty-primary font-bold text-lg">من 150 ريال</span>
          </div>

          <div className="service-card text-center">
            <div className="w-full h-48 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop" 
                alt="العناية بالأظافر"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden text-6xl text-purple-400">💅</div>
            </div>
            <h3 className="text-xl font-bold text-beauty-text mb-3">العناية بالأظافر</h3>
            <p className="text-beauty-muted mb-4">
              مانيكير وباديكير بأحدث التقنيات والألوان العصرية
            </p>
            <span className="text-beauty-primary font-bold text-lg">من 80 ريال</span>
          </div>

          <div className="service-card text-center">
            <div className="w-full h-48 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-rose-200 to-rose-300 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop" 
                alt="إزالة الشعر"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden text-6xl text-rose-400">🧴</div>
            </div>
            <h3 className="text-xl font-bold text-beauty-text mb-3">إزالة الشعر</h3>
            <p className="text-beauty-muted mb-4">
              إزالة الشعر بالشمع أو الليزر بطريقة آمنة وفعالة
            </p>
            <span className="text-beauty-primary font-bold text-lg">من 120 ريال</span>
          </div>

          <div className="service-card text-center">
            <div className="w-full h-48 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop" 
                alt="تصفيف الشعر"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden text-6xl text-amber-400">💇‍♀️</div>
            </div>
            <h3 className="text-xl font-bold text-beauty-text mb-3">تصفيف الشعر</h3>
            <p className="text-beauty-muted mb-4">
              قص وتصفيف الشعر بأحدث الصيحات العالمية
            </p>
            <span className="text-beauty-primary font-bold text-lg">من 200 ريال</span>
          </div>

          <div className="service-card text-center">
            <div className="w-full h-48 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-red-200 to-red-300 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop" 
                alt="المكياج"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden text-6xl text-red-400">💄</div>
            </div>
            <h3 className="text-xl font-bold text-beauty-text mb-3">المكياج</h3>
            <p className="text-beauty-muted mb-4">
              مكياج احترافي للمناسبات والتصوير
            </p>
            <span className="text-beauty-primary font-bold text-lg">من 250 ريال</span>
          </div>

          <div className="service-card text-center">
            <div className="w-full h-48 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop" 
                alt="العلاجات الطبيعية"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden text-6xl text-green-400">🌿</div>
            </div>
            <h3 className="text-xl font-bold text-beauty-text mb-3">العلاجات الطبيعية</h3>
            <p className="text-beauty-muted mb-4">
              علاجات طبيعية بالزيوت والأعشاب للعناية بالبشرة
            </p>
            <span className="text-beauty-primary font-bold text-lg">من 180 ريال</span>
          </div>
        </div>
      </div>

      {/* Working Hours */}
      <div className="card text-center mb-16">
        <h2 className="text-3xl font-bold text-beauty-text mb-6 hero-gradient bg-clip-text text-transparent">ساعات العمل</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-beauty-light rounded-2xl">
            <h3 className="text-xl font-bold text-beauty-primary mb-3">الأيام العادية</h3>
            <p className="text-beauty-muted">السبت - الخميس</p>
            <p className="text-beauty-muted">من 9:00 صباحاً إلى 9:00 مساءً</p>
          </div>
          <div className="p-6 bg-beauty-light rounded-2xl">
            <h3 className="text-xl font-bold text-beauty-primary mb-3">يوم الجمعة</h3>
            <p className="text-beauty-muted">من 2:00 مساءً إلى 10:00 مساءً</p>
          </div>
        </div>
        <div className="mt-6 p-6 bg-beauty-gradient rounded-2xl">
          <p className="text-white text-lg">
            📞 للاستفسارات والحجز: <span className="font-bold">+966 50 123 4567</span>
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center hero-gradient rounded-3xl p-12 text-white shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
          احجزي موعدك اليوم واستمتعي بأفضل خدمات التجميل
        </h2>
        <p className="text-xl mb-8 opacity-95">
          فريقنا المحترف في انتظارك لتقديم أجود الخدمات في أجواء من الرفاهية
        </p>
        <Link
          to="/booking"
          className="bg-white text-beauty-primary hover:bg-beauty-light font-bold py-5 px-10 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 inline-block shadow-xl"
        >
          احجز موعدك الآن
        </Link>
      </div>
    </div>
  )
}

export default Home

