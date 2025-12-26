'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

interface HeaderProps {
  onOpenModal?: () => void;
}

const Header = ({ onOpenModal }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Отслеживаем ширину окна
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    handleResize(); // установка текущей ширины сразу
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Закрываем меню, если экран стал больше md (768px)
  useEffect(() => {
    if (windowWidth >= 768 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [windowWidth, isMenuOpen]);

  // Закрытие меню при клике вне навигации
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  };

  return (
    <>
      {/* Блокируем экран и добавляем блюр при открытом меню на мобильной версии */}
      {isMenuOpen && windowWidth < 768 && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={handleBackdropClick}
        />
      )}

      <div
        className={`
          fixed top-6 left-1/2 -translate-x-1/2
          w-[90%] md:w-[80%] lg:w-[80%]
          bg-stone-50
          shadow-lg
          z-50
          transition-all duration-500 ease-out
          rounded-2xl
        `}
      >
        <header className="h-16 flex items-center justify-between px-6 rounded-t-2xl">
          <img src="/logo/logo.svg" alt="Логотип" className="h-10" />
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-stone-400">Главная</Link>
            <Link href="/menu" className="hover:text-stone-400">Меню и услуги</Link>
            <Link href="/faq" className="hover:text-stone-400">FAQ</Link>
            <button onClick={onOpenModal} className="hover:text-stone-400">
              Связаться
            </button>
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Открыть меню"
          >
            <span className="w-6 h-0.5 bg-black" />
            <span className="w-6 h-0.5 bg-black" />
            <span className="w-6 h-0.5 bg-black" />
          </button>
        </header>

        {/* Мобильное меню */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all duration-500 ease-out
            ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}
          `}
        >
          <nav className="flex flex-col py-2 rounded-b-2xl">
            <Link href="/" onClick={closeMenu} className="px-6 py-4">
              Главная
            </Link>
            <Link href="/menu" onClick={closeMenu} className="px-6 py-4">
              Меню и услуги
            </Link>
            <Link href="/faq" onClick={closeMenu} className="px-6 py-4">
              FAQ
            </Link>
            <button
              onClick={() => {
                closeMenu();
                onOpenModal?.();
              }}
              className="px-6 py-4 text-left"
            >
              Связаться
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
