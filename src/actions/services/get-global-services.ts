"use server";

import { SERVICES_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export interface GlobalService {
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

export default async function getServices() {
  try {
    const token = (await cookies()).get("token")?.value;

    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);

    const { url } = SERVICES_GET();
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) throw new Error("Erro ao pegar os serviços.");

    const GlobalServices = (await response.json()) as GlobalService[];

    return { data: GlobalServices, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
