import { useState } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/animations/FadeIn'

// Импорт изображений
import productsHeroImg from '../assets/images/pipes-products.jpg'

const categories = [
  {
    id: 'welded-pipes',
    name: 'Трубы электросварные',
    items: [
      'ГОСТ 10704-91 / 10705-80 (с ОТО)',
      'ГОСТ 10704-91 / 10706-76 (с ОТО)',
      'ГОСТ 20295-85',
      'ГОСТ 3262-75',
      'ТУ 1381-012-05757848-2015'
    ]
  },
  {
    id: 'seamless-pipes',
    name: 'Трубы бесшовные',
    items: [
      'ГОСТ 8732-78 / 8731-74',
      'ГОСТ 8734-75 / 8733-74',
      'ГОСТ Р 53383-2009',
      'ГОСТ Р 54159-2010',
      'ГОСТ 32528-2013',
      'ГОСТ 32678-2014',
      'ГОСТ 33229-2015',
      'ГОСТ 550-75',
      'ГОСТ 550-2020'
    ]
  },
  {
    id: 'cold-resistant',
    name: 'Трубы хладостойкие',
    items: [
      'ТУ 14-3р-1128-2007',
      'ТУ 14-159-1128-2008',
      'ТУ 1319-1128-00186654-2012',
      'ТУ 14-3р-137-2015',
      'ТУ 24.20.11-037-02650742-2019'
    ]
  },
  {
    id: 'boiler-pipes',
    name: 'Трубы котельные',
    items: [
      'ТУ 14-3р-55-2001',
      'ТУ 14-3-190-2004'
    ]
  },
  {
    id: 'corrosion-resistant',
    name: 'Трубы коррозионно стойкие',
    items: [
      'ТУ 1317-006.1-593377520-2003',
      'ТУ 14-3Р-124-2012',
      'ТУ 14-3Р-124-2017',
      'ТУ 24.20.13.110-369-00186619-2018',
      'ТУ 24.20.13.110-065-00186654-2019'
    ]
  },
  {
    id: 'stainless-pipes',
    name: 'Трубы нержавеющие',
    items: [
      'ГОСТ 9940-81',
      'ГОСТ 9941-81',
      'ГОСТ 9940-2022',
      'ГОСТ 9941-2022'
    ]
  },
  {
    id: 'fittings',
    name: 'Соединительные детали',
    items: [
      'ТУ 1469-017-38948552-2015',
      'ТУ 24.20.40-018-01395041-2022',
      'ТУ 1469-019-04834179-2014',
      'ТУ 1469-001-58154529-2007',
      'ТУ 1469-003-67983609-2012',
      'ТУ 1469-015-74238272-2008',
      'ТУ 1469-053-78795288-2016',
      'ТУ 5768-024-04834179-2016',
      'ТУ 3615-034-00153229-2013',
      'ТУ 24.20.40.000-048-74238272-2017',
      'ТУ 1469-004-70831270-2011',
      'ТУ 1469-013-04834179-2014',
      'ТУ 1469-009-70831270-2016'
    ]
  },
  {
    id: 'insulated-pipes',
    name: 'Трубы в изоляции',
    items: [
      'Трубы в ППУ-ПЭ изоляции',
      'Трубы в ППУ-ОЦ изоляции',
      'Трубы в 2-х слойной ВУС изоляции',
      'Трубы в 3-х слойной ВУС изоляции'
    ]
  },
  {
    id: 'special-pipes',
    name: 'Специальные трубы',
    items: [
      'Трубы по ТУ 24.20-001-44146124-2023 для свай, опор и металлоконструкций',
      'Труба обечаечная'
    ]
  },
  {
    id: 'sheet-metal',
    name: 'Листовой прокат',
    items: [
      'Лист горячекатаный',
      'Лист холоднокатаный',
      'Лист оцинкованный',
      'Лист с полимерным покрытием',
      'Рулонный прокат'
    ]
  },
  {
    id: 'shaped-metal',
    name: 'Фасонный прокат',
    items: [
      'Балка двутавровая',
      'Двутавр',
      'Уголок стальной',
      'Уголок стальной гнутый',
      'Швеллер'
    ]
  },
  {
    id: 'bar-metal',
    name: 'Сортовой прокат',
    items: [
      'Арматура строительная',
      'Квадрат',
      'Круг',
      'Пруток стальной',
      'Проволока',
      'Шестигранник'
    ]
  },
  {
    id: 'structures',
    name: 'Металлоконструкции',
    items: [
      'Металлоконструкции по чертежам заказчика',
      'Нестандартные металлоконструкции'
    ]
  }
]

// Функция для получения всех товаров из всех категорий
const getAllItems = () => {
  return categories.flatMap(cat => 
    cat.items.map(item => ({
      name: item,
      category: cat.name
    }))
  )
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')

  // Получаем товары для отображения
  const displayedItems = activeCategory === 'all' 
    ? getAllItems() 
    : categories.find((cat) => cat.id === activeCategory)?.items.map(item => ({ name: item, category: categories.find(c => c.id === activeCategory)?.name })) || []

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
              Продукция <span className="text-brand-orange">УралМет</span>
            </h1>
            <p className="text-xl text-brand-white/70 max-w-3xl">
              Широкий сортамент трубной продукции и металлопроката 
              для нефтегазовой и строительной отраслей
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Специализация */}
      <section className="section bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-white mb-4 text-center">
              Специализация компании
            </h2>
            <p className="text-brand-white/70 text-center mb-12">
              Сортамент отгружаемой продукции
            </p>
          </FadeIn>

          {/* Фильтр категорий */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {/* Кнопка "Весь ассортимент" */}
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-brand-orange text-white'
                  : 'bg-brand-dark text-brand-white/70 hover:bg-brand-dark/80'
              }`}
            >
              Весь ассортимент
            </button>
            
            {/* Кнопки категорий */}
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-brand-orange text-white'
                    : 'bg-brand-dark text-brand-white/70 hover:bg-brand-dark/80'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Заголовок текущего раздела */}
          <FadeIn className="mb-6">
            <h3 className="text-xl font-bold text-brand-white text-center">
              {activeCategory === 'all' 
                ? 'Весь ассортимент продукции' 
                : categories.find(cat => cat.id === activeCategory)?.name}
            </h3>
          </FadeIn>

          {/* Список продукции */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedItems.map((item, index) => (
              <FadeIn key={index} delay={index * 50}>
                <div className="card group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-brand-orange rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="text-base font-semibold text-brand-white mb-1">
                        {item.name}
                      </h3>
                      {activeCategory === 'all' && (
                        <p className="text-brand-orange/70 text-xs mb-2">
                          {item.category}
                        </p>
                      )}
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
            <Link to="/contacts" className="btn-primary text-lg px-10 py-4 inline-block">
              Получить консультацию
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}