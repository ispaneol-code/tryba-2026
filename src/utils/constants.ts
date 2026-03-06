export const NAVIGATION = [
  { name: 'Главная', path: '/' },
  { name: 'О компании', path: '/about' },
  { name: 'Сертификаты', path: '/certificates' },  // ← НОВАЯ ВКЛАДКА
  { name: 'Продукция', path: '/products' },
  { name: 'Услуги', path: '/services' },
  { name: 'Экспорт', path: '/export' },
  { name: 'ГАЗПРОМ', path: '/gazprom' },
  { name: 'Контакты', path: '/contacts' },
]

export const COMPANY_INFO = {
  name: 'УралМет',
  fullName: 'ООО «УралМет»',
  phone: '+7 (343) 123-45-67',
  email: 'info@uralmet.ru',
  address: '620110, Свердловская область, г. Екатеринбург, ул. Краснолесья стр.12А, оф.642',
  workTime: 'Пн-Пт: 09:00 - 18:00 (ЕКБ)',
}

export const STATS = [
  { value: 15, suffix: ' лет', label: 'Опыта работы', prefix: '' },
  { value: 150000, suffix: '+', label: 'Номенклатурных позиций', prefix: '' },
  { value: 550, suffix: '+', label: 'Поставщиков', prefix: '' },
  { value: 61, suffix: ' млрд ₽', label: 'Выручка 2025', prefix: '' },
]

export const ADVANTAGES = [
  {
    icon: '🏭',
    title: 'Прямые поставки',
    description: 'Работаем напрямую с производителями и ПАО "Газпром"'
  },
  {
    icon: '📋',
    title: 'Единый реестр МТР',
    description: 'Вся продукция из реестра Газпром с полным пакетом документов'
  },
  {
    icon: '🚚',
    title: 'Доставка по СНГ',
    description: 'Организуем доставку в любой регион России, Узбекистана и Казахстана'
  },
  {
    icon: '✓',
    title: 'Гарантия качества',
    description: 'Сертификаты ISO, разрешения Ростехнадзора, лабораторный контроль'
  }
]