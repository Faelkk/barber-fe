"use server";

import { FormData } from "@/app/components/resetar-senha/resetar-senha-form/use-resetar-form";
import { RESETAR_SENHA } from "@/functions/api";
import apiError from "@/functions/api-error";

export default async function resetarSenha(
  dataSignin: FormData,
  token: string
) {
  try {
    const { url } = RESETAR_SENHA(token);

    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataSignin),
    });

    if (!response.ok) {
      throw new Error("Erro ao resetar senha");
    }

    const { message } = await response.json();

    return { data: message, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
