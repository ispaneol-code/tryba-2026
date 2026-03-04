import { Link } from 'react-router-dom'
import FadeIn from '../components/animations/FadeIn'
import { STATS, ADVANTAGES } from '../utils/constants'

export default function Home() {
  return (
    <div className="pt-20">
      {/* ========== HERO СЕКЦИЯ ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black">
        {/* Анимированный фон */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Сетка на фоне */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 107, 53, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 107, 53, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

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
            <div className="w-6 h-10 border-2 border-brand-orange/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-brand-orange rounded-full animate-pulse" />
            </div>
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

      {/* ========== ФОТО №1: ПРОИЗВОДСТВО/СКЛАД ========== */}
      {/* 📸 МЕСТО ДЛЯ ПЕРВОЙ ФОТОГРАФИИ — замени src на своё фото */}
      <section className="section bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
                Надёжные поставки <span className="text-brand-orange">под ключ</span>
              </h2>
              <p className="text-brand-white/70 mb-6">
                UM-PIPE — специализированное предприятие по поставкам труб и оборудования 
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

            {/* 🖼️ ФОТО №1: Заглушка — замени на реальное фото */}
            <FadeIn delay={200}>
              <div className="relative group">
                {/* Рамка с эффектом */}
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-orange to-brand-orange/50 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                
                {/* Контейнер фото */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-brand-orange/30 bg-brand-dark aspect-video flex items-center justify-center">
                  {/* 👇 ЗАМЕНИ ЭТО НА СВОЁ ФОТО 👇 */}
                  {/* Пример: <img src="/assets/images/warehouse.jpg" alt="Склад" className="w-full h-full object-cover" /> */}
                  
                  <div className="text-center p-6">
                    <div className="text-6xl mb-4">🏭</div>
                    <p className="text-brand-white/60 font-medium">
                      Фото производства / склада
                    </p>
                    <p className="text-brand-orange/60 text-sm mt-2">
                      Размер: 800×600 px
                    </p>
                  </div>
                </div>
                
                {/* Декоративная подпись */}
                <div className="absolute -bottom-4 -right-4 bg-brand-orange text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                  15 лет опыта
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========== ПРОДУКЦИЯ ПРЕВЬЮ ========== */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔩', title: 'Трубы стальные', count: '50 000+ позиций' },
              { icon: '⚙️', title: 'Детали трубопроводов', count: '15 000+ позиций' },
              { icon: '🚪', title: 'Запорная арматура', count: '8 000+ позиций' },
              { icon: '🔧', title: 'Оборудование', count: '10 000+ позиций' }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Link 
                  to="/products"
                  className="card group block hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* ========== ФОТО №2: КОМАНДА / ОБЪЕКТ ========== */}
      {/* 📸 МЕСТО ДЛЯ ВТОРОЙ ФОТОГРАФИИ — замени src на своё фото */}
      <section className="section bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 🖼️ ФОТО №2: Заглушка — замени на реальное фото */}
            <FadeIn>
              <div className="relative group order-2 lg:order-1">
                {/* Рамка с эффектом */}
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-orange/50 to-brand-orange rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                
                {/* Контейнер фото */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-brand-orange/30 bg-brand-dark aspect-video flex items-center justify-center">
                  {/* 👇 ЗАМЕНИ ЭТО НА СВОЁ ФОТО 👇 */}
                  {/* Пример: <img src="/assets/images/team.jpg" alt="Команда" className="w-full h-full object-cover" /> */}
                  
                  <div className="text-center p-6">
                    <div className="text-6xl mb-4">👥</div>
                    <p className="text-brand-white/60 font-medium">
                      Фото команды / объекта
                    </p>
                    <p className="text-brand-orange/60 text-sm mt-2">
                      Размер: 800×600 px
                    </p>
                  </div>
                </div>
                
                {/* Декоративная подпись */}
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
        {/* Декоративный элемент */}
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
                UM-PIPE внесена в реестр поставщиков ПАО "Газпром" и осуществляет поставки 
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
                    { icon: '📋', text: 'Документы' },
                    { icon: '🚚', text: 'Доставка' },
                    { icon: '✓', text: 'Гарантия' },
                    { icon: '💰', text: 'Отсрочка' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-brand-dark rounded-lg">
                      <span className="text-2xl">{item.icon}</span>
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
            {ADVANTAGES.map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="card group hover:scale-105 transition-transform duration-300 h-full">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
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
                href="tel:+78001234567"
                className="px-10 py-4 border-2 border-brand-white/30 text-brand-white font-bold rounded-lg hover:bg-brand-white hover:text-brand-black transition-all duration-300 text-lg"
              >
                +7 (800) 123-45-67
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}