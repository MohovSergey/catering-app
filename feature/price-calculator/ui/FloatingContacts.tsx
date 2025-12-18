'use client';

import { FaTelegramPlane, FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function FloatingContacts() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-50">
      {/* Телеграм */}
      <Link
        href="https://t.me/YourTelegramUsername"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-white/50 
          hover:bg-white/70 
          rounded-full 
          p-3 
          transition 
          duration-300 
          flex 
          items-center 
          justify-center
        "
      >
        <FaTelegramPlane className="text-white w-5 h-5 md:w-6 md:h-6" />
      </Link>

      {/* Телефон */}
      <Link
        href="tel:+375447045182"
        className="
          bg-white/50 
          hover:bg-white/70 
          rounded-full 
          p-3 
          transition 
          duration-300 
          flex 
          items-center 
          justify-center
        "
      >
        <FaPhoneAlt className="text-white w-5 h-5 md:w-6 md:h-6" />
      </Link>
    </div>
  );
}
