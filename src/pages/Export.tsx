import { useState } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/animations/FadeIn'
import exportImg from '../assets/images/export-shipping.jpg'

const countries = [
  {
    flag: '🇷🇺',
    name: 'Россия',
    regions: [
      'Западная Сибирь',
      'Урал',
      'Поволжье',
      'Дальний Восток',
      'Арктическая зона'
    ],
    note: 'Основной рынок. Работаем со всеми регионами'
  },
  {
    flag: '🇰🇿',
    name: 'Казахстан',
    regions: [
      'Атырауская область',
      'Мангистауская область',
      'Актюбинская область',
      'Павлодарская область'
    ],
    note: 'Поставки на объекты Тенгиз, Кашаган, Карачаганак'
  },
  {
    flag: '🇺🇿',
    name: 'Узбекистан',
    regions: [
      'Бухарская область',
      'Кашкадарьинская область',
      'Навоийская область',
      'Ташкентская область'
    ],
    note: 'Сотрудничество с Узтрансгаз, Шуртань ГХК'
  }
]

const exportSteps = [
  {
    step: '01',
    title: 'Запрос и подбор',
    description: 'Получаем ТЗ, подбираем продукцию из реестра, готовим коммерческое предложение'
  },
  {
    step: '02',
    title: 'Документы и оплата',
    description: 'Согласовываем договор, выставляем счёт, готовим экспортную документацию'
  },
  {
    step: '03',
    title: 'Отгрузка и логистика',
    description: 'Комплектуем заказ, организуем доставку, страхуем груз'
  },
  {
    step: '04',
    title: 'Таможня и получение',
    description: 'Сопровождаем таможенное оформление, передаём документы клиенту'
  }
]

export default function Export() {
  const [isTextExpanded, setIsTextExpanded] = useState(false)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-dark py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6">
              Экспорт в <span className="text-brand-orange">страны СНГ</span>
            </h1>
            <p className="text-xl text-brand-white/70 max-w-3xl">
              Поставки труб и оборудования для нефтегазового сектора 
              в Россию, Казахстан и Узбекистан
            </p>
          </FadeIn>
        </div>
      </section>

            {/* Фото экспорта */}
      <section className="section bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <div className="relative group rounded-2xl overflow-hidden border-2 border-brand-orange/30">
              <img 
                src={exportImg} 
                alt="Экспорт трубного металлопроката УралМет в страны СНГ — трубы стальные, электросварные, бесшовные ГОСТ с доставкой в Россию, Казахстан, Узбекистан, таможенное оформление, ВЭД-сопровождение, экспортная логистика" 
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h2 className="text-3xl font-bold text-brand-white">
                  Экспорт в страны СНГ
                </h2>
                <p className="text-brand-white/70">
                  Россия • Казахстан • Узбекистан
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Страны */}
      <section className="section bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-white mb-12 text-center">
              География поставок
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="card group hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl mb-4">{country.flag}</div>
                  <h3 className="text-2xl font-bold text-brand-white mb-4">
                    {country.name}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {country.regions.map((region, rIndex) => (
                      <li key={rIndex} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" aria-hidden="true" />
                        <span className="text-brand-white/70 text-sm">{region}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-brand-orange text-sm font-medium">
                    {country.note}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс экспорта */}
      <section className="section bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-white mb-12 text-center">
              Как мы работаем
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exportSteps.map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="relative">
                  <div className="text-6xl font-bold text-brand-orange/20 absolute -top-4 -left-2">
                    {item.step}
                  </div>
                  <div className="relative z-10 pt-8">
                    <h3 className="text-lg font-bold text-brand-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-brand-white/70 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Документы */}
      <section className="section bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-white mb-12">
              Экспортная документация
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Контракт на поставку (RU/KZ/UZ)',
              'Инвойс и упаковочный лист',
              'Сертификат происхождения СТ-1 / Form A',
              'Паспорта качества на продукцию',
              'Разрешительные документы (Ростехнадзор, Гостехнадзор)',
              'Транспортные накладные (CMR, ж/д)',
              'Таможенная декларация',
              'Страховой полис'
            ].map((doc, index) => (
              <FadeIn key={index} delay={index * 50}>
                <div className="flex items-start gap-4 p-4 bg-brand-dark rounded-lg">
                  <span className="text-brand-orange text-xl" aria-hidden="true">📄</span>
                  <span className="text-brand-white/80">{doc}</span>
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
              Планируете поставки в СНГ?
            </h2>
            <p className="text-xl text-brand-white/70 mb-8">
              Наши специалисты помогут с подбором продукции и оформлением экспортных документов
            </p>
            <Link to="/contacts" className="btn-primary text-lg px-10 py-4 inline-block">
              Обсудить проект
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
                Экспорт трубного металлопроката в страны СНГ — УралМет
              </h2>
              
              {/* Контейнер с текстом и затенением */}
              <div className="relative">
                <div 
                  className={`text-brand-white/70 text-sm leading-relaxed space-y-4 transition-all duration-500 ${
                    isTextExpanded ? 'max-h-none' : 'max-h-40 overflow-hidden'
                  }`}
                >
                  <p>
                    Компания УралМет осуществляет экспорт трубного металлопроката из Екатеринбурга в страны СНГ. У нас можно трубы стальные купить с доставкой в Россию, Казахстан, Узбекистан: трубы электросварные прямошовные ГОСТ 10704-91, трубы электросварные спиральношовные ГОСТ 20295-85, трубы бесшовные горячедеформированные ГОСТ 8732-78, трубы бесшовные холоднодеформированные ГОСТ 8734-75.
                  </p>
                  
                  <p>
                    Экспортные поставки металлопроката: трубы профильные, трубы ВГП купить, трубы водогазопроводные оцинкованные, трубы хладостойкие для газопроводов по ТУ 14-3р-1128-2007. Трубы котельные купить по ТУ 14-3р-55-2001, трубы нержавеющие ГОСТ 9940-81, трубы коррозионно стойкие — всё с экспортными сертификатами.
                  </p>
                  
                  <p>
                    Соединительные детали для экспорта: отводы крутоизогнутые ГОСТ 17375-2001, тройники стальные купить, переходы концентрические, фланцы стальные ГОСТ, заглушки эллиптические по ТУ 1469-017-38948552-2015. Трубы из реестра Газпром с полным пакетом документов для таможенного оформления.
                  </p>
                  
                  <p>
                    Металлопрокат для экспорта: лист стальной горячекатаный, уголок стальной равнополочный, швеллер горячекатаный, балка двутавровая цена, арматура строительная купить. Трубы для нефтегазопроводов купить, трубы для газопроводов высокого давления, трубы для свай и опор по ТУ 24.20-001-44146124-2023.
                  </p>
                  
                  <p>
                    Трубы стальные цена за тонну Екатеринбург включает экспортную логистику. Металлопрокат купить оптом Урал с доставкой по России, Казахстану, Узбекистану. Трубы от производителя цена + экспортное сопровождение = надёжность. Металлопрокат Екатеринбург прайс лист с учётом таможенных пошлин.
                  </p>
                  
                  <p>
                    Экспортная документация: контракты, инвойсы, сертификаты происхождения СТ-1, паспорта качества, разрешения Ростехнадзора. Трубы с сертификатом качества для ЕАЭС, металлопрокат с доставкой по СНГ, трубы с доставкой Екатеринбург — полный цикл экспортных услуг.
                  </p>
                  
                  <p>
                    Трубы оптом от производителя на экспорт, трубы в наличии на складе, металлопрокат с доставкой по России, Казахстану, Узбекистану. Купить трубы Свердловская область для экспорта, металлопрокат Урал доставка в страны СНГ, трубы Екатеринбург Краснолесья — отгрузка с нашего склада.
                  </p>
                  
                  <p className="text-brand-orange/80 font-medium">
                    📞 Запросите экспортный прайс: трубный металлопрокат Екатеринбург, трубы стальные купить на экспорт, металлопрокат Екатеринбург, купить трубы Свердловская область, металлопрокат Урал доставка в СНГ — звоните +7 (343) 123-45-67.
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