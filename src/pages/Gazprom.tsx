import { useState } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/animations/FadeIn'
import gazpromImg from '../assets/images/gazprom-certificate.jpg'

export default function Gazprom() {
  const [isTextExpanded, setIsTextExpanded] = useState(false)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-dark py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6">
              Сотрудничество с <span className="text-brand-orange">ПАО "Газпром"</span>
            </h1>
            <p className="text-xl text-brand-white/70 max-w-3xl">
              Поставки продукции из Единого реестра материально-технических ресурсов 
              ПАО "Газпром"
            </p>
          </FadeIn>
        </div>
      </section>

            {/* Фото сертификатов */}
      <section className="section bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <div className="relative group rounded-2xl overflow-hidden border-2 border-brand-orange/30">
              <img 
                src={gazpromImg} 
                alt="Трубы из реестра Газпром УралМет Екатеринбург — трубы стальные, электросварные, бесшовные ГОСТ для нефтегазопроводов, официальный поставщик ПАО Газпром, реестр МТР, сертификаты качества, разрешения Ростехнадзора" 
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h2 className="text-3xl font-bold text-brand-white">
                  Официальный поставщик
                </h2>
                <p className="text-brand-white/70">
                  Реестр МТР ПАО "Газпром"
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* О реестре */}
      <section className="section bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-brand-white mb-6">
                Единый реестр МТР
              </h2>
              <div className="space-y-4 text-brand-white/70">
                <p>
                  УралМет внесена в реестр поставщиков ПАО "Газпром" и осуществляет 
                  поставки продукции, соответствующей всем требованиям корпоративных 
                  стандартов.
                </p>
                <p>
                  Вся продукция проходит строгий контроль качества и сопровождается 
                  полным пакетом разрешительной документации.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange" aria-hidden="true">✓</span>
                    <span>Соответствие ГОСТ и ТУ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange" aria-hidden="true">✓</span>
                    <span>Сертификаты качества</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange" aria-hidden="true">✓</span>
                    <span>Паспорта на продукцию</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange" aria-hidden="true">✓</span>
                    <span>Разрешения Ростехнадзора</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="card bg-brand-orange/10 border-2 border-brand-orange/30">
                <h3 className="text-2xl font-bold text-brand-white mb-6">
                  Преимущества работы с нами
                </h3>
                <ul className="space-y-4">
                  {[
                    'Прямые поставки из реестра Газпром',
                    'Полное соответствие техническим требованиям',
                    'Сопровождение сделок специалистами',
                    'Отсрочка платежа для постоянных клиентов',
                    'Доставка на объекты Газпром',
                    'Гарантийное и постгарантийное обслуживание'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-brand-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Продукция для Газпром */}
      <section className="section bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-white mb-12">
              Продукция для объектов Газпром
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Трубопроводная продукция',
                items: [
                  'Трубы стальные различных диаметров',
                  'Детали трубопроводов',
                  'Фланцевые соединения',
                  'Изолирующие фланцевые соединения (ИФС)'
                ]
              },
              {
                title: 'Запорная арматура',
                items: [
                  'Краны шаровые цельносварные',
                  'Задвижки стальные клиновые',
                  'Затворы дисковые',
                  'Клапаны обратные и предохранительные'
                ]
              },
              {
                title: 'Вспомогательное оборудование',
                items: [
                  'Насосное оборудование',
                  'Резервуарное оборудование',
                  'Электроприводы',
                  'Крепёжные изделия'
                ]
              }
            ].map((category, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="card h-full">
                  <h3 className="text-xl font-bold text-brand-white mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                        <span className="text-brand-white/70 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-white mb-6">
              Нужна продукция из реестра Газпром?
            </h2>
            <p className="text-xl text-brand-white/70 mb-8">
              Свяжитесь с нами для получения консультации и расчёта стоимости
            </p>
            <Link to="/contacts" className="btn-primary text-lg px-10 py-4 inline-block">
              Оставить заявку
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
                Трубы из реестра Газпром в Екатеринбурге — официальный поставщик УралМет
              </h2>
              
              {/* Контейнер с текстом и затенением */}
              <div className="relative">
                <div 
                  className={`text-brand-white/70 text-sm leading-relaxed space-y-4 transition-all duration-500 ${
                    isTextExpanded ? 'max-h-none' : 'max-h-40 overflow-hidden'
                  }`}
                >
                  <p>
                    Компания УралМет — официальный поставщик трубного металлопроката из реестра ПАО "Газпром" в Екатеринбурге. У нас можно трубы стальные купить для объектов Газпром: трубы электросварные прямошовные ГОСТ 10704-91, трубы электросварные спиральношовные ГОСТ 20295-85, трубы бесшовные горячедеформированные ГОСТ 8732-78, трубы бесшовные холоднодеформированные ГОСТ 8734-75.
                  </p>
                  
                  <p>
                    Продукция из Единого реестра МТР Газпром: трубы профильные, трубы ВГП купить, трубы водогазопроводные оцинкованные, трубы хладостойкие для газопроводов по ТУ 14-3р-1128-2007. Трубы котельные купить по ТУ 14-3р-55-2001, трубы нержавеющие ГОСТ 9940-81, трубы коррозионно стойкие — всё с сертификатами Газпром.
                  </p>
                  
                  <p>
                    Соединительные детали из реестра Газпром: отводы крутоизогнутые ГОСТ 17375-2001, тройники стальные купить, переходы концентрические, фланцы стальные ГОСТ, заглушки эллиптические по ТУ 1469-017-38948552-2015. Трубы из реестра Газпром с полным пакетом документов для поставки на объекты.
                  </p>
                  
                  <p>
                    Металлопрокат для объектов Газпром: лист стальной горячекатаный, уголок стальной равнополочный, швеллер горячекатаный, балка двутавровая цена, арматура строительная купить. Трубы для нефтегазопроводов купить, трубы для газопроводов высокого давления, трубы для свай и опор по ТУ 24.20-001-44146124-2023.
                  </p>
                  
                  <p>
                    Трубы стальные цена за тонну Екатеринбург для поставок на объекты Газпром. Металлопрокат купить оптом Урал с отсрочкой платежа до 60 дней. Трубы от производителя цена + реестр Газпром = гарантия качества. Металлопрокат Екатеринбург прайс лист для участников реестра.
                  </p>
                  
                  <p>
                    Трубы с сертификатом качества Газпром, трубы с доставкой Екатеринбург на объекты, металлопрокат с доставкой по России. Купить трубы Свердловская область для нефтегазовых проектов, металлопрокат Урал доставка на объекты Газпром, трубы Екатеринбург Краснолесья — отгрузка со склада.
                  </p>
                  
                  <p>
                    Трубы оптом от производителя для Газпром, трубы в наличии на складе с документами, металлопрокат отсрочка платежа для постоянных клиентов. Трубы ГОСТ Р 53383-2009, трубы из реестра Газпром с паспортами качества, разрешениями Ростехнадзора — полное соответствие требованиям.
                  </p>
                  
                  <p className="text-brand-orange/80 font-medium">
                    📞 Запросите прайс-лист Газпром: трубный металлопрокат Екатеринбург, трубы стальные купить из реестра, металлопрокат Екатеринбург, купить трубы Свердловская область, металлопрокат Урал доставка на объекты Газпром — звоните +7 (343) 123-45-67.
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