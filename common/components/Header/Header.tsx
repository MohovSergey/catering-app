const Header = () => {
    return (
      <header className="w-full h-15 flex items-center justify-between px-6 bg-gray-800">
  {/* Логотип */}
  <div className="flex items-center">
    <img src="/logo/logo.svg" alt="Логотип" className="h-10" />
  </div>

  {/* Десктоп меню */}
  <nav className="hidden md:flex space-x-6">
    <a href="#home" className="text-white hover:text-gray-300">Главная</a>
    <a href="#menu" className="text-white hover:text-gray-300">Форматы меню</a>
    <a href="#menu" className="text-white hover:text-gray-300">Меню с ценами</a>
    <a href="#works" className="text-white hover:text-gray-300">Примеры работ</a>
    <a href="#faq" className="text-white hover:text-gray-300">FAQ</a>
    <a href="#contact" className="text-white hover:text-gray-300">Контакты</a>
  </nav>

  {/* Бургер для мобильных */}
  <div className="md:hidden">
    <button>
      {/* Иконка бургера */}
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</header>
    );
};

export default Header;