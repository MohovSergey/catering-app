import Link from "next/link";
import { FaInstagram, FaTelegramPlane, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full mt-10 bg-stone-200  py-8 px-6 max-w-400 mx-auto">
      <div className="max-w-300 mx-auto flex flex-col md:flex-row justify-between gap-8">

        {/* Юридическая информация */}
        <div className="flex-1 text-sm md:text-base">
          <p className="font-semibold text-stone-500">ЧАСТНОЕ ПРЕДПРИЯТИЕ "М КЕЙТЕРИНГ"</p>
          <p>Адрес: БЕЛАРУСЬ, ГРОДНЕНСКАЯ ОБЛ., Г. ГРОДНО, УЛ. ГАСПАДАРЧАЯ, ДОМ 17А, ОФ. 3, 230005</p>
          <p>УНП: 591051108</p>
        </div>

        {/* Контакты */}
        <div className="flex-1 text-sm md:text-base flex flex-col gap-2">
          <p className="font-semibold text-stone-500">Контакты:</p>
          <div className="flex items-center gap-4">
            <FaInstagram className="text-orange-300 w-5 h-5" />
            <FaTelegramPlane className="text-blue-300 w-5 h-5" />
            <FaPhone className="w-5 text-stone-500 h-5" />
            <FaEnvelope className="w-5 text-stone-500 h-5" />
          </div>
          <p>+375 (44) 704-51-82</p>
          <p>Мы на связи ежедневно с 10:00 до 20:00</p>
        </div>

        {/* Ссылки на разделы */}
        <div className="flex-1 text-sm md:text-base flex flex-col gap-2">
          <p className="font-semibold text-stone-500">Разделы:</p>
          <Link href="/" className="hover:text-orange-500">Главная</Link>
          <Link href="/menu" className="hover:text-orange-300">Меню и услуги</Link>
          <Link href="/faq" className="hover:text-orange-300">FAQ</Link>
          <Link href="#contact" className="hover:text-orange-300">Связаться</Link>
        </div>
      </div>

      <div className="mt-6 text-center text-stone-500 text-xs">
        © {new Date().getFullYear()} М Кейтеринг. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
