import { FlexContainer } from "@/common/components/FlexContainer";
import React from "react";
import AvailabilityCalendar from "../availability/AvailabilityCalendar";

export const Availability = () => {
  return (
    <FlexContainer className="bg-gray-800 flex flex-col pt-10">
      <p>
        Бронирование дат
      </p>
      <div className="flex flex-row">
        <div className="w-200 bg-amber-600"></div>
        <AvailabilityCalendar />
      </div>
    </FlexContainer>
  );
};
