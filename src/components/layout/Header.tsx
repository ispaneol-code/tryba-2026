import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAVIGATION } from '../../utils/constants'
import emblemaImg from '../../assets/images/emblema.jpg'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Логотип - эмблема */}
        <Link to="/" className="flex items-center">
          <img 
            src={emblemaImg} 
            alt="УралМет - Промышленные поставки" 
            className="h-16 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Десктоп-меню */}
        <nav className="hidden md:flex gap-6">
          {NAVIGATION.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium transition-colors duration-300 relative pb-1 ${
                location.pathname === item.path
                  ? 'text-gray-600 border-b-2 border-black'
                  : 'text-brand-black/80 hover:text-gray-600 hover:border-b-2 hover:border-black border-b-2 border-transparent'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Мобильное меню (гамбургер) */}
        <button 
          className="md:hidden text-brand-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Открыть меню"
        >
          ☰
        </button>
      </div>

      {/* Мобильное выпадающее меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-300 shadow-lg">
          {NAVIGATION.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-3 transition-colors ${
                location.pathname === item.path
                  ? 'text-gray-600 bg-gray-100'
                  : 'text-brand-black/80 hover:text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}