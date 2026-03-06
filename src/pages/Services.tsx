import { Link } from 'react-router-dom'
import FadeIn from '../components/animations/FadeIn'
import deliveryImg from '../assets/images/delivery-logistics.jpg'

const services = [
  {
    icon: (
      <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
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
      <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
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
      <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
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
      <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
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
      <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
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
      <svg className="w-12 h-12 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
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
                alt="Доставка УралМет" 
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
    </div>
  )
}