import { FlexContainer } from "@/common/components/FlexContainer";
import Header from "@/common/components/Header/Header";
import MenuFormatsCarousel from "../sections/formats/MenuFormstsCarousel";

export const page = () => {
  return (
    <>
      <Header />
      <FlexContainer className="pt-20 pb-20 bg-gray-600">
        <MenuFormatsCarousel />
      </FlexContainer>
    </>
  );
};

export default page;
