import Link from "next/link";
import { FaInstagram, FaTelegramPlane, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-8 px-6 max-w-400 mx-auto">
      <div className="max-w-300 mx-auto flex flex-col md:flex-row justify-between gap-8">

        {/* Юридическая информация */}
        <div className="flex-1 text-sm md:text-base">
          <p className="font-semibold">ЧАСТНОЕ ПРЕДПРИЯТИЕ "М КЕЙТЕРИНГ"</p>
          <p>Адрес: БЕЛАРУСЬ, ГРОДНЕНСКАЯ ОБЛ., Г. ГРОДНО, УЛ. ГАСПАДАРЧАЯ, ДОМ 17А, ОФ. 3, 230005</p>
          <p>УНП: 591051108</p>
        </div>

        {/* Контакты */}
        <div className="flex-1 text-sm md:text-base flex flex-col gap-2">
          <p className="font-semibold">Контакты:</p>
          <div className="flex items-center gap-4">
            <FaInstagram className="text-orange-500 w-5 h-5" />
            <FaTelegramPlane className="text-blue-400 w-5 h-5" />
            <FaPhone className="w-5 h-5" />
            <FaEnvelope className="w-5 h-5" />
          </div>
          <p>+375 (44) 704-51-82</p>
          <p>Мы на связи ежедневно с 10:00 до 20:00</p>
        </div>

        {/* Ссылки на разделы */}
        <div className="flex-1 text-sm md:text-base flex flex-col gap-2">
          <p className="font-semibold">Разделы:</p>
          <Link href="/" className="hover:text-orange-500">Главная</Link>
          <Link href="/menu-formats" className="hover:text-orange-500">Форматы меню</Link>
          <Link href="/menu" className="hover:text-orange-500">Меню с ценами</Link>
          <Link href="/gallery" className="hover:text-orange-500">Примеры работ</Link>
          <Link href="/faq" className="hover:text-orange-500">FAQ</Link>
          <Link href="#contact" className="hover:text-orange-500">Связаться</Link>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} М Кейтеринг. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
