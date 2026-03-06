import { Link } from 'react-router-dom'
import { NAVIGATION } from '../../utils/constants'

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-orange/20 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Логотип и инфо */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-brand-white">Урал</span>
              <span className="text-brand-orange">Мет</span>
            </h3>
            <p className="text-brand-white/60 text-sm">
              Поставка труб и оборудования для нефтегазового сектора
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-brand-white font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2">
              {NAVIGATION.slice(0, 4).map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-brand-white/60 hover:text-brand-orange transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-brand-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-brand-white/60 text-sm">
              <li>+7 (343) 226-45-57</li>
              <li>office@um-pipe.ru</li>
              <li>г. Екатеринбург, ул. Краснолесья стр.12А</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-white/10 mt-8 pt-8 text-center text-brand-white/40 text-sm">
          © {new Date().getFullYear()} УралМет. Все права защищены.
        </div>
      </div>
    </footer>
  )
}