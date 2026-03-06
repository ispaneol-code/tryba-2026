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
      <section className="bg-brand-dark py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6">
              <span className="text-brand-orange">Контакты</span>
            </h1>
            <p className="text-xl text-brand-white/70 max-w-3xl">
              Свяжитесь с нами для консультации, расчёта стоимости или оформления заказа
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Контакты + Форма */}
      <section className="section bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Контактная информация */}
            <FadeIn>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-brand-white mb-6">
                    Связаться с нами
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="text-brand-orange text-2xl">📍</span>
                      <div>
                        <div className="text-brand-white font-semibold">Юридический адрес</div>
                        <div className="text-brand-white/70">
                          620110, Свердловская область, г. Екатеринбург,<br />
                          ул. Краснолесья стр.12А, оф.642
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-brand-orange text-2xl">📞</span>
                      <div>
                        <div className="text-brand-white font-semibold">Телефон</div>
                        <a href="tel:+73431234567" className="text-brand-white/70 hover:text-brand-orange transition-colors">
                          +7 (343) 123-45-67
                        </a>
                        <div className="text-brand-white/50 text-sm">Екатеринбург</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-brand-orange text-2xl">✉️</span>
                      <div>
                        <div className="text-brand-white font-semibold">Email</div>
                        <a href="mailto:info@uralmet.ru" className="text-brand-white/70 hover:text-brand-orange transition-colors">
                          info@uralmet.ru
                        </a>
                        <div className="text-brand-white/70">
                          sales@uralmet.ru — отдел продаж
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-brand-orange text-2xl">🕐</span>
                      <div>
                        <div className="text-brand-white font-semibold">Режим работы</div>
                        <div className="text-brand-white/70">
                          Пн-Пт: 09:00 - 18:00 (ЕКБ)<br />
                          Сб-Вс: выходные
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Реквизиты */}
                <div className="p-6 bg-brand-dark rounded-xl">
                  <h3 className="text-lg font-bold text-brand-white mb-4">
                    Реквизиты компании
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-brand-white/60">Наименование</span>
                      <span className="text-brand-white">ООО «УралМет»</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-white/60">Полное наименование</span>
                      <span className="text-brand-white text-right ml-4">Общество с ограниченной ответственностью «УралМет»</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-white/60">ИНН/КПП</span>
                      <span className="text-brand-white">6679058883 / 667101001</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-white/60">ОГРН</span>
                      <span className="text-brand-white">1146679030520</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-white/60">ОКПО</span>
                      <span className="text-brand-white">44146124</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-white/60">ОКАТО</span>
                      <span className="text-brand-white">65401390000</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Форма заявки */}
            <FadeIn delay={200}>
              <form onSubmit={handleSubmit} className="card">
                <h2 className="text-2xl font-bold text-brand-white mb-6">
                  Оставить заявку
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-brand-white/70 text-sm mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-brand-black border border-brand-white/20 rounded-lg text-brand-white placeholder-brand-white/40 focus:outline-none focus:border-brand-orange transition-colors"
                      placeholder="Иван Иванов"
                    />
                  </div>

                  <div>
                    <label className="block text-brand-white/70 text-sm mb-2">
                      Компания
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-black border border-brand-white/20 rounded-lg text-brand-white placeholder-brand-white/40 focus:outline-none focus:border-brand-orange transition-colors"
                      placeholder="ООО «Пример»"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-brand-white/70 text-sm mb-2">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-brand-black border border-brand-white/20 rounded-lg text-brand-white placeholder-brand-white/40 focus:outline-none focus:border-brand-orange transition-colors"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-white/70 text-sm mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-brand-black border border-brand-white/20 rounded-lg text-brand-white placeholder-brand-white/40 focus:outline-none focus:border-brand-orange transition-colors"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-brand-white/70 text-sm mb-2">
                      Сообщение *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-brand-black border border-brand-white/20 rounded-lg text-brand-white placeholder-brand-white/40 focus:outline-none focus:border-brand-orange transition-colors resize-none"
                      placeholder="Опишите ваш запрос..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary w-full py-4 text-lg font-semibold"
                  >
                    Отправить заявку
                  </button>

                  <p className="text-brand-white/40 text-xs text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Карта */}
      <section className="section bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-white mb-12 text-center w-full">
              Как до нас добраться
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Информация + Фото */}
              <div className="lg:col-span-1 space-y-4">
                <div className="card">
                  <h3 className="text-lg font-bold text-brand-white mb-4">
                    Адрес офиса
                  </h3>
                  <div className="space-y-3 text-brand-white/70">
                    <div className="flex items-start gap-3">
                      <span className="text-brand-orange text-xl">📍</span>
                      <div>
                        <div className="font-semibold text-brand-white">
                          г. Екатеринбург
                        </div>
                        <div>ул. Краснолесья стр.12А, оф.642</div>
                        <div className="text-sm text-brand-white/50">
                          Индекс: 620110
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="text-brand-orange text-xl">🚇</span>
                      <div>
                        <div className="font-semibold text-brand-white">
                          Ближайшее метро
                        </div>
                        <div>Чкаловская (15 мин на такси)</div>
                        <div className="text-sm text-brand-white/50">
                          Геологическая (20 мин на такси)
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-brand-orange text-xl">🚗</span>
                      <div>
                        <div className="font-semibold text-brand-white">
                          Парковка
                        </div>
                        <div>Гостевая парковка на территории</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Фото офиса */}
                <div className="rounded-xl overflow-hidden border-2 border-brand-orange/30">
                  <img 
                    src={officeImg} 
                    alt="Офис УралМет" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <a
                  href="https://yandex.ru/maps/-/CDU~vZqK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block"
                >
                  Построить маршрут →
                </a>
              </div>

              {/* Карта */}
              <div className="lg:col-span-2 rounded-xl overflow-hidden border-2 border-brand-orange/30 shadow-2xl h-[600px]">
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