'use client';

import { FaTelegramPlane, FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';
import CallRequestModal from '@/common/components/Modals/CallRequestModal';

export default function FloatingContacts() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-40">
        {/* Телеграм */}
        <Link
          href="https://t.me/YourTelegramUsername"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/50 hover:bg-white/70 rounded-full p-3 transition flex items-center justify-center"
        >
          <FaTelegramPlane className="text-white w-5 h-5 md:w-6 md:h-6" />
        </Link>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-white/50 hover:bg-white/70 rounded-full p-3 transition flex items-center justify-center"
        >
          <FaPhoneAlt className="text-white w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      <CallRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
