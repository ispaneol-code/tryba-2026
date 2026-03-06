import { useState } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/animations/FadeIn'
import deliveryImg from '../assets/images/delivery-logistics.jpg'

const services = [
  {
    icon: (
      <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    title: 'Логистика и доставка',
    description: 'Организуем доставку продукции ж/д, авто и морским транспортом по РФ и странам СНГ. Страхование грузов, отслеживание в реальном времени.',
    features: [
      'Доставка до объекта заказчика',
      'Погрузо-разгрузочные работы',
      'Таможенное оформление',
      'Страхование груза'
    ]
  },
  {
    icon: (
      <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Комплектация заказов',
    description: 'Подберём и скомплектуем заказ под ваш проект: от одной позиции до крупных партий оборудования.',
    features: [
      'Подбор аналогов при отсутствии',
      'Консолидация грузов от разных поставщиков',
      'Проверка качества перед отгрузкой',
      'Упаковка и маркировка по ГОСТ'
    ]
  },
  {
    icon: (
      <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Финансовые решения',
    description: 'Гибкие условия оплаты для постоянных клиентов. Работаем с НДС, предоставляем отсрочку платежа.',
    features: [
      'Отсрочка платежа до 30 дней',
      'Работа с НДС 20%',
      'Лизинговые схемы',
      'Индивидуальные условия для крупных проектов'
    ]
  },
  {
    icon: (
      <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Техническая поддержка',
    description: 'Консультации инженеров, помощь в подборе продукции, сопровождение документации.',
    features: [
      'Подбор продукции под ТЗ',
      'Подготовка сертификатов и паспортов',
      'Консультации по монтажу',
      'Гарантийное обслуживание'
    ]
  },
  {
    icon: (
      <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Складское хранение',
    description: 'Собственные складские площади 4000 м² в Москве. Возможность ответственного хранения вашей продукции.',
    features: [
      'Хранение до 6 месяцев',
      'Учёт остатков в личном кабинете',
      'Отгрузка по графику заказчика',
      'Климатический контроль'
    ]
  },
  {
    icon: (
      <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Экспортное сопровождение',
    description: 'Полное сопровождение экспортных сделок: документы, сертификация, логистика в страны СНГ.',
    features: [
      'Подготовка экспортных документов',
      'Сертификация для стран ЕАЭС',
      'ВЭД-сопровождение',
      'Перевод документации'
    ]
  }
]

export default function Services() {
  const [isTextExpanded, setIsTextExpanded] = useState(false)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-dark py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6">
              Наши <span className="text-brand-orange">услуги</span>
            </h1>
            <p className="text-xl text-brand-white/70 max-w-3xl">
              Комплексное сопровождение поставок труб и оборудования 
              для нефтегазовой отрасли
            </p>
          </FadeIn>
        </div>
      </section>

            {/* Фото логистики */}
      <section className="section bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <div className="relative group rounded-2xl overflow-hidden border-2 border-brand-orange/30">
              <img 
                src={deliveryImg} 
                alt="Доставка трубного металлопроката УралМет — логистика и доставка труб стальных, электросварных, бесшовных по России, Казахстану, Узбекистану, ж/д и авто транспорт, таможенное оформление, страхование грузов" 
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h2 className="text-3xl font-bold text-brand-white">
                  Надёжная логистика
                </h2>
                <p className="text-brand-white/70">
                  Доставка по РФ и странам СНГ
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Список услуг */}
      <section className="section bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="card group hover:scale-105 transition-transform duration-300 h-full">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-brand-white/70 mb-4 text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 flex-shrink-0" />
                        <span className="text-brand-white/60 text-xs">{feature}</span>
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
      <section className="section bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-white mb-6">
              Нужна помощь с подбором услуг?
            </h2>
            <p className="text-xl text-brand-white/70 mb-8">
              Наши специалисты подготовят индивидуальное предложение под ваш проект
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
                Услуги УралМет — комплексное сопровождение поставок трубного металлопроката
              </h2>
              
              {/* Контейнер с текстом и затенением */}
              <div className="relative">
                <div 
                  className={`text-brand-white/70 text-sm leading-relaxed space-y-4 transition-all duration-500 ${
                    isTextExpanded ? 'max-h-none' : 'max-h-40 overflow-hidden'
                  }`}
                >
                  <p>
                    Компания УралМет предлагает полный комплекс услуг для поставок трубного металлопроката в Екатеринбурге. У нас можно трубы стальные купить с доставкой по России: логистика и доставка ж/д, авто, морским транспортом, таможенное оформление, страхование грузов. Металлопрокат купить в Екатеринбурге с полным сопровождением.
                  </p>
                  
                  <p>
                    Комплектация заказов под ключ: трубы электросварные прямошовные ГОСТ 10704-91, трубы электросварные спиральношовные ГОСТ 20295-85, трубы бесшовные горячедеформированные ГОСТ 8732-78, трубы бесшовные холоднодеформированные ГОСТ 8734-75. Подбор аналогов, консолидация грузов, проверка качества, упаковка по ГОСТ.
                  </p>
                  
                  <p>
                    Финансовые решения для клиентов: трубы профильные, трубы ВГП купить, трубы водогазопроводные оцинкованные — отсрочка платежа до 60 дней, работа с НДС 20%, лизинговые схемы. Металлопрокат купить оптом Урал на выгодных условиях.
                  </p>
                  
                  <p>
                    Техническая поддержка 24/7: трубы хладостойкие для газопроводов по ТУ 14-3р-1128-2007, трубы котельные купить по ТУ 14-3р-55-2001, трубы нержавеющие ГОСТ 9940-81, трубы коррозионно стойкие. Подбор продукции под ТЗ, подготовка сертификатов, консультации по монтажу.
                  </p>
                  
                  <p>
                    Складское хранение и отгрузка: лист стальной горячекатаный, уголок стальной равнополочный, швеллер горячекатаный, балка двутавровая цена, арматура строительная купить. Хранение до 6 месяцев, учёт в личном кабинете, отгрузка по графику.
                  </p>
                  
                  <p>
                    Экспортное сопровождение: трубы из реестра Газпром с документами, трубы для нефтегазопроводов купить, трубы для газопроводов высокого давления. Подготовка экспортных документов, сертификация для ЕАЭС, ВЭД-сопровождение, перевод документации. Металлопрокат с доставкой по России, Казахстану, Узбекистану.
                  </p>
                  
                  <p>
                    Трубы стальные цена за тонну Екатеринбург включает все услуги. Металлопрокат Екатеринбург прайс лист с учётом логистики, комплектации, хранения. Трубы от производителя цена + услуги = надёжность. Трубы с доставкой Екатеринбург, купить трубы Свердловская область, металлопрокат Урал доставка — быстро и профессионально.
                  </p>
                  
                  <p className="text-brand-orange/80 font-medium">
                    📞 Запросите расчёт услуг: трубный металлопрокат Екатеринбург, трубы стальные купить с доставкой, металлопрокат Екатеринбург, купить трубы Свердловская область, металлопрокат Урал доставка с полным сопровождением — звоните +7 (343) 123-45-67.
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