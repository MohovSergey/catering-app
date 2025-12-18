import Footer from "@/common/components/Header/Footer";
import Header from "@/common/components/Header/Header";
import FloatingContacts from "@/feature/price-calculator/ui/FloatingContacts";
import About from "./sections/main/About";
import { Availability } from "./sections/main/Availability";
import HeroBanner from "./sections/main/Hero";

export default function Home() {
  return (
    <div className="w-full bg-gray-900">
      <Header />
      <HeroBanner />
      <About />
      <Availability/>
      <Footer/>
      <FloatingContacts />
    </div>
  )}