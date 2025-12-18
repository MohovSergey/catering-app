"use client";

import { MENU, Dish } from "@/feature/model/data/menuData";
import { FaLeaf, FaPepperHot } from "react-icons/fa";

export default function AllMenu() {
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-8 py-12 space-y-12">
      {MENU.map((section) => (
        <div key={section.id}>
          <h2 className="mb-6 text-2xl font-semibold text-amber-500">{section.title}</h2>
          <ul className="space-y-4">
            {section.dishes.map((dish: Dish, idx) => (
              <li key={idx} className="flex items-start gap-4 border-b border-neutral-700 pb-3">
                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-center gap-2">
                    {dish.vegetarian && <FaLeaf className="text-green-500 w-4 h-4" />}
                    {dish.spicy && <FaPepperHot className="text-red-500 w-4 h-4" />}
                    <span className="font-medium text-neutral-200">{dish.name}</span>
                  </div>
                  <p className="text-sm text-neutral-400">{dish.description}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-neutral-300">{dish.weight} г</span>
                  <span className="font-semibold text-amber-400">{dish.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
