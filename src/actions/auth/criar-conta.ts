"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import apiError from "@/functions/api-error";
import { SIGNUP_USER } from "@/functions/api";
import { FormData } from "@/app/components/pages/criar-conta/criar-form/use-criar-form-controller";

export default async function signup(dataSignup: FormData) {
  try {
    const { url } = SIGNUP_USER();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataSignup),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar conta");
    }

    const { accessToken } = await response.json();

    (await cookies()).set("token", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });

    revalidateTag("user");

    return { data: null, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
