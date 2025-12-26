import { FlexContainer } from "@/common/components/FlexContainer";
import React from "react";
import { FaUtensils, FaUsers, FaClipboardList, FaCalculator, FaMapMarkedAlt, FaRegCalendarCheck } from "react-icons/fa";

const advantages = [
  { icon: <FaUtensils size={40} />, text: "Приготовили более 400 банкетов" },
  { icon: <FaUsers size={40} />, text: "Работаем только с опытным персоналом" },
  { icon: <FaClipboardList size={40} />, text: "Индивидуально разрабатываем меню" },
  { icon: <FaCalculator size={40} />, text: "Быстрый расчет стоимости" },
  { icon: <FaMapMarkedAlt size={40} />, text: "Готовим на любых локациях и в любых условиях" },
  { icon: <FaRegCalendarCheck size={40} />, text: "Организуем банкеты под ключ" },
];

const About = () => {
  return (
    <FlexContainer className="bg-stone-50">
      <div className="bg-stone-50 w-full min-h-120 flex flex-col items-center">
        <h1 className="mt-20 font-bold text-3xl">О нас</h1>
        <p className="mt-6 text-center max-w-300">
          Мы - кейтеринг из Гродно.
          Наш проект был основан в 2017 году и с тех пор мы организовали более 400 различных темотических банкетов под разные форматы мероприятий.
          Мы специализируемся на организации свадебных и корпоративных банкетов, а так же барбекю-вечеринок. 
          По вопросам бронирования или просчета меню на ваше мероприятие пишите в наш телеграм или звоните нам по номеру +375 44 704-51-82

        </p>


        <div className="mt-20 flex flex-wrap justify-center gap-6">
          {advantages.map((adv, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-45">

              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-orange-300 text-white text-3xl mb-4 
                              transition-transform transform hover:scale-110">
                {adv.icon}
              </div>

              <p className="text-sm">{adv.text}</p>
            </div>
          ))}
        </div>
      </div>
    </FlexContainer>
  );
};

export default About;
