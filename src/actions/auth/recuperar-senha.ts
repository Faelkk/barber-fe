"use server";

import { FormData } from "@/app/components/pages/recuperar-senha/recuperar-senha-form/use-recuperar-senha-form";
import { RECUPERAR_SENHA } from "@/functions/api";
import apiError from "@/functions/api-error";

export default async function recuperarSenha(dataSignin: FormData) {
  try {
    const { url } = RECUPERAR_SENHA();

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

    const { message } = await response.json();

    return { data: message, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
