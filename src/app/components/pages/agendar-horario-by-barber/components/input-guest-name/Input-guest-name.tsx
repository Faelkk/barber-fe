import { cn } from "@/functions/cn";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { AgendarHorarioState } from "../../agendar-horario-container-by-barber/use-agendar-horario-container-by-barber";
import EditIcon from "@/app/components/ui/icons/Edit";
import UserIcon from "@/app/components/ui/icons/User";
import { useInputGuestName } from "./use-input-guest-name";

export default function InputGuestName({
  onSelect,
}: {
  onSelect: (value: AgendarHorarioState["guestName"]) => void;
}) {
  const {
    guestName,
    guestNameSelected,
    handleEdit,
    handleSubmit,
    setGuestName,
  } = useInputGuestName({ onSelect });

  return (
    <section className="bg-Seashell-50 border-2 border-Copper-300 rounded py-5 px-4 md:px-8 min-w-full md:min-w-[500px] md-l:min-w-[800px] default:min-w-[1000px]">
      {guestNameSelected ? (
        <section className="flex flex-col lg:items-center lg:justify-between lg:gap-2 lg:flex-row w-full lg:min-w-[800px]">
          <header className="flex items-center gap-4">
            <div className="hidden pp:flex rounded-full h-12 w-12 bg-[#D9D9D9]  items-center justify-center">
              <UserIcon fill="#000" width={20} height={20} />
            </div>
            <h1 className="font-poppins font-medium pp:text-lg medium:text-xl text-Seashell-950">
              {guestNameSelected}
            </h1>
          </header>
          <div className="block lg:hidden w-full bg-Seashell-200 h-[2px] my-5"></div>
          <button
            className="flex items-center justify-center gap-2 px-3 py-1 rounded border-2 border-Seashell-900 text-Seashell-900 font-poppins  w-full font-medium mt-5 lg:mt-0 lg:max-w-[230px]"
            onClick={handleEdit}
          >
            <EditIcon fill="#3D3D3D" width={20} height={20} />
            <span> Alterar</span>
          </button>
        </section>
      ) : (
        <form
          className="flex gap-2 items-center w-full max-w-full text-black-0 bg-gray-0 rounded-[3px] p-3 placeholder:text-black-0 focus:bg-gray-100 focus:border-black-600 transition-colors border border-[#bbbb]"
          onSubmit={handleSubmit}
        >
          {" "}
          <div className="relative w-full flex-1">
            <input
              type="text"
              name="guestName"
              placeholder="Nome do cliente"
              className={cn(
                "outline-none border-none bg-transparent font-roboto placeholder:font-roboto placeholder:text-Seashell-950 w-full"
              )}
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-Copper-300 rounded p-2">
            <ArrowRightIcon color="#FFF" stroke="2" width={18} height={18} />
          </button>
        </form>
      )}
    </section>
  );
}
