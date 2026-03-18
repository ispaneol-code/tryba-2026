import { useState } from 'react'
import FadeIn from '../components/animations/FadeIn'

// Импорт изображений
import officeImg from '../assets/images/contact-office.jpg'

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', company: '', phone: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-black mb-6">
              <span className="text-gray-600">Контакты</span>
            </h1>
            <p className="text-xl text-brand-black/70 max-w-3xl">
              Свяжитесь с нами для консультации, расчёта стоимости или оформления заказа
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Контакты + Форма */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Контактная информация */}
            <FadeIn>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-brand-black mb-6">
                    Связаться с нами
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="text-gray-600 text-2xl" aria-hidden="true">📍</span>
                      <div>
                        <div className="text-brand-black font-semibold">Юридический адрес</div>
                        <div className="text-brand-black/70">
                          620110, Свердловская область, г. Екатеринбург,<br />
                          ул. Краснолесья стр.12А, оф.642
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-gray-600 text-2xl" aria-hidden="true">📞</span>
                      <div>
                        <div className="text-brand-black font-semibold">Телефон</div>
                        <a href="tel:+73431234567" className="text-brand-black/70 hover:text-gray-600 transition-colors">
                          +7 (343) 123-45-67
                        </a>
                        <div className="text-brand-black/50 text-sm">Екатеринбург</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-gray-600 text-2xl" aria-hidden="true">✉️</span>
                      <div>
                        <div className="text-brand-black font-semibold">Email</div>
                        <a href="mailto:info@uralmet.ru" className="text-brand-black/70 hover:text-gray-600 transition-colors">
                          info@uralmet.ru
                        </a>
                        <div className="text-brand-black/70">
                          sales@uralmet.ru — отдел продаж
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-gray-600 text-2xl" aria-hidden="true">🕐</span>
                      <div>
                        <div className="text-brand-black font-semibold">Режим работы</div>
                        <div className="text-brand-black/70">
                          Пн-Пт: 09:00 - 18:00 (ЕКБ)<br />
                          Сб-Вс: выходные
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Реквизиты */}
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-300">
                  <h3 className="text-lg font-bold text-brand-black mb-4">
                    Реквизиты компании
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-brand-black/60">Наименование</span>
                      <span className="text-brand-black">ООО «УралМет»</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-black/60">Полное наименование</span>
                      <span className="text-brand-black text-right ml-4">Общество с ограниченной ответственностью «УралМет»</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-black/60">ИНН/КПП</span>
                      <span className="text-brand-black">6679058883 / 667101001</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-black/60">ОГРН</span>
                      <span className="text-brand-black">1146679030520</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-black/60">ОКПО</span>
                      <span className="text-brand-black">44146124</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-black/60">ОКАТО</span>
                      <span className="text-brand-black">65401390000</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Форма заявки */}
            <FadeIn delay={200}>
              <form onSubmit={handleSubmit} className="card bg-white border border-gray-300 p-6 rounded-xl">
                <h2 className="text-2xl font-bold text-brand-black mb-6">
                  Оставить заявку
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-brand-black/70 text-sm mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-brand-black placeholder-brand-black/40 focus:outline-none focus:border-gray-600 transition-colors"
                      placeholder="Иван Иванов"
                    />
                  </div>

                  <div>
                    <label className="block text-brand-black/70 text-sm mb-2">
                      Компания
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-brand-black placeholder-brand-black/40 focus:outline-none focus:border-gray-600 transition-colors"
                      placeholder="ООО «Пример»"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-brand-black/70 text-sm mb-2">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-brand-black placeholder-brand-black/40 focus:outline-none focus:border-gray-600 transition-colors"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-black/70 text-sm mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-brand-black placeholder-brand-black/40 focus:outline-none focus:border-gray-600 transition-colors"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-brand-black/70 text-sm mb-2">
                      Сообщение *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-brand-black placeholder-brand-black/40 focus:outline-none focus:border-gray-600 transition-colors resize-none"
                      placeholder="Опишите ваш запрос..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary w-full py-4 text-lg font-semibold bg-gray-600 text-white hover:bg-gray-700"
                  >
                    Отправить заявку
                  </button>

                  <p className="text-brand-black/40 text-xs text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Карта */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-black mb-12 text-center w-full">
              Как до нас добраться
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Информация + Фото */}
              <div className="lg:col-span-1 space-y-4">
                <div className="card bg-white border border-gray-300 p-6">
                  <h3 className="text-lg font-bold text-brand-black mb-4">
                    Адрес офиса
                  </h3>
                  <div className="space-y-3 text-brand-black/70">
                    <div className="flex items-start gap-3">
                      <span className="text-gray-600 text-xl" aria-hidden="true">📍</span>
                      <div>
                        <div className="font-semibold text-brand-black">
                          г. Екатеринбург
                        </div>
                        <div>ул. Краснолесья стр.12А, оф.642</div>
                        <div className="text-sm text-brand-black/50">
                          Индекс: 620110
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-gray-600 text-xl" aria-hidden="true">🚇</span>
                      <div>
                        <div className="font-semibold text-brand-black">
                          Ближайшее метро
                        </div>
                        <div>Чкаловская (15 мин на такси)</div>
                        <div className="text-sm text-brand-black/50">
                          Геологическая (20 мин на такси)
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-gray-600 text-xl" aria-hidden="true">🚗</span>
                      <div>
                        <div className="font-semibold text-brand-black">
                          Парковка
                        </div>
                        <div>Гостевая парковка на территории</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Фото офиса */}
                <div className="rounded-xl overflow-hidden border-2 border-gray-300 bg-gray-100">
                  <img 
                    src={officeImg} 
                    alt="Офис УралМет в Екатеринбурге — ул. Краснолесья, контактный центр, приём заявок на трубный металлопрокат" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <a
                  href="https://yandex.ru/maps/-/CDU~vZqK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block bg-gray-600 text-white hover:bg-gray-700"
                >
                  Построить маршрут →
                </a>
              </div>

              {/* Карта */}
              <div className="lg:col-span-2 rounded-xl overflow-hidden border-2 border-gray-300 shadow-2xl h-[600px] bg-gray-100">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=60.547869%2C56.779338&z=17&pt=60.547869,56.779338,pm2rdm&l=map"
                  className="w-full h-full"
                  allowFullScreen={true}
                  title="УралМет офис на карте"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}