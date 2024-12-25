"use server";

import { FormData } from "@/app/components/pages/entrar/entrar-form/use-entrar-form-controller";
import { SIGNIN_USER } from "@/functions/api";
import apiError from "@/functions/api-error";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export default async function entrar(dataSignin: FormData) {
  try {
    const { url } = SIGNIN_USER();

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataSignin),
    });

    if (!response.ok) {
      throw new Error("Erro ao fazer login");
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
