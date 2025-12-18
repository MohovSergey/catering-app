import Header from "@/common/components/Header/Header";
import HeroBanner from "./sections/main/Hero";
import About from "./sections/main/About";
import AvailabilityCalendar from "./sections/availability/AvailabilityCalendar";
import { Availability } from "./sections/main/Availability";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <About />
      <Availability/>
    </>
  )}