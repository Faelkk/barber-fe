import getAppointments from "@/actions/appointments/get-appointments";
import { User } from "@/actions/auth/get-user";
import MeusHorariosCard from "../meus-horarios-card/Meus-horarios-card";
import CreateNewAppointmentBybarberGuest from "../create-new-appointment-by-barber-guest/Create-new-appointment-by-barber-guest";

export default async function MeusHorariosListBarber({ user }: { user: User }) {
  const { data, error } = await getAppointments(user?._id as string);

  if (error || !data?.length) return <CreateNewAppointmentBybarberGuest />;

  const filteredAppointments = data.filter(
    (horario) => horario.status === "scheduled"
  );

  if (!filteredAppointments.length)
    return <CreateNewAppointmentBybarberGuest />;

  return (
    <div className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
      <CreateNewAppointmentBybarberGuest />

      {filteredAppointments.map((horario) => (
        <MeusHorariosCard key={horario._id} horario={horario} isBarber={true} />
      ))}
    </div>
  );
}
