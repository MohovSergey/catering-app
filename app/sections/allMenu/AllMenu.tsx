"use client";

import { MENU, Dish } from "@/feature/model/data/menuData";
import { FaLeaf, FaPepperHot } from "react-icons/fa";
import { generateMenuPdf } from "@/common/shared/lib/generateMenuPdf";

export default function AllMenu() {
  return (
    <>
<div className="max-w-5xl mx-auto px-4 md:px-8 pt-8 flex justify-end gap-4">
  <a
    href="https://drive.google.com/drive/folders/15EU6Nj27Gw-ATLd7gW_95PYWsgGoB2o-?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-md bg-sky-600 text-stone-50 px-4 py-2 text-sm font-semibold hover:bg-sky-800"
  >
    Фото блюд
  </a>

  <button
    onClick={generateMenuPdf}
    className="rounded-md bg-amber-300 px-4 py-2 text-sm font-semibold text-stone-800 hover:bg-amber-400"
  >
    Скачать меню
  </button>
</div>

      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12 space-y-12">
        {MENU.map((section) => (
          <div key={section.id}>
            <h2 className="mb-6 text-2xl font-semibold text-stone-500">
              {section.title}
            </h2>

            <ul className="space-y-4">
              {section.dishes.map((dish: Dish, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 border-b border-neutral-700 pb-3"
                >
                  <div className="flex flex-col gap-1 flex-1">
                    <div className="flex items-center gap-2">
                      {dish.vegetarian && <FaLeaf className="text-lime-700 w-4 h-4" />}
                      {dish.spicy && <FaPepperHot className="text-red-700 w-4 h-4" />}
                      <span className="font-medium text-stone-800">
                        {dish.name}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-400">
                      {dish.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="text-neutral-500">{dish.weight} г</span>
                    <span className="font-semibold text-amber-400">
                      {dish.price}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
