"use client";

import { useState, useRef, useEffect } from "react";
import { MENU, MenuSection, Dish } from "@/feature/model/data/menuData";


const MENU_CARDS = [
  {
    id: 1,
    title: "Пример свадебного меню на 1 персону",
    dishes: [
      ...MENU[0].dishes.slice(0, 2), // первые 2 холодные закуски
      ...MENU[1].dishes.slice(0, 3), // первые 3 салата
    ],
    totalPrice: "1450 руб",
  },
  {
    id: 2,
    title: "Фуршет на одну персону",
    dishes: [
      ...MENU[0].dishes.slice(1, 3),
      ...MENU[1].dishes.slice(2, 5),
    ],
    totalPrice: "1600 руб",
  },
  {
    id: 3,
    title: "Меню свадьбы на 1 персону",
    dishes: [
      ...MENU[0].dishes.slice(0, 3),
      ...MENU[1].dishes.slice(0, 2),
    ],
    totalPrice: "1700 руб",
  },
];


const EXTENDED_MENUS = [MENU_CARDS[MENU_CARDS.length - 1], ...MENU_CARDS, MENU_CARDS[0]];

export default function MenuFormatsCarousel() {
  const [active, setActive] = useState(1);
  const [animate, setAnimate] = useState(true);
  const startX = useRef<number | null>(null);

  const prev = () => setActive((v) => v - 1);
  const next = () => setActive((v) => v + 1);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
    startX.current = null;
  };

  useEffect(() => {
    if (active === EXTENDED_MENUS.length - 1) {
      setTimeout(() => {
        setAnimate(false);
        setActive(1);
      }, 400);
    }
    if (active === 0) {
      setTimeout(() => {
        setAnimate(false);
        setActive(EXTENDED_MENUS.length - 2);
      }, 400);
    }
  }, [active]);

  useEffect(() => {
    if (!animate) requestAnimationFrame(() => setAnimate(true));
  }, [animate]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* arrows */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white"
      >
        ›
      </button>

      {/* track */}
      <div
        className={`flex ${animate ? "transition-transform duration-500 ease-out" : ""}`}
        style={{ transform: `translateX(-${active * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {EXTENDED_MENUS.map((menu, i) => (
          <div key={i} className="w-full shrink-0 px-4 md:px-8">
            <div className="mx-auto max-w-3xl rounded-2xl border border-neutral-500 bg-gray-800 p-6 md:p-8">
              <h2 className="mb-6 text-center text-xl font-semibold md:text-2xl text-amber-500">{menu.title}</h2>

              <ul className="space-y-3">
                {menu.dishes.map((dish: Dish, j) => (
                  <li
                    key={j}
                    className="flex flex-col gap-1 border-b border-neutral-500 pb-3 md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <p className="font-medium text-neutral-300">{dish.name}</p>
                      <p className="text-sm text-neutral-400">{dish.description}</p>
                    </div>
                    <span className="font-semibold text-neutral-300 whitespace-nowrap">{dish.weight} г</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-2 border-t border-neutral-500 pt-4">
                <div className="flex justify-between font-medium text-neutral-300">
                  <span>Итого вес еды на одного гостя</span>
                  <span className="text-amber-400">{menu.dishes.reduce((acc, dish) => acc + dish.weight, 0)} г</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-neutral-300">
                  <span>Итого цена на одного гостя</span>
                  <span className="text-amber-400">{menu.totalPrice}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* dots */}
      <div className="mt-6 flex justify-center gap-2">
        {MENU_CARDS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i + 1)}
            className={`h-2 w-2 rounded-full ${active === i + 1 ? "bg-neutral-900" : "bg-neutral-300"}`}
          />
        ))}
      </div>
    </section>
  );
}
