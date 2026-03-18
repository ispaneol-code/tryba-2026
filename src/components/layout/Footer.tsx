import { Link } from 'react-router-dom'
import { NAVIGATION } from '../../utils/constants'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Логотип и инфо */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-brand-black">Урал</span>
              <span className="text-gray-600">Мет</span>
            </h3>
            <p className="text-brand-black/60 text-sm">
              Поставка труб и оборудования для нефтегазового сектора
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-brand-black font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2">
              {NAVIGATION.slice(0, 4).map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-brand-black/60 hover:text-gray-600 transition-colors inline-block pb-1 border-b-2 border-transparent hover:border-black"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-brand-black font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-brand-black/60 text-sm">
              <li>+7 (343) 226-45-57</li>
              <li>office@um-pipe.ru</li>
              <li>г. Екатеринбург, ул. Краснолесья стр.12А</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-black/10 mt-8 pt-8 text-center text-brand-black/40 text-sm">
          © {new Date().getFullYear()} УралМет. Все права защищены.
        </div>
      </div>
    </footer>
  )
}