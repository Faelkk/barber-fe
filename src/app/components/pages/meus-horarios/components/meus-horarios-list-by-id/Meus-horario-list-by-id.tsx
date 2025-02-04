import getAppointments from "@/actions/appointments/get-appointments";
import { User } from "@/actions/auth/get-user";
import MeusHorarioEmpty from "../meus-horarios-empty/Meus-horario-empty";
import MeusHorariosCard from "../meus-horarios-card/Meus-horarios-card";

export default async function MeusHorarioListById({ user }: { user: User }) {
  const { data, error } = await getAppointments(user?._id as string);

  if (error || !data?.length)
    return (
      <div className="flex justify-center">
        <MeusHorarioEmpty url="/agendar-horario" />
      </div>
    );

  const filteredAppointments = data.filter(
    (horario) => horario.status === "scheduled"
  );

  if (!filteredAppointments.length)
    return (
      <div className="flex justify-center">
        <MeusHorarioEmpty url="/agendar-horario" />
      </div>
    );

  return (
    <div className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
      {filteredAppointments.map((horario) => (
        <MeusHorariosCard
          key={horario._id}
          horario={horario}
          isBarber={false}
        />
      ))}
    </div>
  );
}
