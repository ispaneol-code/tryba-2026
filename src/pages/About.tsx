import FadeIn from '../components/animations/FadeIn'
import { STATS, ADVANTAGES } from '../utils/constants'

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

      {/* История компании */}
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
              <div className="grid grid-cols-2 gap-6">
                <div className="card text-center">
                  <div className="text-4xl font-bold text-brand-orange mb-2">2011</div>
                  <div className="text-brand-white/70 text-sm">Год основания</div>
                </div>
                <div className="card text-center">
                  <div className="text-4xl font-bold text-brand-orange mb-2">4 000</div>
                  <div className="text-brand-white/70 text-sm">м² складских площадей</div>
                </div>
                <div className="card text-center">
                  <div className="text-4xl font-bold text-brand-orange mb-2">15</div>
                  <div className="text-brand-white/70 text-sm">Лет на рынке</div>
                </div>
                <div className="card text-center">
                  <div className="text-4xl font-bold text-brand-orange mb-2">550+</div>
                  <div className="text-brand-white/70 text-sm">Поставщиков</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="section bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-white mb-12 text-center">
              Наши показатели
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-3">
                    {stat.prefix}{stat.value.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-brand-white/70 text-sm">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Продукция */}
      <section className="section bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-white mb-12">
              Что мы поставляем
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Трубы стальные электросварные',
              'Трубы стальные бесшовные',
              'Трубы нефтегазопроводные',
              'Детали трубопроводов (отводы, переходы, тройники)',
              'Фланцевые соединения',
              'Запорная арматура (краны шаровые, задвижки, затворы)',
              'Крепёжные изделия',
              'Уплотнительные материалы',
              'Насосное оборудование',
              'Резервуарное оборудование',
              'Электроприводы',
              'Нестандартное оборудование'
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 50}>
                <div className="flex items-center gap-3 p-4 bg-brand-dark rounded-lg hover:bg-brand-dark/80 transition-colors">
                  <div className="w-2 h-2 bg-brand-orange rounded-full flex-shrink-0" />
                  <span className="text-brand-white">{item}</span>
                </div>
              </FadeIn>
            ))}
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
    </div>
  )
}