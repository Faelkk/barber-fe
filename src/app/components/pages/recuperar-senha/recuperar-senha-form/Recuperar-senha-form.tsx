"use client";

import Button from "../../auth/button/Button";
import Input from "../../auth/input/Input";
import { FieldErrors } from "react-hook-form";
import useRecuperarSenhaForm from "./use-recuperar-senha-form";

function FormButton({
  errors,
  isFormEmpty,
  pending,
}: {
  errors: FieldErrors<{
    email?: string;
  }>;
  isFormEmpty: boolean;
  pending: boolean;
}) {
  return (
    <>
      {pending ? (
        <Button
          className="mt-4 bg-Sandstone-300"
          disabled={isFormEmpty || Object.keys(errors).length > 0 || pending}
        >
          Enviando...
        </Button>
      ) : (
        <Button
          className="mt-4"
          disabled={isFormEmpty || Object.keys(errors).length > 0 || pending}
        >
          Enviar
        </Button>
      )}
    </>
  );
}

export default function RecuperarSenhaForm() {
  const { errors, handleSubmit, isFormEmpty, register, pending } =
    useRecuperarSenhaForm();

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Email"
        className="mt-5"
        {...register("email")}
      />

      <FormButton errors={errors} isFormEmpty={isFormEmpty} pending={pending} />
    </form>
  );
}
