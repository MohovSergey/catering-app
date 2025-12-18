'use client';

import { useState, useEffect } from 'react';

const WEEK_DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const getDaysInMonth = (year: number, month: number) =>
  new Date(year, month, 0).getDate();

interface Props {
  month: number;
  year: number;
  busyDays?: number[];
}

export default function AvailabilityCalendar({ month, year, busyDays = [] }: Props) {
  const daysCount = getDaysInMonth(year, month);

  return (
    <section className="w-full max-w-sm sm:max-w-md mx-auto text-white">

      <div className="grid grid-cols-7 gap-1 mb-2 text-xs text-gray-400">
        {WEEK_DAYS.map((day) => (
          <div key={crypto.randomUUID()} className="text-center">{day}</div>
        ))}
      </div>

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
                ${isBusy
                  ? 'bg-gray-600 text-gray-400'
                  : 'bg-gray-900 text-white hover:bg-orange-500 hover:text-black'
                }
              `}
            >
              {day}
            </div>
          );
        })}
      </div>

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
    </section>
  );
}
