"use client";

import { useEffect, useState } from "react";

export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleSizeScreenChange = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSizeScreenChange);

    return () => {
      window.removeEventListener("resize", handleSizeScreenChange);
    };
  }, []);

  return { screenWidth };
}
