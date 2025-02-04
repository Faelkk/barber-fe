"use server";

import { APPOINTMENTS_COMPLETE } from "@/functions/api";
import apiError from "@/functions/api-error";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export default async function completeAppointment(appointmentId: string) {
  try {
    const token = (await cookies()).get("token")?.value;

    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);

    const { url } = APPOINTMENTS_COMPLETE(appointmentId);
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + token,
      },
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) throw new Error("Erro ao confirmar os agendamentos.");

    const { updatedAppointment } = await response.json();

    revalidateTag("appointment");

    return { data: updatedAppointment, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
