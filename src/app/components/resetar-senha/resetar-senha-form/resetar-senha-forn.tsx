"use client";

import { FieldErrors } from "react-hook-form";
import useResetarSenhaForm from "./use-resetar-form";
import Input from "../../pages/auth/input/Input";
import Button from "../../pages/auth/button/Button";

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

export default function ResetarSenhaForm() {
  const { errors, handleSubmit, isFormEmpty, register, pending } =
    useResetarSenhaForm();

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nova senha"
        className="mt-5"
        {...register("newPassword")}
      />

      <FormButton errors={errors} isFormEmpty={isFormEmpty} pending={pending} />
    </form>
  );
}
