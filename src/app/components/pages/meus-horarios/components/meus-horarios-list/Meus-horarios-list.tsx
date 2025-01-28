import React from "react";
import MeusHorariosCard from "../meus-horarios-card/Meus-horarios-card";
import getAppointments from "@/actions/appointments/get-appointments";
import MeusHorarioEmpty from "../meus-horarios-empty/Meus-horario-empty";
import getUser from "@/actions/auth/get-user";

export default async function MeusHorariosList() {
  const { data: user } = await getUser();

  const { data, error, ok } = await getAppointments(user?._id as string);

  if (error)
    return (
      <div className="flex justify-center">
        <MeusHorarioEmpty />
      </div>
    );

  if (data && ok)
    return (
      <div className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 ">
        {data.map((horario) => (
          <MeusHorariosCard key={horario._id} horario={horario} />
        ))}
      </div>
    );
}
