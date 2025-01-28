"use server";

import { CREATE_APPOINTMENT } from "@/functions/api";
import apiError from "@/functions/api-error";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export interface FormData {
  unit: string | null;
  service: string | null;
  barber: string | null;
  date: string | null;
  serviceType: "global" | "local" | null;
  client: string | null;
  barbershop: string | null;
}

export default async function createAppointment(dataAppointment: FormData) {
  try {
    const token = (await cookies()).get("token")?.value;

    if (!token) {
      throw new Error("Unauthorized");
    }

    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);

    const { url } = CREATE_APPOINTMENT();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(dataAppointment),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar agendamento");
    }

    const { appointment } = await response.json();

    revalidateTag("appointment");

    return { data: appointment, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
