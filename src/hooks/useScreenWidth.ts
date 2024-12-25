"use client";

import { useEffect, useState } from "react";

export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  const handleSizeScreenChange = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set initial width on mount
      setScreenWidth(window.innerWidth);

      // Add resize listener
      window.addEventListener("resize", handleSizeScreenChange);

      return () => {
        window.removeEventListener("resize", handleSizeScreenChange);
      };
    }
  }, []);

  return { screenWidth };
}
