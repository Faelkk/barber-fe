"use server";

import { APPOINTMENTS_DELETE } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export default async function deleteAppointment(appointmentId: string) {
  try {
    const token = (await cookies()).get("token")?.value;

    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);

    const { url } = APPOINTMENTS_DELETE(appointmentId);
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) throw new Error("Erro ao pegar as unidades.");

    const { deleted } = await response.json();

    return { data: deleted, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
