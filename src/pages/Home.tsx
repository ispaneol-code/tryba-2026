import { Link } from 'react-router-dom'
import FadeIn from '../components/animations/FadeIn'
import { STATS } from '../utils/constants'

// Импорт изображений
import heroBg from '../assets/images/hero-background.jpg'
import warehouseImg from '../assets/images/warehouse-storage.jpg'
import teamImg from '../assets/images/team-office.jpg'
import pipesImg from '../assets/images/pipes-products.jpg'

export default function Home() {
  return (
    <div className="pt-20">
      {/* ========== HERO СЕКЦИЯ ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black">
        {/* Фоновое изображение */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        
        {/* Градиент поверх фото */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/50 to-brand-black" />

        {/* Анимированные элементы */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-brand-white mb-2">
                Трубы и оборудование
              </span>
              <span className="block text-brand-orange">
                для нефтегазовой отрасли
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-brand-white/70 mb-10 max-w-3xl mx-auto">
              Поставляем продукцию из Единого реестра МТР ПАО "Газпром" 
              с доставкой по России, Узбекистану и Казахстану
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/products" 
                className="group relative px-8 py-4 bg-brand-orange text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/50"
              >
                <span className="relative z-10">Каталог продукции →</span>
                <div className="absolute inset-0 bg-brand-orangeHover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>

              <Link 
                to="/gazprom" 
                className="px-8 py-4 border-2 border-brand-orange text-brand-orange font-bold rounded-lg hover:bg-brand-orange hover:text-white transition-all duration-300 hover:scale-105"
              >
                Реестр Газпром
              </Link>
            </div>
          </FadeIn>

          {/* Стрелка вниз */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-1 h-3 bg-brand-orange rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ========== СТАТИСТИКА ========== */}
      <section className="py-16 bg-brand-dark border-y border-brand-orange/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="text-center group">
                  <div className="text-3xl md:text-5xl font-bold text-brand-orange mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.prefix}{stat.value.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-brand-white/70 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ФОТО №1: СКЛАД/ПРОИЗВОДСТВО ========== */}
      <section className="section bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
                Надёжные поставки <span className="text-brand-orange">под ключ</span>
              </h2>
              <p className="text-brand-white/70 mb-6">
                УралМет — специализированное предприятие по поставкам труб и оборудования 
                для нефтегазовой отрасли. Работаем напрямую с производителями и ПАО "Газпром".
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Продукция из Единого реестра МТР',
                  'Полный пакет сопроводительных документов',
                  'Доставка по РФ и странам СНГ',
                  'Гарантия качества и сервисное обслуживание'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 flex-shrink-0" />
                    <span className="text-brand-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-outline inline-block">
                Узнать больше о компании →
              </Link>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-orange to-brand-orange/50 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                
                <div className="relative rounded-2xl overflow-hidden border-2 border-brand-orange/30 bg-brand-dark aspect-video">
                  <img 
                    src={warehouseImg} 
                    alt="Склад УралМет" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-brand-orange text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                  15 лет опыта
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========== ПРОДУКЦИЯ ПРЕВЬЮ (с фото pipesImg) ========== */}
      <section className="section bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-4">
                Наша продукция
              </h2>
              <p className="text-brand-white/70 max-w-2xl mx-auto">
                Широкий ассортимент труб, деталей трубопроводов и запорной арматуры
              </p>
            </div>
          </FadeIn>

          {/* 👇 Фото продукции — используем pipesImg 👇 */}
          <FadeIn className="mb-10">
            <div className="relative group rounded-2xl overflow-hidden border-2 border-brand-orange/30">
              <img 
                src={pipesImg} 
                alt="Продукция УралМет" 
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
            </div>
          </FadeIn>

          {/* Карточки категорий с inline SVG иконками */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: (
                  <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ), 
                title: 'Трубы стальные', 
                count: '50 000+ позиций' 
              },
              { 
                icon: (
                  <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ), 
                title: 'Детали трубопроводов', 
                count: '15 000+ позиций' 
              },
              { 
                icon: (
                  <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ), 
                title: 'Запорная арматура', 
                count: '8 000+ позиций' 
              },
              { 
                icon: (
                  <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ), 
                title: 'Оборудование', 
                count: '10 000+ позиций' 
              }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Link 
                  to="/products"
                  className="card group block hover:scale-105 transition-transform duration-300"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-brand-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brand-orange text-sm font-semibold">
                    {item.count}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400} className="text-center mt-10">
            <Link to="/products" className="btn-primary inline-block">
              Смотреть весь каталог →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ========== ФОТО №2: КОМАНДА/ОФИС ========== */}
      <section className="section bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative group order-2 lg:order-1">
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-orange/50 to-brand-orange rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                
                <div className="relative rounded-2xl overflow-hidden border-2 border-brand-orange/30 bg-brand-dark aspect-video">
                  <img 
                    src={teamImg} 
                    alt="Команда УралМет" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                
                <div className="absolute -top-4 -left-4 bg-brand-orange text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                  Доставка по СНГ
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200} className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
                Экспорт в <span className="text-brand-orange">страны СНГ</span>
              </h2>
              <p className="text-brand-white/70 mb-6">
                Организуем поставки труб и оборудования в Россию, Казахстан и Узбекистан. 
                Полное сопровождение экспортных сделок: документы, сертификация, логистика.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['🇷🇺 Россия', '🇰🇿 Казахстан', '🇺🇿 Узбекистан'].map((country, i) => (
                  <span key={i} className="px-4 py-2 bg-brand-dark border border-brand-orange/30 rounded-lg text-brand-white/80 text-sm">
                    {country}
                  </span>
                ))}
              </div>
              <Link to="/export" className="btn-outline inline-block">
                Подробнее об экспорте →
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========== ГАЗПРОМ БЛОК ========== */}
      <section className="section bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-orange/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/20 border border-brand-orange/40 rounded-full text-brand-orange font-semibold text-sm mb-6">
                <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
                Официальный поставщик
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
                Сотрудничество с <span className="text-brand-orange">ПАО "Газпром"</span>
              </h2>
              <p className="text-brand-white/70 mb-6">
                УралМет внесена в реестр поставщиков ПАО "Газпром" и осуществляет поставки 
                продукции, соответствующей всем требованиям корпоративных стандартов.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Продукция из Единого реестра МТР',
                  'Соответствие ГОСТ и ТУ',
                  'Полный пакет разрешительных документов',
                  'Доставка на объекты Газпром'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brand-orange text-lg">✓</span>
                    <span className="text-brand-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/gazprom" className="btn-primary inline-block">
                Реестр продукции →
              </Link>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="card bg-brand-black border-2 border-brand-orange/30">
                <h3 className="text-xl font-bold text-brand-white mb-6">
                  Преимущества работы с нами
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { 
                      icon: (
                        <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      ), 
                      text: 'Документы' 
                    },
                    { 
                      icon: (
                        <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                        </svg>
                      ), 
                      text: 'Доставка' 
                    },
                    { 
                      icon: (
                        <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      ), 
                      text: 'Гарантия' 
                    },
                    { 
                      icon: (
                        <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ), 
                      text: 'Отсрочка' 
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-brand-dark rounded-lg">
                      {item.icon}
                      <span className="text-brand-white text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========== ПРЕИМУЩЕСТВА ========== */}
      <section className="section bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-12 text-center">
              Почему выбирают <span className="text-brand-orange">нас</span>
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: 'Прямые поставки',
                description: 'Работаем напрямую с производителями и ПАО "Газпром"'
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: 'Единый реестр МТР',
                description: 'Вся продукция из реестра Газпром с полным пакетом документов'
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                ),
                title: 'Доставка по СНГ',
                description: 'Организуем доставку в любой регион России, Узбекистана и Казахстана'
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: 'Гарантия качества',
                description: 'Сертификаты ISO, разрешения Ростехнадзора, лабораторный контроль'
              }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="card group hover:scale-105 transition-transform duration-300 h-full">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-brand-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-brand-white/70 text-sm">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA СЕКЦИЯ ========== */}
      <section className="section bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 via-transparent to-brand-orange/10" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-white mb-6">
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-xl text-brand-white/70 mb-10">
              Оставьте заявку, и мы подберём оптимальное решение для ваших задач
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacts" className="btn-primary text-lg px-10 py-4">
                Связаться с нами
              </Link>
              <a 
                href="tel:+73431234567"
                className="px-10 py-4 border-2 border-brand-white/30 text-brand-white font-bold rounded-lg hover:bg-brand-white hover:text-brand-black transition-all duration-300 text-lg"
              >
                +7 (343) 123-45-67
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}