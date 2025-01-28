"use server";

import { USER_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export interface User {
  _id: string;
  name: string;
  email: string;
  role: "Client";
  phoneNumber: string;
  appointments?: string[];
  barbershop?: string;
}

export default async function getUser() {
  try {
    const token = (await cookies()).get("token")?.value;

    if (!token) {
      throw new Error("Unauthorized");
    }

    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);

    const { url } = USER_GET();
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
      next: {
        revalidate: 60,
        tags: ["user"],
      },
    });

    if (!response.ok) throw new Error("Erro ao pegar o usuario.");

    const { user } = await response.json();

    const userTyped = user as User;

    return { data: userTyped, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
