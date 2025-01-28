import { z } from "zod";

import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter, useSearchParams } from "next/navigation";
import resetarSenha from "@/actions/auth/resetar-senha";
import { useState } from "react";

export const entrarSchema = z.object({
  newPassword: z.string().min(6, "Password must be at least 6 characters long"),
});

export type FormData = z.infer<typeof entrarSchema>;

export default function useResetarSenhaForm() {
  const [pending, setPending] = useState(false);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  const {
    register,
    handleSubmit: HookFormSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(entrarSchema),
  });

  const handleSubmit = HookFormSubmit(async (dataSignin) => {
    try {
      setPending(true);
      const newDataSignin = {
        ...dataSignin,
        barbershop: "6750fddb11f132668419af0a",
      };

      const { data, error, ok } = await resetarSenha(
        newDataSignin,
        token as string
      );

      if (ok && data) {
        toast.success("Senha trocada com sucesso!");
        router.push("/");
      } else {
        throw new Error(error);
      }
    } catch {
      toast.error("Erro ao trocar senha");
    } finally {
      setPending(false);
    }
  });

  const values = watch();
  const isFormEmpty = !values.newPassword;

  return { errors, handleSubmit, register, isFormEmpty, pending };
}
