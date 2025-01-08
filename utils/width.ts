"use client";

import { useEffect, useState } from "react";
export default function useWidth() {
  const [size, setSize] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setSize(width);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  return { size };
}
