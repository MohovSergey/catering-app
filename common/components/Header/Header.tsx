import Link from "next/link";

interface HeaderProps {
  onOpenModal?: () => void;
}

const Header = ({ onOpenModal }: HeaderProps) => {
  return (
    <header className="w-full h-15 flex items-center justify-between px-6 bg-stone-50 shadow-md max-w-400 mx-auto">
      <div className="flex items-center">
        <img src="/logo/logo.svg" alt="Логотип" className="h-10" />
      </div>

      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="text-black hover:text-stone-400">Главная</Link>
        <Link href="/menu" className="text-black hover:text-stone-400">Меню и услуги</Link>
        <Link href="/faq" className="text-black hover:text-stone-400">FAQ</Link>
        <button
          onClick={onOpenModal}
          className="text-black hover:text-stone-400"
        >
          Связаться
        </button>
      </nav>
    </header>
  );
};

export default Header;
