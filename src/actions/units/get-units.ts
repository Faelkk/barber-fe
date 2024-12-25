"use server";

import { UNITS_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";
import { Auth } from "./get-unit-by-id";

export interface Unit {
  _id: string;
  phoneNumber: string;
  address: {
    fullAddress: string;
    road: string;
    neighborhood: string;
    cep: string;
    state: string;
    country: string;
    city: string;
  };
  avatar: string;
  thumbnail: string;
  operatingHours: {
    monday: { start: string; end: string };
    tuesday: { start: string; end: string };
    wednesday: { start: string; end: string };
    thursday: { start: string; end: string };
    friday: { start: string; end: string };
    saturday: { start: string; end: string };
    sunday?: { start?: string; end?: string };
  };
  localService: LocalService[];
  barbershop: string;
  description: string;
  auth: Auth[];
}

export interface LocalService {
  _id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  barbershop: string;
  type: "local";
  avatar: string;
  thumbnail: string;
}

export default async function getUnits() {
  try {
    const token = (await cookies()).get("token")?.value;

    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);

    const { url } = UNITS_GET();
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) throw new Error("Erro ao pegar as unidades.");

    const { units } = await response.json();

    const unitsTyped = units as Unit[];
    return { data: unitsTyped, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
