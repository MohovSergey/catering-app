"use client";

import { useRef } from "react";
import Image from "next/image";
import { EVENTS_GALLERY } from "@/feature/model/data/eventsGalleryData";
import { FlexContainer } from "@/common/components/FlexContainer";

export default function EventsGallery() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const LOOP_COUNT = 3; 

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollWidth = scrollRef.current.scrollWidth / LOOP_COUNT;
    if (scrollRef.current.scrollLeft >= scrollWidth * (LOOP_COUNT - 1)) {
      scrollRef.current.scrollLeft -= scrollWidth;
    }
    if (scrollRef.current.scrollLeft <= 0) {
      scrollRef.current.scrollLeft += scrollWidth;
    }
  };

  return (
    <FlexContainer>
      <section className="relative w-full py-12">
      <div className="mb-6 flex items-center justify-between px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-stone-500">
          Наши мероприятия
        </h2>

        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
          >
            ‹
          </button>
          <button
            onClick={() => scroll("right")}
            className="h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
          >
            ›
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto px-4 md:px-8 scroll-smooth scrollbar-hide"
      >
        {Array.from({ length: LOOP_COUNT }).map((_, loopIdx) =>
          EVENTS_GALLERY.map((photo) => (
            <div
              key={`${loopIdx}-${photo.id}-${photo.src}`}
              className="relative h-56 w-72 md:h-64 md:w-96 shrink-0 overflow-hidden rounded-2xl bg-gray-800"
            >
              <Image
                src={photo.src}
                alt={photo.alt || ""}
                fill
                className="object-cover"
                loading="lazy" 
              />
            </div>
          ))
        )}
      </div>
    </section>
    </FlexContainer>
    
  );
}
