import Footer from "@/common/components/Footer/Footer";
import Header from "@/common/components/Header/Header";
import FloatingContacts from "@/feature/price-calculator/ui/FloatingContacts";
import AllMenu from "../sections/allMenu/AllMenu";

export default function Home() {
  return (
    <div className="w-full bg-gray-800">
      <Header />
      <AllMenu />
      <Footer />
      <FloatingContacts />
    </div>
  );
}
