import FadeIn from '../components/animations/FadeIn'

export default function Gazprom() {
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
                  UM-PIPE внесена в реестр поставщиков ПАО "Газпром" и осуществляет 
                  поставки продукции, соответствующей всем требованиям корпоративных 
                  стандартов.
                </p>
                <p>
                  Вся продукция проходит строгий контроль качества и сопровождается 
                  полным пакетом разрешительной документации.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange">✓</span>
                    <span>Соответствие ГОСТ и ТУ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange">✓</span>
                    <span>Сертификаты качества</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange">✓</span>
                    <span>Паспорта на продукцию</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange">✓</span>
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
                      <div className="w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 flex-shrink-0" />
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
            <button className="btn-primary text-lg px-10 py-4">
              Оставить заявку
            </button>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}