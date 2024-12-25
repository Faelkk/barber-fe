import { useState } from "react";

export function useModal() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return { isMenuOpen, toggleMenu };
}
