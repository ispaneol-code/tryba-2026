import { Link } from 'react-router-dom'
import FadeIn from '../components/animations/FadeIn'
import { STATS, ADVANTAGES } from '../utils/constants'

// Импорт изображений
import productionImg from '../assets/images/production-facility.jpg'
import qualityImg from '../assets/images/quality-control.jpg'
import aboutImg from '../assets/images/about-company.jpg'

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero секция */}
      <section className="bg-brand-dark py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6">
              О компании <span className="text-brand-orange">UM-PIPE</span>
            </h1>
            <p className="text-xl text-brand-white/70 max-w-3xl">
              Специализированное предприятие по поставкам труб и оборудования 
              для нефтегазовой отрасли
            </p>
          </FadeIn>
        </div>
      </section>

      {/* История компании с фото */}
      <section className="section bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-brand-white mb-6">
                История и развитие
              </h2>
              <div className="space-y-4 text-brand-white/70">
                <p>
                  UM-PIPE зарегистрирована в 2011 году. Сегодня это современные 
                  офисные и складские площади площадью <strong>4 000 м²</strong> в 
                  промышленной зоне Москвы.
                </p>
                <p>
                  Компания оснащена современным оборудованием для контроля качества 
                  продукции. В структуре работает собственная лаборатория, 
                  оснащённая современными образцами испытательной техники.
                </p>
                <p>
                  UM-PIPE — это предприятие, способное решать сложные инжиниринговые 
                  задачи и осуществлять комплексные поставки на объекты строительства 
                  и реконструкции нефтегазовых объектов.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-orange to-brand-orange/50 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-brand-orange/30 aspect-video">
                  <img 
                    src={productionImg} 
                    alt="Производство UM-PIPE" 
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
      <section className="section bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <FadeIn>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-orange/50 to-brand-orange rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-brand-orange/30 aspect-video">
                  <img 
                    src={aboutImg} 
                    alt="О компании UM-PIPE" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="text-3xl font-bold text-brand-white mb-6">
                Наши показатели
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {STATS.map((stat, index) => (
                  <div key={index} className="card text-center">
                    <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-2">
                      {stat.prefix}{stat.value.toLocaleString()}{stat.suffix}
                    </div>
                    <div className="text-brand-white/70 text-sm">
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
      <section className="section bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative group order-2 md:order-1">
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-orange to-brand-orange/50 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-brand-orange/30 aspect-video">
                  <img 
                    src={qualityImg} 
                    alt="Контроль качества" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200} className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-brand-white mb-6">
                Контроль качества
              </h2>
              <div className="space-y-4 text-brand-white/70">
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
                      <span className="text-brand-orange text-lg">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="section bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-white mb-12 text-center">
              Наши преимущества
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ADVANTAGES.map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="card group hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">{item.icon}</div>
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

      {/* Сертификаты */}
      <section className="section bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-white mb-12">
              Сертификаты и лицензии
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Система менеджмента качества ISO 9001-2015',
              'Разрешение Федеральной службы по экологическому, технологическому и атомному надзору',
              'Разрешение Проматомнадзора Республики Беларусь',
              'Лицензия на право изготовления оборудования для атомных станций',
              'Свидетельство типового одобрения Российского морского регистра судоходства',
              'Внесение в реестр поставщиков ПАО "Газпром"',
              'Аккредитация как поставщик ПАО "НК "Роснефть"'
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="flex items-start gap-4 p-4 border-l-2 border-brand-orange bg-brand-dark/50">
                  <div className="text-brand-orange text-2xl">✓</div>
                  <div className="text-brand-white/80">{item}</div>
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
              Хотите узнать больше?
            </h2>
            <p className="text-xl text-brand-white/70 mb-8">
              Свяжитесь с нами для получения подробной информации
            </p>
            <Link to="/contacts" className="btn-primary text-lg px-10 py-4">
              Связаться с нами
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}