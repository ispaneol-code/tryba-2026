interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  onClick?: () => void
  className?: string
}

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = 'font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95'
  const variants = {
    primary: 'bg-brand-orange hover:bg-brand-orangeHover text-white',
    outline: 'border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white'
  }

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}