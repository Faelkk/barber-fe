import { z } from "zod";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import entrar from "@/actions/auth/entrar";

export const entrarSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type FormData = z.infer<typeof entrarSchema>;

export default function useEntrarFormController() {
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
      const newDataSignin = {
        ...dataSignin,
        barbershop: "6750fddb11f132668419af0a",
      };

      const { error, ok } = await entrar(newDataSignin);

      if (ok) {
        toast.success("Conta logada com sucesso");
        router.push("/");
      } else {
        throw new Error(error);
      }
    } catch (err: unknown) {
      console.log(err);
      toast.error("Erro ao fazer login");
    }
  });

  const values = watch();
  const isFormEmpty = !values.email || !values.password;

  return { errors, handleSubmit, register, isFormEmpty };
}