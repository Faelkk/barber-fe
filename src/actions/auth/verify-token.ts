"use server";

import { VERIFY_TOKEN } from "@/functions/api";

export default async function verifyToken(token: string) {
  try {
    if (!token) {
      throw new Error("Unauthorized");
    }

    const { url } = VERIFY_TOKEN(token);
    const response = await fetch(url, {
      method: "GET",
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) throw new Error("Token não é mais valido.");

    return { valid: true };
  } catch {
    return { valid: false };
  }
}
