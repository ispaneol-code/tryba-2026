import { useState } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/animations/FadeIn'
import { STATS } from '../utils/constants'

// Импорт изображений
import productionImg from '../assets/images/production-facility.jpg'
import qualityImg from '../assets/images/quality-control.jpg'
import aboutImg from '../assets/images/about-company.jpg'

// Импорт логотипов партнеров
import partner1 from '../assets/images/partners/1.png'
import partner2 from '../assets/images/partners/2.png'
import partner3 from '../assets/images/partners/3.png'
import partner4 from '../assets/images/partners/4.png'
import partner5 from '../assets/images/partners/5.png'
import partner6 from '../assets/images/partners/6.png'
import partner7 from '../assets/images/partners/7.png'
import partner8 from '../assets/images/partners/8.png'
import partner9 from '../assets/images/partners/9.png'
import partner10 from '../assets/images/partners/10.png'

// Логотипы партнеров
const partners = [
  { logo: partner1, name: 'ТМК', fullName: 'Трубная Металлургическая Компания' },
  { logo: partner2, name: 'ЧТПЗ', fullName: 'Группа ЧТПЗ' },
  { logo: partner3, name: 'ОМК', fullName: 'Объединённая Металлургическая Компания' },
  { logo: partner4, name: 'ТЭМПО', fullName: 'Набережночелнинский трубный завод' },
  { logo: partner5, name: 'ИТЗ', fullName: 'Ижорский Трубный Завод' },
  { logo: partner6, name: 'ПЗИТ', fullName: 'Первоуральский завод изоляции труб' },
  { logo: partner7, name: 'СТИ', fullName: 'Завод Современные Технологии Изоляции' },
  { logo: partner8, name: 'Транзит Плюс', fullName: 'Транзит Плюс' },
  { logo: partner9, name: 'КТЗ', fullName: 'Колпинский Трубный Завод' },
  { logo: partner10, name: 'УЗТС', fullName: 'Уральский Завод Трубопроводного Сервиса' }
]

// Новые 6 преимуществ с иконками
const advantages = [
  {
    icon: (
      <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Прямые контракты',
    description: 'Прямые контракты с ведущими трубными заводами России и СНГ'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Полный цикл сопровождения',
    description: 'Полный цикл сопровождения поставки — от подбора продукции до доставки на объект'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Сертифицированная продукция',
    description: 'Сертифицированная продукция, соответствующая требованиям ГОСТ, ТУ и международных стандартов'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Экспортные поставки',
    description: 'Комплексные поставки на экспорт с полным таможенным оформлением'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Реестр Газпром',
    description: 'Поставка продукции, включённой в Реестр ПАО «Газпром»'
  },
  {
    icon: (
      <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Собственные склады',
    description: 'Собственные складские мощности и оперативная логистика'
  }
]

export default function About() {
  const [isTextExpanded, setIsTextExpanded] = useState(false)

  return (
    <div className="pt-20">
      {/* Hero секция */}
      <section className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-black mb-6">
              О компании <span className="text-gray-600">УралМет</span>
            </h1>
            <p className="text-xl text-brand-black/70 max-w-3xl">
                ООО УралМет - торгово-производственная частная компания, занимающаяся комплектацией нефтегазовых, энергетических и химических объектов на территории РФ и Ближайшего Зарубежья. Главное направление деятельности компании – поставки трубного металлопроката разнообразного ассортимента.            </p>
          </FadeIn>
        </div>
      </section>

      {/* История компании с фото */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-brand-black mb-6">
                История и развитие
              </h2>
              <div className="space-y-4 text-brand-black/70">
                <p>
                  УралМет зарегистрирована в 2019 году. Сегодня это современные 
                  офисные и складские площади площадью <strong>4 000 м²</strong> в 
                  промышленной зоне Екатеринбурга.
                </p>
                <p>
                  Компания оснащена современным оборудованием для контроля качества 
                  продукции. В структуре работает собственная лаборатория, 
                  оснащённая современными образцами испытательной техники.
                </p>
                <p>
                  УралМет — это предприятие, способное решать сложные инжиниринговые 
                  задачи и осуществлять комплексные поставки на объекты строительства 
                  и реконструкции нефтегазовых объектов.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-gray-600 to-gray-600/50 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-gray-300 aspect-video bg-gray-50">
                  <img 
                    src={productionImg} 
                    alt="Производство и склад УралМет — трубный металлопрокат Екатеринбург, трубы стальные электросварные и бесшовные ГОСТ, металлопрокат оптом от производителя" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Фото + Статистика */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <FadeIn>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-gray-600/50 to-gray-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-gray-300 aspect-video bg-gray-100">
                  <img 
                    src={aboutImg} 
                    alt="О компании УралМет — поставщик трубного металлопроката в Екатеринбурге, трубы стальные купить, металлопрокат с доставкой по России, Казахстану, Узбекистану" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="text-3xl font-bold text-brand-black mb-6">
                Наши показатели
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {STATS.map((stat, index) => (
                  <div key={index} className="card text-center bg-white border border-gray-100">
                    <div className="text-3xl md:text-4xl font-bold text-gray-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.prefix}{stat.value.toLocaleString()}{stat.suffix}
                    </div>
                    <div className="text-brand-black/70 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Контроль качества с фото */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative group order-2 md:order-1">
                <div className="absolute -inset-2 bg-gradient-to-r from-gray-600 to-gray-600/50 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-gray-300 aspect-video bg-gray-50">
                  <img 
                    src={qualityImg} 
                    alt="Контроль качества трубного металлопроката УралМет — трубы с сертификатом качества, металлопрокат Екатеринбург, лабораторные испытания, ГОСТ, ТУ" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200} className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-brand-black mb-6">
                Контроль качества
              </h2>
              <div className="space-y-4 text-brand-black/70">
                <p>
                  Вся продукция проходит многоступенчатый контроль качества. 
                  Собственная лаборатория оснащена современным испытательным оборудованием.
                </p>
                <ul className="space-y-3">
                  {[
                    'Входной контроль сырья и материалов',
                    'Лабораторные испытания продукции',
                    'Визуальный и измерительный контроль',
                    'Неразрушающий контроль (УЗК, радиография)',
                    'Гидравлические испытания',
                    'Сертификация по международным стандартам'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gray-600 text-lg" aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Преимущества — 6 карточек */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-black mb-12 text-center">
              Наши преимущества
            </h2>
          </FadeIn>
          
          {/* Сетка: 1 колонка на мобильных, 2 на планшетах, 3 на десктопах для 6 элементов */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="card group hover:scale-105 transition-transform duration-300 h-full bg-white border border-gray-100">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-brand-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-brand-black/70 text-sm">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Наши партнеры */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-black mb-12 text-center">
              Наши партнеры
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <FadeIn key={index} delay={index * 50}>
                <div className="card h-32 flex items-center justify-center bg-gray-50 border border-gray-300 p-6">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.fullName} — поставщик трубного металлопроката, трубы стальные, трубы электросварные и бесшовные ГОСТ, металлопрокат Екатеринбург`}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-black mb-6">
              Хотите узнать больше?
            </h2>
            <p className="text-xl text-brand-black/70 mb-8">
              Свяжитесь с нами для получения подробной информации
            </p>
            <Link to="/contacts" className="btn-primary text-lg px-10 py-4 bg-gray-600 text-white hover:bg-gray-700">
              Связаться с нами
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ========== SEO-ТЕКСТ ДЛЯ ЯНДЕКС ========== */}
      <section className="section bg-white border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <FadeIn>
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-brand-black mb-6">
                Трубный металлопрокат в Екатеринбурге от производителя УралМет
              </h2>
              
              {/* Контейнер с текстом и затенением */}
              <div className="relative">
                <div 
                  className={`text-brand-black/70 text-sm leading-relaxed space-y-4 transition-all duration-500 ${
                    isTextExpanded ? 'max-h-none' : 'max-h-40 overflow-hidden'
                  }`}
                >
<p>
  Компания УралМет — надёжный поставщик трубного металлопроката в Екатеринбурге. У нас можно трубы стальные купить оптом и в розницу с доставкой по России. В каталоге: трубы электросварные прямошовные ГОСТ 10704-91, трубы электросварные спиральношовные ГОСТ 20295-85, трубы бесшовные горячедеформированные ГОСТ 8732-78, трубы бесшовные холоднодеформированные ГОСТ 8734-75. Металлопрокат купить в Екатеринбурге с гарантией качества — просто позвоните нам.
</p>

<p>
  Поставляем металлопрокат купить который можно на выгодных условиях: трубы профильные, трубы ГОСТ, трубы ВГП купить, трубы водогазопроводные оцинкованные. Запрашивайте: труба электросварная цена за тонну, труба бесшовная цена, металлопрокат Екатеринбург прайс лист. Работаем с НДС, отсрочка платежа до 60 дней.
</p>

<p>
  Специализированный сортамент для промышленных задач: трубы хладостойкие для газопроводов по ТУ 14-3р-1128-2007, трубы котельные купить по ТУ 14-3р-55-2001, трубы нержавеющие ГОСТ 9940-81, трубы нержавеющие ГОСТ 9941-81, трубы коррозионно стойкие, трубы в ППУ изоляции (ППУ-ПЭ, ППУ-ОЦ, ВУС). Трубы бесшовные купить Екатеринбург — в наличии на складе.
</p>

<p>
  Соединительные детали трубопроводов из реестра ПАО «Газпром»: отводы крутоизогнутые ГОСТ 17375-2001, тройники стальные купить, переходы концентрические и эксцентрические, фланцы стальные ГОСТ, заглушки эллиптические по ТУ 1469-017-38948552-2015. Трубы из реестра Газпром с полным пакетом документов: сертификаты качества, паспорта продукции, разрешения Ростехнадзора.
</p>

<p>
  Другой металлопрокат в наличии: лист стальной горячекатаный, лист стальной холоднокатаный, уголок стальной равнополочный, швеллер горячекатаный, балка двутавровая цена, арматура строительная купить, фасонный прокат, сортовой прокат. Металлопрокат для металлоконструкций, трубы для свай и опор, трубы для газопроводов высокого давления — всё на складе в Екатеринбурге (ул. Краснолесья).
</p>

<p>
  Трубы стальные цена за тонну Екатеринбург — конкурентная благодаря прямым поставкам от заводов ТМК, ЧТПЗ, ОМК. Металлопрокат купить оптом Урал — выгодное решение для строительных и промышленных предприятий. Трубы от производителя цена ниже рыночной, металлопрокат Екатеринбург прайс лист — запрашивайте у менеджеров.
</p>

<p>
  Трубы для нефтегазопроводов купить, трубы для котельных цена, металлопрокат с доставкой по России, Казахстану, Узбекистану. Металлопрокат Урал доставка в любой регион: трубы Екатеринбург Краснолесья, купить трубы Свердловская область, металлопрокат с доставкой по России быстро и надёжно.
</p>

<p>
  Трубы оптом от производителя, трубы в наличии на складе, трубы с доставкой Екатеринбург и Свердловская область. Трубы с сертификатом качества, металлопрокат отсрочка платежа, трубы ГОСТ Р 53383-2009, ТУ 24.20-001-44146124-2023 для свай — всё в одном месте.
</p>

<p className="text-gray-600/80 font-medium">
  📞 Запросите прайс-лист: трубный металлопрокат Екатеринбург, трубы стальные купить, металлопрокат Екатеринбург, купить трубы Свердловская область, металлопрокат Урал доставка, трубы с доставкой Екатеринбург — звоните +7 (343) 123-45-67.
</p>
                </div>
                
                {/* Градиентное затенение снизу */}
                {!isTextExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                )}
              </div>
              
              {/* Отдельный блок с кнопкой "Читать далее" */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsTextExpanded(!isTextExpanded)}
                  className="inline-flex items-center gap-2 text-brand-black font-bold"
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