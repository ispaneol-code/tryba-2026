import { useState } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/animations/FadeIn'

// Импорт изображений
import productsHeroImg from '../assets/images/pipes-products.jpg'

const categories = [
  {
    id: 'pipes',
    name: 'Трубы',
    items: [
      'Трубы стальные электросварные прямошовные (ГОСТ 10704-91)',
      'Трубы стальные электросварные спиральношовные (ГОСТ 20295-85)',
      'Трубы стальные бесшовные горячедеформированные (ГОСТ 8732-78)',
      'Трубы стальные бесшовные холоднодеформированные (ГОСТ 8734-75)',
      'Трубы нефтегазопроводные (ГОСТ Р 52079-2003)',
      'Трубы обсадные (ГОСТ 632-80)',
      'Трубы насосно-компрессорные (ГОСТ 633-80)'
    ]
  },
  {
    id: 'fittings',
    name: 'Детали трубопроводов',
    items: [
      'Отводы крутоизогнутые (ГОСТ 17375-2001)',
      'Отводы гнутые (ГОСТ 24950-81)',
      'Переходы концентрические и эксцентрические (ГОСТ 17378-2001)',
      'Тройники равнопроходные и переходные (ГОСТ 17376-2001)',
      'Заглушки эллиптические и плоские (ГОСТ 17379-2001)',
      'Фланцы стальные (ГОСТ 12820-80, ГОСТ 12821-80)'
    ]
  },
  {
    id: 'valves',
    name: 'Запорная арматура',
    items: [
      'Краны шаровые цельносварные (реестр Газпром)',
      'Краны шаровые фланцевые',
      'Задвижки стальные клиновые (ГОСТ 5761-2005)',
      'Затворы дисковые поворотные',
      'Клапаны обратные',
      'Клапаны предохранительные'
    ]
  },
  {
    id: 'equipment',
    name: 'Оборудование',
    items: [
      'Насосное оборудование',
      'Резервуарное оборудование',
      'Электроприводы',
      'Крепёжные изделия (шпильки, болты, гайки, шайбы)',
      'Уплотнительные материалы (паронит, фторопласт, графит)',
      'Изолирующие фланцевые соединения (ИФС)'
    ]
  }
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('pipes')

  return (
    <div className="pt-20">
      {/* Hero с фото */}
      <section className="relative bg-brand-dark py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${productsHeroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6">
              Продукция <span className="text-brand-orange">UM-PIPE</span>
            </h1>
            <p className="text-xl text-brand-white/70 max-w-3xl">
              Широкий ассортимент труб, деталей трубопроводов и запорной арматуры 
              из Единого реестра МТР ПАО "Газпром"
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Категории */}
      <section className="section bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          {/* Фильтр категорий */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-brand-orange text-white'
                    : 'bg-brand-dark text-brand-white/70 hover:bg-brand-dark/80'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Список продукции */}
          <div className="grid md:grid-cols-2 gap-6">
            {categories
              .find((cat) => cat.id === activeCategory)
              ?.items.map((item, index) => (
                <FadeIn key={index} delay={index * 50}>
                  <div className="card group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-brand-orange rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-brand-white mb-2">
                          {item}
                        </h3>
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
            <Link to="/contacts" className="btn-primary text-lg px-10 py-4">
              Отправить заявку
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}