import Link from "next/link";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";

interface FloatingContactsProps {
  onOpenModal?: () => void;
}

export default function FloatingContacts({ onOpenModal }: FloatingContactsProps) {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-40">
      <Link
        href="https://t.me/YourTelegramUsername"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/50 hover:bg-white/70 rounded-full p-3 transition flex items-center justify-center"
      >
        <FaTelegramPlane className="text-white w-5 h-5 md:w-6 md:h-6" />
      </Link>

      <button
        onClick={onOpenModal}
        className="bg-white/50 hover:bg-white/70 rounded-full p-3 transition flex items-center justify-center"
      >
        <FaPhoneAlt className="text-white w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
}
