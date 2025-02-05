"use server";

import { UNITS_BY_ID_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { GlobalService } from "../services/get-global-services";

export interface OperatingHours {
  start: string;
  end: string;
}

export interface Address {
  fullAddress: string;
  road: string;
  neighborhood: string;
  cep: string;
  state: string;
  country: string;
}

export interface Auth {
  _id: string;
  name: string;
  email: string;
  role: "Admin" | "Barber" | "Client";
  description: string;
  avatar: string | null;
  thumbnail: string | null;
}

export interface UnitByIdProps {
  address: Address;
  operatingHours: {
    monday: OperatingHours;
    tuesday: OperatingHours;
    wednesday: OperatingHours;
    thursday: OperatingHours;
    friday: OperatingHours;
    saturday: OperatingHours;
    sunday: OperatingHours;
  };
  _id: string;
  avatar: string;
  thumbnail: string;
  phoneNumber: string;
  localService: GlobalService[];
  auth: Auth[];
  barbershop: string;
  __v: number;
  description: string;
}

export default async function getUnitById(unidadeId: string | undefined) {
  try {
    if (!unidadeId) throw new Error("UnidadeId not found.");

    const { url } = UNITS_BY_ID_GET(unidadeId);
    const response = await fetch(url, {
      method: "GET",

      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) throw new Error("Erro ao pegar as unidades.");

    const { unit } = await response.json();

    const unitsTyped = unit as UnitByIdProps;

    return { data: unitsTyped, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
