'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface FaqItem {
  question: string;
  answer: string;
}

const usefulInfo: FaqItem[] = [
  {
    question: 'Как оформить заказ?',
    answer: 'Вы можете оставить заявку на сайте через форму заказа, либо связаться с нами напрямую через телефон или Telegram.',
  },
  {
    question: 'Какие способы оплаты доступны?',
    answer: 'Мы принимаем оплату наличными, картой, а также через безналичный расчет для организаций.',
  },
  {
    question: 'Как забронировать дату мероприятия?',
    answer: 'Для бронирования необходимо согласовать дату и внести предоплату.',
  },
];

const faqQuestions: FaqItem[] = [
  {
    question: 'Сколько времени занимает подготовка заказа?',
    answer: 'Время подготовки зависит от объема заказа. Обычно от 24 до 48 часов.',
  },
  {
    question: 'Можно ли изменить состав меню после заказа?',
    answer: 'Да, изменение возможно за 48 часов до мероприятия.',
  },
  {
    question: 'Есть ли у вас вегетарианские блюда?',
    answer: 'Да, мы предлагаем отдельное вегетарианское меню. Все позиции отмечены иконкой листика.',
  },
];

export default function FAQPage() {
  const [openSection, setOpenSection] = useState<null | number>(null);
  const [openFaq, setOpenFaq] = useState<null | number>(null);

  return (
    <div className="w-full min-h-screen bg-gray-800 text-white px-4 md:px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-amber-500 mb-12 text-center">
        FAQ
      </h1>

      {/* Раздел 1 */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Полезная информация для наших заказчиков</h2>
        <div className="space-y-3">
          {usefulInfo.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-xl p-4 cursor-pointer transition"
              onClick={() => setOpenSection(openSection === idx ? null : idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-white">{item.question}</h3>
                <FaChevronDown
                  className={`text-amber-500 transition-transform duration-300 ${
                    openSection === idx ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {openSection === idx && (
                <p className="mt-2 text-gray-300">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Раздел 2 */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Часто задаваемые вопросы</h2>
        <div className="space-y-3">
          {faqQuestions.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-xl p-4 cursor-pointer transition"
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-white">{item.question}</h3>
                <FaChevronDown
                  className={`text-amber-500 transition-transform duration-300 ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {openFaq === idx && (
                <p className="mt-2 text-gray-300">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
