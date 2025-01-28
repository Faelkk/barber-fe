import { z } from "zod";
import { useRouter } from "next/navigation";
import criarConta from "@/actions/auth/criar-conta";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export const criarContaSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  name: z.string(),
  phoneNumber: z.string(),
});

export type FormData = z.infer<typeof criarContaSchema>;

export default function useCriarFormController() {
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit: HookFormSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(criarContaSchema),
  });

  const handleSubmit = HookFormSubmit(async (dataSignup) => {
    try {
      setPending(true);
      const newDataSignUp = {
        ...dataSignup,
        role: "Client",
        barbershop: "6750fddb11f132668419af0a",
      };

      const { error, ok } = await criarConta(newDataSignUp);

      if (ok) {
        toast.success("Conta cadastrada com sucesso");

        router.push("/");
      } else {
        throw new Error(error);
      }
    } catch {
      toast.error("Erro ao cadastrar conta");
    } finally {
      setPending(false);
    }
  });

  const values = watch();
  const isFormEmpty =
    !values.email || !values.password || !values.name || !values.phoneNumber;

  return { errors, handleSubmit, register, isFormEmpty, pending };
}
