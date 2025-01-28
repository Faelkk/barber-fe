"use client";

import ClockIcon from "@/app/components/ui/icons/Clock";
import DateIcon from "@/app/components/ui/icons/Date";
import LocationIcon from "@/app/components/ui/icons/location";
import ScheduleIcon from "@/app/components/ui/icons/Schedule";
import UserIcon from "@/app/components/ui/icons/User";
import MeusHorariosButtonEdit from "../meus-horarios-button-edit/Meus-horarios-button-edit";
import MeusHorariosButtonDelete from "../meus-horarios-button-delete/Meus-horarios-button-delete";
import { Appointment } from "@/actions/appointments/get-appointments";
import { formatDate } from "@/functions/formatDate";

interface MeusHorariosCardProp {
  horario: Appointment;
}

export default function MeusHorariosCard({ horario }: MeusHorariosCardProp) {
  return (
    <section className="bg-Seashell-50 border-2 border-Copper-300 rounded py-5 px-4 md:px-8">
      <div className="flex flex-col ">
        <h1 className="font-poppins font-medium pp:text-lg medium:text-xl text-Seashell-950 capitalize">
          Confira informações sobre seu horario
        </h1>

        <div className="w-full bg-Seashell-200 h-[2px] mt-5"></div>

        <section>
          <ul className="flex flex-col mt-5 gap-4">
            <li className="flex items-center gap-2">
              <div className="hidden pp:flex rounded-full h-12 w-12 bg-[#D9D9D9]  items-center justify-center">
                <ScheduleIcon fill="#000" width={20} height={20} />
              </div>
              <h2 className="text-cold-gray-900 font-poppins ">
                <span className="text-cold-gray-900 font-poppins capitalize">
                  {horario.service?.name}
                </span>
              </h2>
            </li>
            <li className="flex items-center gap-2">
              <div className="hidden  pp:flex  rounded-full h-12 w-12 bg-[#D9D9D9]  items-center justify-center">
                <ClockIcon fill="#000" width={20} height={20} />
              </div>
              <span className="text-cold-gray-900 font-poppins capitalize">
                {horario.barber.name}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <div className="hidden  pp:flex rounded-full h-12 w-12 bg-[#D9D9D9]  items-center justify-center">
                <DateIcon fill="#000" width={20} height={20} />
              </div>
              <span className="text-cold-gray-900 font-poppins capitalize">
                {formatDate(horario.date)}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <div className="hidden  pp:flex rounded-full h-12 w-12 bg-[#D9D9D9]  items-center justify-center">
                <UserIcon fill="#000" width={20} height={20} />
              </div>
              <span className="text-cold-gray-900 font-poppins capitalize">
                {horario.client.name}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <div className="hidden  pp:flex rounded-full h-12 w-12 bg-[#D9D9D9]  items-center justify-center">
                <LocationIcon fill="#000" width={16} height={20} />
              </div>
              <span className="text-cold-gray-900 font-poppins capitalize">
                {horario.unit.address.fullAddress}
              </span>
            </li>
          </ul>
          <div className="flex flex-col medium:flex-row items-center gap-2 mt-5 w-full">
            <MeusHorariosButtonDelete deleteId={horario._id} />
            <MeusHorariosButtonEdit horarioId={horario._id} />
          </div>
        </section>
      </div>
    </section>
  );
}
