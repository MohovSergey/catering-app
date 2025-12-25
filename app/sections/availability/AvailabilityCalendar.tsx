'use client';

import { useState, useEffect } from 'react';

const WEEK_DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const getDaysInMonth = (year: number, month: number) =>
  new Date(year, month, 0).getDate();

interface Props {
  month: number;
  year: number;
  busyDays?: number[];
  onOpenModal?: () => void;
}

export default function AvailabilityCalendar({ onOpenModal, month, year, busyDays = [] }: Props) {
  const daysCount = getDaysInMonth(year, month);

  return (
    <section className="w-full max-w-sm sm:max-w-md mx-auto text-stone-500">

      <div className="grid grid-cols-7 gap-1 mb-2 text-xs text-stone-500">
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
              onClick={onOpenModal}
              className={`
                h-8 sm:h-9 text-xs sm:text-sm
                flex items-center justify-center rounded-md
                transition cursor-pointer
                ${isBusy
                  ? 'bg-stone-600 text-stone-200 shadow-md'
                  : 'bg-stone-50 text-stone-800 hover:bg-orange-300 shadow-lg hover:text-black'
                }
              `}
            >
              {day}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-4 mt-4 text-xs text-stone-400">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-orange-400 rounded" />
          свободно
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-stone-500 rounded" />
          занято
        </div>
      </div>
    </section>
  );
}
