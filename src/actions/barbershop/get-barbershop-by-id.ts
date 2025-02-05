"use server";

import { BARBER_SHOP_GET_BY_ID } from "@/functions/api";
import apiError from "@/functions/api-error";

export interface BarberShop {
  _id: string;
  name: string;
  description: string;
  avatar: string;
  thumbnail: string;
  appointments: string[];
  socialLinks: {
    facebook?: string;
    instagram?: string;
    threads?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    tiktok?: string;
  };
  auth: string[];
  globalService: string[];
  unit: string[];
  phoneNumber: string;
  email: string;
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
