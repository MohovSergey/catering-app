import Footer from "@/common/components/Footer/Footer";
import Header from "@/common/components/Header/Header";
import FloatingContacts from "@/feature/price-calculator/ui/FloatingContacts";
import AllMenu from "../sections/allMenu/AllMenu";
import { FlexContainer } from "@/common/components/FlexContainer";

export default function Home() {
  return (
    <div className="w-full bg-stone-50 mt-16">
      <Header />
      <AllMenu />
      <Footer />
      <FloatingContacts />
    </div>
  );
}
