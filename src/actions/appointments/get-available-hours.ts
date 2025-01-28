"use server";

import { AVAILABLE_HOURS_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export default async function getAvailableHours(unitId: string, date: string) {
  try {
    const token = (await cookies()).get("token")?.value;

    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);

    const { url } = AVAILABLE_HOURS_GET(unitId, date);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) throw new Error("Erro ao pegar as horas disponiveis.");

    const availableHours = await response.json();

    const availableHoursTyped = availableHours as string[];
    return { data: availableHoursTyped, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
