"use server";

import { APPOINTMENTS_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export interface Appointment {
  _id: string;
  client: Client | null;
  barber: Barber;
  service: Service;
  barbershop: string;
  serviceType: "local" | "global";
  date: string;
  status: "scheduled" | "completed" | "cancelled";
  unit: Unit;
  guestName: string | null;
}

export interface Client {
  _id: string;
  name: string;
}

export interface Barber {
  _id: string;
  name: string;
}

export interface Service {
  _id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  avatar: string;
  thumbnail: string;
  barbershop: string;
  type: "local" | "global";
  __v: number;
}

export interface Unit {
  _id: string;
  address: Address;
}

export interface Address {
  fullAddress: string;
  road: string;
  neighborhood: string;
  cep: string;
  state: string;
  country: string;
  city: string;
}

export default async function getAppointments(userId: string) {
  try {
    const token = (await cookies()).get("token")?.value;

    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);

    const { url } = APPOINTMENTS_GET(userId);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
      next: {
        revalidate: 60,
        tags: ["appointment"],
      },
    });

    if (!response.ok) throw new Error("Erro ao pegar os agendamentos.");

    const { appointments } = await response.json();

    const appointmentsTyped = appointments as Appointment[];
    return { data: appointmentsTyped, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
