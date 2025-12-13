'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const backgrounds = [
  '#b0b0b0',
  '#757575',
  '#484848',
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgrounds.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center text-white"
      style={{ background: backgrounds[current], transition: 'background 1s ease-in-out' }}
    >
      <div className="max-w-3xl p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          М кейтеринг
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Организуем банкет, фуршеты и барбекю на любой локации
        </p>
        <Link href="#contact">
          <button className="bg-amber-500 hover:bg-amber-800 text-white font-semibold py-3 px-6 rounded-lg transition">
            Рассчитать меню
          </button>
        </Link>
      </div>
    </section>
  );
}
