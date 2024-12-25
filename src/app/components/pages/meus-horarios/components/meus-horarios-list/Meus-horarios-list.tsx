import React from "react";
import MeusHorariosCard from "../meus-horarios-card/Meus-horarios-card";
import getAppointments from "@/actions/appointments/get-appointments";
import MeusHorarioEmpty from "../meus-horarios-empty/Meus-horario-empty";

// interface Horario {
//   id: string;
//   data: string;
//   tipo: string;
//   horario: string;
//   cliente: string;
//   local: string;
// }

// interface MeusHorariosListProps {
//   horarios: Horario[];
// }

export default async function MeusHorariosList() {
  const { data, error, ok } = await getAppointments();

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
