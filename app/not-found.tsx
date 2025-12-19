'use client';

import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="w-full min-h-screen bg-gray-800 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-amber-500 mb-6">404</h1>
      <h2 className="text-2xl md:text-4xl text-white font-semibold mb-4">
        Страница не найдена
      </h2>
      <p className="text-gray-300 mb-8 max-w-xl">
        К сожалению, такой страницы не существует. Возможно, вы ошиблись в URL или она была удалена.
      </p>
      <Link href="/">
        <button className="bg-amber-500 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition">
          На главную
        </button>
      </Link>
    </div>
  );
}
