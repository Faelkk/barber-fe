import { z } from "zod";

import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import recuperarSenha from "@/actions/auth/recuperar-senha";
import { useState } from "react";

export const entrarSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export type FormData = z.infer<typeof entrarSchema>;

export default function useRecuperarSenhaForm() {
  const [pending, setPending] = useState(false);
  const {
    register,
    handleSubmit: HookFormSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(entrarSchema),
  });

  const handleSubmit = HookFormSubmit(async (dataSignin) => {
    setPending(true);
    try {
      const newDataSignin = {
        ...dataSignin,
        barbershop: "6750fddb11f132668419af0a",
      };

      const { data, error, ok } = await recuperarSenha(newDataSignin);

      if (ok && data) {
        toast.success(
          "Email enviado com sucesso, verifique sua caixa de entrada"
        );
      } else {
        throw new Error(error);
      }
    } catch {
      toast.error("Erro ao enviar email");
    } finally {
      setPending(false);
    }
  });

  const values = watch();
  const isFormEmpty = !values.email;

  return { errors, handleSubmit, register, isFormEmpty, pending };
}
