"use client";

import { useState } from "react";
import { FaClock } from "react-icons/fa";
import styles from "./CallRequestModal.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallRequestModal({ isOpen, onClose }: Props) {
  const [day, setDay] = useState("today");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("+375");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const isValidPhone = /^\+375\d{9}$/.test(phone);

    if (!isValidPhone) {
      alert("Введите номер телефона в формате +375XXXXXXXXX");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/send-call-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ day, time, phone, name }),
      });

      if (res.ok) {
        alert("Запрос отправлен!");
        onClose();
        setDay("today");
        setTime("");
        setPhone("");
        setName("");
      } else {
        alert("Ошибка отправки");
      }
    } catch (err) {
      alert("Ошибка сервера");
    } finally {
      setLoading(false);
    }
  };

  const normalizePhone = (value: string) => {
    let digits = value.replace(/\D/g, "");
    if (!digits.startsWith("375")) {
      digits = "375";
    }
    let rest = digits.slice(3);
    rest = rest.slice(0, 9);
    return "+375" + rest;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="bg-stone-50 w-full max-w-md rounded-xl p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-stone-800 hover:text-stone-500"
        >
          ✕
        </button>

        <h2 className="text-xl text-stone-800 mb-4">Перезвоните мне</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-stone-500 mb-1">
              Перезвоните мне в:
            </label>
            <div className="relative">
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="w-full bg-stone-100 border border-stone-800 text-stone-800 rounded-lg p-2 appearance-none pr-10"
              >
                <option value="today">Сегодня</option>
                <option value="monday">Понедельник</option>
                <option value="tuesday">Вторник</option>
                <option value="wednesday">Среда</option>
                <option value="thursday">Четверг</option>
                <option value="friday">Пятница</option>
                <option value="saturday">Суббота</option>
                <option value="sunday">Воскресенье</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <svg
                  className="w-4 h-4 text-stone-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm text-stone-500 mb-1">Время</label>
            <div className="relative">
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={`w-full bg-stone-100 text-stone-800 border border-stone-800 rounded-lg p-2 pr-10 ${styles.noTimeIcon}`}
                required
              />
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <FaClock className="text-stone-500 w-4 h-4" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm text-stone-500 mb-1">Имя</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full  bg-stone-100 text-stone-800 border border-stone-800 rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-stone-500 mb-1">
              Мой телефон:
            </label>
            <input
              type="tel"
              placeholder="+375..."
              value={phone}
              onChange={(e) => setPhone(normalizePhone(e.target.value))}
              className="w-full bg-stone-100 text-stone-800 border border-stone-800 rounded-lg p-2"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-300 hover:bg-orange-400 transition rounded-lg py-2 text-stone-800 font-medium"
          >
            {loading ? "Отправка..." : "Отправить запрос"}
          </button>
        </form>
      </div>
    </div>
  );
}
