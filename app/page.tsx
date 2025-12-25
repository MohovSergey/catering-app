'use client';

import { useState } from "react";
import Footer from "@/common/components/Footer/Footer";
import Header from "@/common/components/Header/Header";
import FloatingContacts from "@/feature/price-calculator/ui/FloatingContacts";
import About from "./sections/main/About";
import { Availability } from "./sections/main/Availability";
import HeroBanner from "./sections/main/Hero";
import EventsGallery from "@/feature/price-calculator/ui/EventsGallery";
import CallRequestModal from "@/common/components/Modals/CallRequestModal";
import MenuFormatsCarousel from "./sections/main/MenuFormstsCarousel";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full bg-stone-50">

      <Header onOpenModal={openModal} />


      <HeroBanner onOpenModal={openModal} />

      <About />
      <MenuFormatsCarousel />
      <EventsGallery />
      <Availability onOpenModal={openModal}/>
      <Footer />


      <FloatingContacts onOpenModal={openModal} />


      <CallRequestModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
