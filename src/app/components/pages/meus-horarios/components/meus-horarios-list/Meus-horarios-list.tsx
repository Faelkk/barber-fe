import React from "react";

import getUser from "@/actions/auth/get-user";
import MeusHorariosListBarber from "../meus-horarios-list-barber/Meus-horarios-list-barber";
import MeusHorarioListById from "../meus-horarios-list-by-id/Meus-horario-list-by-id";

export default async function MeusHorariosList() {
  const { data: user, error, ok } = await getUser();

  if (user && !error && ok)
    return (
      <>
        {user.role === "Barber" ? (
          <MeusHorariosListBarber user={user} />
        ) : (
          <MeusHorarioListById user={user} />
        )}
      </>
    );
}
