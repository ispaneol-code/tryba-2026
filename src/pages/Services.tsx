import FadeIn from '../components/animations/FadeIn'
import deliveryImg from '../assets/images/delivery-logistics.jpg'

const services = [
  {
    icon: '🚚',
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
    icon: '📋',
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
    icon: '💰',
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
    icon: '🔧',
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
    icon: '📦',
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
    icon: '🌍',
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
                alt="Доставка UM-PIPE" 
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
                  <div className="text-4xl mb-4">{service.icon}</div>
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
            <button className="btn-primary text-lg px-10 py-4">
              Получить консультацию
            </button>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}