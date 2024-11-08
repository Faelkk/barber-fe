"use client";

import useScreenWidth from "@/hooks/useScreenWidth";
import MenuMobile from "./Menu-mobile";

export default function HeaderMenuMobile() {
  const { screenWidth } = useScreenWidth();

  return screenWidth < 768 ? (
    <>
      <MenuMobile />
    </>
  ) : null;
}
