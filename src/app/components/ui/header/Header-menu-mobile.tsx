"use client";

import useScreenWidth from "@/hooks/useScreenWidth";
import MenuMobile from "./Menu-mobile";
import { User } from "@/actions/auth/get-user";

export default function HeaderMenuMobile({
  user,
  isUserTrue,
}: {
  user: User | null;
  isUserTrue: boolean;
}) {
  const { screenWidth } = useScreenWidth();

  if (screenWidth === null) return null;

  return (
    <>
      {screenWidth < 1024 && <MenuMobile user={user} isUserTrue={isUserTrue} />}
    </>
  );
}
