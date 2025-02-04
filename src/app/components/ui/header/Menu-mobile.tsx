"use client";

import { User } from "@/actions/auth/get-user";
import { onLogout } from "@/actions/auth/logout";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import UserIcon from "../icons/User";

export default function MenuMobile({
  user,
  isUserTrue,
}: {
  user: User | null;
  isUserTrue: boolean;
}) {
  return (
    <Dialog>
      <DialogTrigger className="flex  gap-2">
        <h2 className="hidden pp:block font-poppins text-Seashell-900 font-medium">
          Menu
        </h2>
        <HamburgerMenuIcon fill="#3D3D3D" width={24} height={24} />
      </DialogTrigger>
      <DialogContent className="flex flex-col left-0 top-0 translate-y-0 translate-x-0 w-full  max-w-full  h-[50%]">
        <DialogHeader className="flex h-full justify-center my-4">
          <DialogTitle className="hidden">Menu Mobile Header</DialogTitle>
          <header className="flex justify-end mini:justify-between w-full">
            {user && isUserTrue ? (
              <div className="flex items-center gap-3">
                <UserIcon fill="#292929" width={24} height={24} />
                <h2 className="font-merriweather font-bold hidden mini:block mini:text-base pp:text-2xl text-Seashell-950">
                  Olá {user?.name.split(" ")[0]}
                </h2>
              </div>
            ) : (
              <h2 className="font-merriweather font-bold hidden mini:block mini:text-base pp:text-2xl text-Seashell-950">
                barberagender
              </h2>
            )}

            <DialogClose className="">
              <Cross2Icon className="h-4 w-4" />
            </DialogClose>
          </header>

          <ul className="flex flex-col justify-center flex-1   text-left gap-2 font-poppins pp:text-xl font-medium text-cold-gray-900">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/unidades">Unidades</Link>
            </li>
            <li>
              <Link href="/">Sobre nós</Link>
            </li>
            <li>
              <Link href="/meus-horarios">Meus horarios</Link>
            </li>
            <li>
              <Link href="/servicos">Serviços</Link>
            </li>
            {user && isUserTrue ? (
              <li className="flex items-center" onClick={onLogout}>
                <span>Encerrar sessão</span>
              </li>
            ) : (
              <li>
                <Link href="/entrar">Entrar</Link>
              </li>
            )}
          </ul>
          <Link href="/agendar-horario">
            <button className="font-poppins text-Copper-800 font-medium border-2 border-Copper-800 rounded  px-1 pp:px-3 py-1 w-full medium:w-full">
              Agendar Horario
            </button>
          </Link>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
