"use client";
import SectionOne from "@/domain/herat/section-one";
import SectionThree from "@/domain/herat/section-three";
import SectionTwo from "@/domain/herat/section-two";
import { useState } from "react";

function Herat() {
  const [current, setCurrent] = useState(1);

  const nextSection = () => {
    setCurrent((prev) => (prev == 3 ? 3 : prev + 1));
  };

  // const previousSection = () => {
  //   setCurrent((prev) => (prev == 1 ? 1 : prev - 1));
  // };

  return (
    <div className="w-full h-full">
      {current === 1 ? (
        <SectionOne nextSection={nextSection} />
      ) : current === 2 ? (
        <SectionTwo
          nextSection={nextSection}
          // previousSection={previousSection}
        />
      ) : (
        <SectionThree
        // previousSection={previousSection}
        />
      )}
    </div>
  );
}

export default Herat;
