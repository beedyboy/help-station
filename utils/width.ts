"use client";

import { useEffect, useState } from "react";

export default function useWidth() {
  const [size, setSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;

      setSize(innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [size]);
  return { size };
}
