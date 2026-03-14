import { useState } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/animations/FadeIn'

const categories = [
  {
    id: 'welded-pipes',
    name: 'Трубы электросварные прямошовные',
    items: [
      'ГОСТ 10704-91 / 10705-80 (с ОТО) — Трубы стальные электросварные прямошовные. Сортамент. Технические условия для труб общего назначения',
      'ГОСТ 10704-91 / 10706-76 (с ОТО) — Трубы стальные электросварные прямошовные. Сортамент. Технические требования для труб повышенной точности и качества',
      'ГОСТ 20295-85 — Трубы стальные сварные для магистральных газонефтепроводов',
      'ГОСТ 3262-75 — Трубы стальные водогазопроводные',
      'ТУ 1381-012-05757848-2015 — Трубы стальные электросварные прямошовные для строительства трубопроводов'
    ]
  },
  {
    id: 'seamless-pipes',
    name: 'Трубы бесшовные',
    items: [
      'ГОСТ 8732-78 / 8731-74 — Трубы стальные бесшовные горячедеформированные. Сортамент и технические требования',
      'ГОСТ 8734-75 / 8733-74 — Трубы стальные бесшовные холоднодеформированные и теплодеформированные. Сортамент и технические требования',
      'ГОСТ Р 53383-2009 — Трубы стальные бесшовные горячедеформированные для котлов и трубопроводов пара и горячей воды',
      'ГОСТ Р 54159-2010 — Трубы стальные бесшовные для энергетического оборудования',
      'ГОСТ 32528-2013 — Трубы стальные бесшовные горячедеформированные. Технические условия',
      'ГОСТ 32678-2014 — Трубы стальные бесшовные холоднодеформированные общего назначения',
      'ГОСТ 33229-2015 — Трубы стальные бесшовные для паровых котлов и трубопроводов',
      'ГОСТ 550-75 — Трубы стальные бесшовные для нефтеперерабатывающей и нефтехимической промышленности',
      'ГОСТ 550-2020 — Трубы стальные бесшовные для нефтеперерабатывающей и нефтехимической промышленности (актуализированная редакция)'
    ]
  },
  {
    id: 'boiler-pipes',
    name: 'Трубы бесшовные котельные',
    items: [
      'ТУ 14-3р-55-2001 — Трубы стальные бесшовные для котельных установок и трубопроводов высокого давления',
      'ТУ 14-3-190-2004 — Трубы стальные бесшовные для паровых котлов и пароперегревателей'
    ]
  },
  {
    id: 'corrosion-resistant',
    name: 'Трубы бесшовные коррозионностойкие',
    items: [
      'ТУ 1317-006.1-593377520-2003 — Трубы бесшовные из коррозионностойких сталей для химической и нефтехимической промышленности',
      'ТУ 14-3Р-124-2012 — Трубы стальные бесшовные коррозионностойкие и жаростойкие',
      'ТУ 14-3Р-124-2017 — Трубы стальные бесшовные коррозионностойкие для агрессивных сред (актуализированная редакция)',
      'ТУ 24.20.13.110-369-00186619-2018 — Трубы бесшовные коррозионностойкие для трубопроводов технологического назначения',
      'ТУ 24.20.13.110-065-00186654-2019 — Трубы стальные бесшовные из коррозионностойких марок стали общего назначения'
    ]
  },
  {
    id: 'stainless-pipes',
    name: 'Трубы нержавеющие',
    items: [
      'ГОСТ 9940-81 — Трубы бесшовные горячедеформированные из коррозионностойкой стали. Технические условия',
      'ГОСТ 9941-81 — Трубы бесшовные холодно- и теплодеформированные из коррозионностойкой стали. Технические условия',
      'ГОСТ 9940-2022 — Трубы бесшовные горячедеформированные из коррозионностойкой стали (актуализированная редакция)'
    ]
  },
    {
    id: 'cold-resistant',
    name: 'Трубы бесшовные хладостойкие для газопроводов',
    items: [
      'ТУ 14-3р-1128-2007 — Трубы стальные бесшовные хладостойкие для газопроводов с температурой эксплуатации до минус 60°С',
      'ТУ 14-159-1128-2008 — Трубы стальные бесшовные повышенной хладостойкости для трубопроводов газовой промышленности',
      'ТУ 1319-1128-00186654-2012 — Трубы бесшовные хладостойкие для газопроводов северных регионов',
      'ТУ 14-3р-137-2015 — Трубы стальные бесшовные для газопроводов с повышенными требованиями к хладостойкости',
      'ТУ 24.20.11-037-02650742-2019 — Трубы стальные бесшовные хладостойкие для транспортировки газа в условиях низких температур'
    ]
  }
]

// Функция для получения всех товаров из всех категорий
const getAllItems = () => {
  return categories.flatMap(cat => 
    cat.items.map(item => ({
      name: item,
      category: cat.name
    }))
  )
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [isTextExpanded, setIsTextExpanded] = useState(false)

  // Получаем товары для отображения
  const displayedItems = activeCategory === 'all' 
    ? getAllItems() 
    : categories.find((cat) => cat.id === activeCategory)?.items.map(item => ({ name: item, category: categories.find(c => c.id === activeCategory)?.name })) || []

  return (
    <div className="pt-20">
      {/* Hero секция */}
      <section className="bg-brand-dark py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6">
              Продукция <span className="text-brand-orange">УралМет</span>
            </h1>
            <p className="text-xl text-brand-white/70 max-w-3xl">
              Широкий сортамент трубной продукции и металлопроката 
              для нефтегазовой и строительной отраслей
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Специализация */}
      <section className="section bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-white mb-4 text-center">
              Специализация компании
            </h2>
            <p className="text-brand-white/70 text-center mb-12">
              Сортамент отгружаемой продукции
            </p>
          </FadeIn>

          {/* Фильтр категорий */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {/* Кнопка "Весь ассортимент" */}
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-brand-orange text-white'
                  : 'bg-brand-dark text-brand-white/70 hover:bg-brand-dark/80'
              }`}
            >
              Весь ассортимент
            </button>
            
            {/* Кнопки категорий */}
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-brand-orange text-white'
                    : 'bg-brand-dark text-brand-white/70 hover:bg-brand-dark/80'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Заголовок текущего раздела */}
          <FadeIn className="mb-6">
            <h3 className="text-xl font-bold text-brand-white text-center">
              {activeCategory === 'all' 
                ? 'Весь ассортимент продукции' 
                : categories.find(cat => cat.id === activeCategory)?.name}
            </h3>
          </FadeIn>

          {/* Список продукции */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedItems.map((item, index) => (
              <FadeIn key={index} delay={index * 50}>
                <div className="card group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-brand-orange rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="text-base font-semibold text-brand-white mb-1">
                        {item.name}
                      </h3>
                      {activeCategory === 'all' && (
                        <p className="text-brand-orange/70 text-xs mb-2">
                          {item.category}
                        </p>
                      )}
                      <Link to="/contacts" className="text-brand-orange text-sm font-semibold hover:underline">
                        Узнать цену →
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-white mb-6">
              Не нашли нужную позицию?
            </h2>
            <p className="text-xl text-brand-white/70 mb-8">
              Свяжитесь с нами, и мы подберём продукцию под ваши задачи
            </p>
            <Link to="/contacts" className="btn-primary text-lg px-10 py-4 inline-block">
              Получить консультацию
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ========== SEO-ТЕКСТ ДЛЯ ЯНДЕКС ========== */}
      <section className="section bg-brand-dark border-t border-brand-orange/10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <FadeIn>
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">
                Продукция УралМет — трубный металлопрокат в Екатеринбурге
              </h2>
              
              {/* Контейнер с текстом и затенением */}
              <div className="relative">
                <div 
                  className={`text-brand-white/70 text-sm leading-relaxed space-y-4 transition-all duration-500 ${
                    isTextExpanded ? 'max-h-none' : 'max-h-40 overflow-hidden'
                  }`}
                >
                  <p>
                    Компания УралМет предлагает трубный металлопрокат в Екатеринбурге широкого сортамента. У нас можно трубы стальные купить оптом и в розницу: трубы электросварные прямошовные ГОСТ 10704-91, трубы электросварные спиральношовные ГОСТ 20295-85, трубы бесшовные горячедеформированные ГОСТ 8732-78, трубы бесшовные холоднодеформированные ГОСТ 8734-75. Металлопрокат купить в Екатеринбурге с доставкой по России.
                  </p>
                  
                  <p>
                    Специализированная продукция: трубы хладостойкие для газопроводов по ТУ 14-3р-1128-2007, трубы котельные купить по ТУ 14-3р-55-2001, трубы нержавеющие ГОСТ 9940-81, трубы нержавеющие ГОСТ 9941-81, трубы коррозионно стойкие, трубы в ППУ изоляции (ППУ-ПЭ, ППУ-ОЦ, ВУС). Трубы бесшовные купить Екатеринбург — в наличии на складе.
                  </p>
                  
                  <p>
                    Соединительные детали трубопроводов: отводы крутоизогнутые ГОСТ 17375-2001, тройники стальные купить, переходы концентрические и эксцентрические, фланцы стальные ГОСТ, заглушки эллиптические по ТУ 1469-017-38948552-2015. Трубы профильные, трубы ВГП купить, трубы водогазопроводные оцинкованные — весь сортамент в наличии.
                  </p>
                  
                  <p>
                    Другой металлопрокат: лист стальной горячекатаный, лист стальной холоднокатаный, уголок стальной равнополочный, швеллер горячекатаный, балка двутавровая цена, арматура строительная купить, фасонный прокат, сортовой прокат. Металлопрокат для металлоконструкций, трубы для свай и опор по ТУ 24.20-001-44146124-2023.
                  </p>
                  
                  <p>
                    Трубы стальные цена за тонну Екатеринбург — конкурентная благодаря прямым поставкам. Металлопрокат купить оптом Урал от производителей ТМК, ЧТПЗ, ОМК. Трубы от производителя цена ниже рыночной, металлопрокат Екатеринбург прайс лист — запрашивайте у менеджеров. Работаем с НДС, отсрочка платежа.
                  </p>
                  
                  <p>
                    Трубы для нефтегазопроводов купить, трубы для котельных цена, трубы для газопроводов высокого давления, трубы из реестра Газпром с сертификатами. Трубы ГОСТ, трубы ГОСТ Р 53383-2009, металлопрокат с доставкой по России, Казахстану, Узбекистану. Трубы Екатеринбург Краснолесья — самовывоз со склада.
                  </p>
                  
                  <p>
                    Трубы оптом от производителя, трубы в наличии на складе, трубы с доставкой Екатеринбург и Свердловская область. Купить трубы Свердловская область, металлопрокат Урал доставка в любой регион. Трубы с сертификатом качества, металлопрокат отсрочка платежа до 60 дней — выгодные условия для постоянных клиентов.
                  </p>
                  
                  <p className="text-brand-orange/80 font-medium">
                    📞 Запросите прайс-лист: трубный металлопрокат Екатеринбург, трубы стальные купить, металлопрокат Екатеринбург, купить трубы Свердловская область, металлопрокат Урал доставка, трубы с доставкой Екатеринбург — звоните +7 (343) 123-45-67.
                  </p>
                </div>
                
                {/* Градиентное затенение снизу */}
                {!isTextExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />
                )}
              </div>
              
              {/* Отдельный блок с кнопкой "Читать далее" */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsTextExpanded(!isTextExpanded)}
                  className="inline-flex items-center gap-2 text-white font-bold"
                >
                  {isTextExpanded ? (
                    <>
                      <span>Свернуть</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>Читать далее</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}