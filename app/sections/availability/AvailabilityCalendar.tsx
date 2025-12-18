'use client';

import { useState } from 'react';

const WEEK_DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const getDaysInMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate();

export default function AvailabilityCalendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const daysCount = getDaysInMonth(year, month);

  // временно: занятые дни
  const busyDays = [6, 13, 19, 24];

  return (
    <section className="w-full max-w-sm sm:max-w-md mx-auto text-white">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
        Свободные даты
      </h2>

      <div className="bg-black/80 rounded-xl p-4">
        {/* месяц */}
        <div className="text-center text-sm text-gray-300 mb-3">
          {today.toLocaleDateString('ru-RU', {
            month: 'long',
            year: 'numeric',
          })}
        </div>

        {/* дни недели */}
        <div className="grid grid-cols-7 gap-1 mb-2 text-xs text-gray-400">
          {WEEK_DAYS.map((day) => (
            <div key={day} className="text-center">
              {day}
            </div>
          ))}
        </div>

        {/* календарь */}
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: daysCount }, (_, i) => {
            const day = i + 1;
            const isBusy = busyDays.includes(day);

            return (
              <div
                key={day}
                className={`
                  h-8 sm:h-9 text-xs sm:text-sm
                  flex items-center justify-center rounded-md
                  transition
                  ${
                    isBusy
                      ? 'bg-gray-700 text-gray-400'
                      : 'bg-gray-900 text-white hover:bg-orange-500 hover:text-black'
                  }
                `}
              >
                {day}
              </div>
            );
          })}
        </div>

        {/* легенда */}
        <div className="flex justify-center gap-4 mt-4 text-xs text-gray-300">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-orange-500 rounded" />
            свободно
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-gray-600 rounded" />
            занято
          </div>
        </div>
      </div>
    </section>
  );
}
