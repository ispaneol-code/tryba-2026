import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAVIGATION } from '../../utils/constants'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="bg-brand-black/95 backdrop-blur-sm fixed w-full z-50 border-b border-brand-orange/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Логотип */}
        <Link to="/" className="text-2xl font-bold">
          <span className="text-brand-white">Урал</span>
          <span className="text-brand-orange">Мет</span>
        </Link>

        {/* Десктоп-меню */}
        <nav className="hidden md:flex gap-6">
          {NAVIGATION.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium transition-colors duration-300 ${
                location.pathname === item.path
                  ? 'text-brand-orange'
                  : 'text-brand-white/80 hover:text-brand-orange'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Мобильное меню (гамбургер) */}
        <button 
          className="md:hidden text-brand-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Мобильное выпадающее меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-brand-orange/20">
          {NAVIGATION.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-3 transition-colors ${
                location.pathname === item.path
                  ? 'text-brand-orange bg-brand-black/30'
                  : 'text-brand-white/80 hover:text-brand-orange hover:bg-brand-black/30'
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