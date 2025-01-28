"use server";

import { EDIT_APPOINTMENT } from "@/functions/api";
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

export default async function editAppointment(
  dataAppointment: FormData,
  appointmentId: string
) {
  try {
    const token = (await cookies()).get("token")?.value;

    if (!token) {
      throw new Error("Unauthorized");
    }

    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);

    const { url } = EDIT_APPOINTMENT(appointmentId);
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(dataAppointment),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar agendamento");
    }

    const { updatedAppointment } = await response.json();

    revalidateTag("appointment");

    return { data: updatedAppointment, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
