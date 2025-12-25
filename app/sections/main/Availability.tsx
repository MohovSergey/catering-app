'use client';

import { FlexContainer } from "@/common/components/FlexContainer";
import React, { useState } from "react";
import AvailabilityCalendar from "../availability/AvailabilityCalendar";

type BusyDaysMap = Record<string, number[]>;

type Props =  {onOpenModal?: () => void} 

export const busyDaysMap: BusyDaysMap = {
  '2025-12': [6, 13, 19, 24],
  '2026-01': [2, 8, 20],
  '2026-02': [5, 12, 18, 25],
};

export const Availability = ({onOpenModal}: Props) => {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth() + 1); // 1-12
  const [year, setYear] = useState(today.getFullYear());

  const handlePrevMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  };


  const monthKey = `${year}-${month.toString().padStart(2, '0')}`;
  const busyDays = busyDaysMap[monthKey] || [];

  return (
    <FlexContainer className="bg-stone-50 flex flex-col pt-10 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row gap-6">

        <div className="bg-stone-100 shadow-lg p-6 rounded-lg flex-1 min-w-70">
          <h2 className="text-2xl text-stone-500 md:text-3xl font-bold mb-4">Условия заказа</h2>
          <p className="mb-4">
            Мы принимаем заказы не позднее чем за 5 дней до мероприятия и при наличии свободных дат.
            В календаре справа отмечены занятые дни, на которые мы к сожалению уже не сможем принять новые брони.
          </p>
          <p className="mb-2">
            Минимальный заказ по кухне для банкетов с выездом персонала на локацию: <strong>от 2000 руб</strong>
          </p>
          <p className="mb-2">
            Минимальный заказ на доставку или самовывоз: <strong>от 1500 руб</strong>
          </p>
          <p className="mt-4">
            По вопросам бронирования пишите нам в телеграм либо звоните по номеру <strong>+375(44)704-51-82</strong>
          </p>
        </div>

        {/* Календарь */}
        <div className="bg-stone-100 shadow-lg p-4 rounded-lg flex-1 min-w-70 flex flex-col items-center">
          <div className="flex justify-between w-full mb-4">
            <button
              className="bg-stone-50 shadow-lg text-stone-500 px-4 py-2 rounded hover:bg-stone-200 transition"
              onClick={handlePrevMonth}
            >
              {"<"}
            </button>
            <span className="text-stone-800 font-semibold text-lg">
              {new Date(year, month - 1).toLocaleString("ru-RU", { month: "long", year: "numeric" })}
            </span>
            <button
              className="bg-stone-50 shadow-md text-stone-500 px-4 py-2 rounded hover:bg-stone-200 transition"
              onClick={handleNextMonth}
            >
              {">"}
            </button>
          </div>

          <AvailabilityCalendar month={month} year={year} busyDays={busyDays} onOpenModal={onOpenModal}/>
        </div>
      </div>
    </FlexContainer>
  );
};
