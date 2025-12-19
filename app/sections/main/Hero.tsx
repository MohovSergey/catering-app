'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface HeroBannerProps {
  onOpenModal?: () => void;
}

const images = [
  '/heroImg/beef-&-frenchBeens.jpg',
  '/heroImg/chicken.jpg',
  '/heroImg/chucken-terin.jpg',
  '/heroImg/grilled-chicken-leg.jpg',
  '/heroImg/pork-roll.jpg',
  '/heroImg/salmon-&-veg.jpg',
];

export default function HeroBanner({ onOpenModal }: HeroBannerProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden max-w-400 mx-auto px-4">

      {images.map((src, idx) => (
        <div key={idx} className="absolute inset-0">
          <Image
            src={src}
            alt=""
            fill
            style={{
              objectFit: 'cover',
              opacity: idx === current ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
            priority={idx === current}
          />
        </div>
      ))}

      {/* затемнение */}
      <div className="absolute inset-0 bg-black/50" />


      <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
        <div className="max-w-3xl p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">М кейтеринг</h1>
          <p className="text-lg md:text-2xl mb-8">
            Организуем банкет, фуршеты и барбекю на любой локации
          </p>
          <button
            onClick={onOpenModal}
            className="bg-amber-500 hover:bg-amber-800 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Рассчитать меню
          </button>
        </div>
      </div>
    </section>
  );
}
