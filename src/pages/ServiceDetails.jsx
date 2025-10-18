import React from 'react'
import { useParams, Link } from 'react-router-dom'

const ServiceDetails = () => {
  const { serviceId } = useParams()

  const serviceData = {
    facial: {
      title: 'العناية بالوجه',
      price: '150 ₪',
      duration: '60 دقيقة',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop&crop=face',
      description: 'خدمة شاملة للعناية بالوجه للحصول على بشرة نضرة ومشرقة',
      benefits: [
        'تنظيف عميق للوجه وإزالة الشوائب',
        'تقشير لطيف لإزالة الخلايا الميتة',
        'أقنعة طبيعية مغذية للبشرة',
        'تدليك مريح للوجه والعنق',
        'ترطيب عميق للبشرة',
        'حماية من أشعة الشمس الضارة'
      ],
      process: [
        'استشارة أولية لتحديد نوع البشرة',
        'تنظيف الوجه بمستحضرات طبيعية',
        'تقشير لطيف لإزالة الخلايا الميتة',
        'استخراج الرؤوس السوداء والبيضاء',
        'وضع قناع مناسب لنوع البشرة',
        'تدليك مريح للوجه والعنق',
        'ترطيب نهائي وحماية من الشمس'
      ],
      suitable: 'مناسب لجميع أنواع البشرة',
      note: 'يُنصح بتكرار الجلسة كل 4-6 أسابيع للحصول على أفضل النتائج'
    },
    manicure: {
      title: 'العناية بالأظافر',
      price: '80 ₪',
      duration: '45 دقيقة',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop',
      description: 'خدمة شاملة للعناية بالأظافر وتجميلها بأحدث التقنيات',
      benefits: [
        'تنظيف وتقليم الأظافر',
        'إزالة الجلد الميت حول الأظافر',
        'تشكيل الأظافر حسب الطلب',
        'طلاء بألوان عصرية وثابتة',
        'تدليك لطيف لليدين',
        'ترطيب عميق لليدين والأظافر'
      ],
      process: [
        'تنظيف اليدين والأظافر',
        'تقليم وتشكيل الأظافر',
        'إزالة الجلد الميت والزوايد',
        'برد لطيف لسطح الأظافر',
        'تدليك مريح لليدين',
        'طلاء قاعدة حماية',
        'طلاء بالألوان المطلوبة',
        'طلاء نهائي لامع'
      ],
      suitable: 'مناسب لجميع الأعمار',
      note: 'يُنصح بتجنب الماء الساخن لمدة ساعتين بعد الجلسة'
    },
    waxing: {
      title: 'إزالة الشعر',
      price: '120 ₪',
      duration: '30 دقيقة',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop',
      description: 'خدمة إزالة الشعر بطريقة آمنة وفعالة باستخدام الشمع الطبيعي',
      benefits: [
        'إزالة الشعر من الجذور',
        'نتائج تدوم لفترة أطول',
        'تقليل نمو الشعر تدريجياً',
        'تقشير لطيف للجلد',
        'تقليل ظهور الشعر الداخلي',
        'بشرة ناعمة ونظيفة'
      ],
      process: [
        'تنظيف المنطقة المراد إزالة الشعر منها',
        'وضع بودرة لامتصاص الرطوبة',
        'تسخين الشمع الطبيعي',
        'وضع الشمع في اتجاه نمو الشعر',
        'إزالة الشعر في الاتجاه المعاكس',
        'تنظيف المنطقة من بقايا الشمع',
        'وضع مرطب مهدئ للبشرة'
      ],
      suitable: 'مناسب لجميع مناطق الجسم',
      note: 'يُنصح بتجنب التعرض للشمس لمدة 24 ساعة بعد الجلسة'
    },
    haircut: {
      title: 'تصفيف الشعر',
      price: '200 ₪',
      duration: '90 دقيقة',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop',
      description: 'خدمة شاملة لتصفيف وتجميل الشعر بأحدث الصيحات العالمية',
      benefits: [
        'استشارة أخصائية لتحديد القصة المناسبة',
        'قص احترافي حسب شكل الوجه',
        'غسل وتنظيف عميق للشعر',
        'ترطيب وتغذية للشعر',
        'تصفيف بأحدث الأدوات',
        'نصائح للعناية اليومية'
      ],
      process: [
        'استشارة أولية لاختيار القصة المناسبة',
        'غسل الشعر بشامبو مناسب',
        'قص الشعر حسب التصميم المطلوب',
        'غسل ثاني وترطيب عميق',
        'تصفيف الشعر بالأدوات الحديثة',
        'إعطاء نصائح للعناية المنزلية'
      ],
      suitable: 'مناسب لجميع أنواع الشعر',
      note: 'يُنصح بتحديد موعد كل 6-8 أسابيع للحفاظ على الشكل'
    },
    makeup: {
      title: 'المكياج',
      price: '250 ₪',
      duration: '120 دقيقة',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop',
      description: 'خدمة مكياج احترافية للمناسبات والتصوير بأفضل المنتجات',
      benefits: [
        'استشارة أخصائية لاختيار الألوان المناسبة',
        'مكياج طويل الأمد يدوم طوال اليوم',
        'استخدام منتجات عالية الجودة',
        'تقنيات احترافية في التطبيق',
        'مكياج مناسب للإضاءة والتصوير',
        'تعليم أساسيات المكياج'
      ],
      process: [
        'تحضير البشرة وتنظيفها',
        'وضع قاعدة حماية ومرطب',
        'تطبيق الكونسيلر للأماكن المطلوبة',
        'وضع الفاونديشن المناسب للون البشرة',
        'تلوين العيون بألوان متناسقة',
        'تطبيق الماسكارا والآيلاينر',
        'تلوين الخدود والشفاه',
        'تثبيت المكياج ببودرة شفافة'
      ],
      suitable: 'مناسب لجميع المناسبات',
      note: 'يُنصح بجلب صور للمكياج المطلوب للحصول على أفضل النتائج'
    },
    'natural-treatments': {
      title: 'العلاجات الطبيعية',
      price: '180 ₪',
      duration: '75 دقيقة',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=400&fit=crop',
      description: 'علاجات طبيعية بالزيوت والأعشاب للعناية الشاملة بالبشرة والشعر',
      benefits: [
        'استخدام مكونات طبيعية 100%',
        'علاجات مهدئة ومريحة',
        'تقليل الالتهابات والتهيج',
        'ترطيب طبيعي عميق',
        'تقوية الشعر والجلد',
        'نتائج طويلة الأمد'
      ],
      process: [
        'تشخيص حالة الشعر أو البشرة',
        'اختيار العلاج الطبيعي المناسب',
        'تحضير الخليط من الأعشاب والزيوت',
        'تطبيق العلاج على المنطقة المطلوبة',
        'تدليك مريح لتحفيز الدورة الدموية',
        'ترك العلاج لمدة مناسبة',
        'غسل وتنظيف المنطقة',
        'ترطيب نهائي بزيت طبيعي'
      ],
      suitable: 'مناسب للبشرة الحساسة',
      note: 'يُنصح بإجراء اختبار حساسية قبل الجلسة الكاملة'
    }
  }

  const service = serviceData[serviceId]

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-beauty-text mb-4">الخدمة غير موجودة</h1>
          <Link to="/" className="btn-primary">العودة للصفحة الرئيسية</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="text-center mb-6">
        <Link to="/" className="text-beauty-primary hover:text-beauty-secondary mb-4 inline-block">
          ← العودة للصفحة الرئيسية
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold text-beauty-text mb-2 hero-gradient bg-clip-text text-transparent">
          {service.title}
        </h1>
        <div className="flex justify-center items-center gap-4 text-sm md:text-base text-beauty-muted">
          <span>💰 {service.price}</span>
          <span>⏱️ {service.duration}</span>
        </div>
      </div>

      {/* Service Image */}
      <div className="mb-6">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Service Description */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-beauty-text mb-3">وصف الخدمة</h2>
        <p className="text-beauty-muted leading-relaxed">{service.description}</p>
      </div>

      {/* Benefits */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-beauty-text mb-4">الفوائد</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {service.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2 text-beauty-muted">
              <span className="text-beauty-primary mt-1">✓</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Process */}
      <div className="card mb-6">
        <h2 className="text-xl font-bold text-beauty-text mb-4">خطوات الجلسة</h2>
        <ol className="space-y-2">
          {service.process.map((step, index) => (
            <li key={index} className="flex items-start gap-3 text-beauty-muted">
              <span className="bg-beauty-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="card">
          <h3 className="text-lg font-bold text-beauty-text mb-2">المناسب لـ</h3>
          <p className="text-beauty-muted">{service.suitable}</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-bold text-beauty-text mb-2">ملاحظة مهمة</h3>
          <p className="text-beauty-muted">{service.note}</p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          to="/booking"
          className="btn-primary text-lg px-8 py-4"
        >
          احجزي موعدك الآن
        </Link>
      </div>
    </div>
  )
}

export default ServiceDetails
