"use server";

import { BARBER_SHOP_GET_BY_ID } from "@/functions/api";
import apiError from "@/functions/api-error";

export interface BarberShop {
  _id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  barbershop: string;
  type: "global";
  avatar: string;
  thumbnail: string;
}

export default async function getBarberShopById() {
  try {
    const { url } = BARBER_SHOP_GET_BY_ID();
    const response = await fetch(url, {
      method: "GET",

      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) throw new Error("Erro ao pegar barbearia pelo id.");

    const { barberShop } = await response.json();

    const barberShopTyped = barberShop as BarberShop;

    return { data: barberShopTyped, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
