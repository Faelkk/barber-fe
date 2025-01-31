"use client";

import { useEffect, useState } from "react";

export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  const handleSizeScreenChange = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleSizeScreenChange);

    return () => {
      window.removeEventListener("resize", handleSizeScreenChange);
    };
  }, []);

  return { screenWidth };
}
