"use client";

import Link from "next/link";
import Input from "../../auth/input/Input";
import Button from "../../auth/button/Button";
import useCriarFormController from "./use-criar-form-controller";
import { FieldErrors } from "react-hook-form";

function FormButton({
  errors,
  isFormEmpty,
  pending,
}: {
  errors: FieldErrors<{
    name?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
  }>;
  isFormEmpty: boolean;
  pending: boolean;
}) {
  return (
    <>
      {pending ? (
        <Button
          disabled={isFormEmpty || Object.keys(errors).length > 0 || pending}
          className="mt-4"
        >
          Entrando...
        </Button>
      ) : (
        <Button
          className="mt-4"
          disabled={isFormEmpty || Object.keys(errors).length > 0 || pending}
        >
          Entrar
        </Button>
      )}
    </>
  );
}

export default function CriarForm() {
  const { errors, register, handleSubmit, isFormEmpty, pending } =
    useCriarFormController();

  return (
    <form
      className="flex flex-col w-full items-center  px-4"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Nome"
        className="mt-5"
        {...register("name")}
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <Input
        type="text"
        placeholder="Email"
        className="mt-5"
        {...register("email")}
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <Input
        type="text"
        placeholder="Telefone"
        className="mt-5"
        {...register("phoneNumber")}
      />
      {errors.phoneNumber && (
        <p className="text-red-500">{errors.phoneNumber.message}</p>
      )}

      <Input
        type="text"
        placeholder="Senha"
        className="mt-5"
        {...register("password")}
      />
      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}

      <div className="w-full mt-5">
        <Link
          href="/resetar-senha"
          className="uppercase font-poppins text-Seashell-500 mt-3 text-left"
        >
          esqueci minha senha
        </Link>
      </div>

      <FormButton errors={errors} isFormEmpty={isFormEmpty} pending={pending} />
    </form>
  );
}
