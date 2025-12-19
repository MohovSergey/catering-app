import Link from "next/link";

interface HeaderProps {
  onOpenModal?: () => void;
}

const Header = ({ onOpenModal }: HeaderProps) => {
  return (
    <header className="w-full h-15 flex items-center justify-between px-6 bg-black max-w-400 mx-auto">
      <div className="flex items-center">
        <img src="/logo/logo.svg" alt="Логотип" className="h-10" />
      </div>

      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="text-white hover:text-gray-300">Главная</Link>
        <Link href="/menu-formats" className="text-white hover:text-gray-300">Форматы меню</Link>
        <Link href="/menu" className="text-white hover:text-gray-300">Меню и услуги</Link>
        <Link href="/faq" className="text-white hover:text-gray-300">FAQ</Link>
        <button
          onClick={onOpenModal}
          className="text-white hover:text-gray-300"
        >
          Связаться
        </button>
      </nav>
    </header>
  );
};

export default Header;
