import Footer from "@/common/components/Footer/Footer";
import Header from "@/common/components/Header/Header";
import FloatingContacts from "@/feature/price-calculator/ui/FloatingContacts";
import About from "./sections/main/About";
import { Availability } from "./sections/main/Availability";
import HeroBanner from "./sections/main/Hero";
import EventsGallery from "@/feature/price-calculator/ui/EventsGallery";

export default function Home() {
  return (
    <div className="w-full bg-gray-800">
      <Header />
      <HeroBanner />
      <About />
      <EventsGallery />
      <Availability/>
      <Footer/>
      <FloatingContacts />
    </div>
  )}