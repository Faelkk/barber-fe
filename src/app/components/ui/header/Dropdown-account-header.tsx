"use client";

import { onLogout } from "@/actions/auth/logout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useToggleByIndex from "@/hooks/useToggleByIndex";
import { ExitIcon } from "@radix-ui/react-icons";
import { User } from "@/actions/auth/get-user";
import UserIcon from "../icons/User";

export default function DropdownAccountHeader({ user }: { user: User | null }) {
  const { isMenuOpen, toggleMenu } = useToggleByIndex(0);

  return (
    <DropdownMenu open={isMenuOpen} onOpenChange={toggleMenu}>
      <DropdownMenuTrigger className=" focus:outline-none">
        <span className="font-poppins text-lg text-Seashell-95 ">
          Meu perfil
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={20}
        className="cursor-pointer"
      >
        <div className="px-5 flex items-center gap-4 py-2 ">
          <UserIcon fill="#292929" width={20} height={20} />
          <span className="font-poppins text-lg text-Seashell-950">
            Olá {user?.name.split(" ")[0]}
          </span>
        </div>
        <div className="px-5 flex items-center gap-4 py-2 " onClick={onLogout}>
          <ExitIcon fill="#292929" width={18} height={18} />
          <span className="font-poppins text-lg text-Seashell-950">
            Encerrar sessão
          </span>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
