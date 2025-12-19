'use client';

import Footer from "@/common/components/Footer/Footer";
import Header from "@/common/components/Header/Header";
import CallRequestModal from "@/common/components/Modals/CallRequestModal";
import FloatingContacts from "@/feature/price-calculator/ui/FloatingContacts";
import { useState } from "react";
import FAQPage from "../sections/FAQ/FAQ";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full bg-gray-800">

      <Header onOpenModal={openModal} />
      <FAQPage />
      <Footer />
      <FloatingContacts onOpenModal={openModal} />
      <CallRequestModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
