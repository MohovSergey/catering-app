import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-15 flex items-center justify-between px-6 bg-black max-w-400 mx-auto">
      {/* logo */}
      <div className="flex items-center">
        <img src="/logo/logo.svg" alt="Логотип" className="h-10" />
      </div>

      {/* desktop menu */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="text-white hover:text-gray-300">
          Главная
        </Link>
        <Link href="/menu-formats" className="text-white hover:text-gray-300">
          Форматы меню
        </Link>
        <Link href="/menu" className="text-white hover:text-gray-300">
          Меню с ценами
        </Link>
        <Link href="/gallery" className="text-white hover:text-gray-300">
          Примеры работ
        </Link>
        <Link href="/faq" className="text-white hover:text-gray-300">
          FAQ
        </Link>
        <Link href="/contact" className="text-white hover:text-gray-300">
          Связаться
        </Link>
      </nav>

      {/* mobile burger */}
      <div className="md:hidden">
        <button>
          {/* burger-ico */}
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
