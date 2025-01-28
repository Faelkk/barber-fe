"use client";

import Link from "next/link";
import Button from "../../auth/button/Button";
import Input from "../../auth/input/Input";
import { FieldErrors } from "react-hook-form";
import useEntrarFormController from "./use-entrar-form-controller";

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
    <Button
      className="mt-4"
      disabled={isFormEmpty || Object.keys(errors).length > 0 || pending}
    >
      {pending ? "Entrando..." : "Entrar"}
    </Button>
  );
}

export default function EntrarForm() {
  const { errors, register, handleSubmit, isFormEmpty, pending } =
    useEntrarFormController();

  return (
    <form
      className="flex flex-col w-full items-center  px-4"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Email"
        className="mt-5"
        {...register("email")}
      />
      <Input
        type="text"
        placeholder="Senha"
        className="mt-5"
        {...register("password")}
      />

      <div className="w-full mt-5">
        <Link
          href="/recuperar-senha"
          className="uppercase font-poppins text-Seashell-500 mt-3 text-left"
        >
          esqueci minha senha
        </Link>
      </div>
      <FormButton errors={errors} isFormEmpty={isFormEmpty} pending={pending} />
    </form>
  );
}
