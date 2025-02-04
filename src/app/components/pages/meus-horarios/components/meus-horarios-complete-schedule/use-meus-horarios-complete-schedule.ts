import completeAppointment from "@/actions/appointments/confirm-appointment";
import { useModal } from "@/hooks/useModal";
import toast from "react-hot-toast";

export function useMeusHorarioCompleteSchedule() {
  const { isMenuOpen, toggleMenu } = useModal();
  const handleConfirmClick = async (appointmentId: string) => {
    const { data, error, ok } = await completeAppointment(appointmentId);

    if (data && ok) {
      toast.success("Status do horario mudado com sucesso");
      toggleMenu();
    } else if (error) {
      toast.error("um erro ocorreu ao mudar o status do horario");
    }
  };

  return { handleConfirmClick, isMenuOpen, toggleMenu };
}
