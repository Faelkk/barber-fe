import deleteAppointment from "@/actions/appointments/delete-appointment";
import { useModal } from "@/hooks/useModal";
import toast from "react-hot-toast";

export function useMeusHorarioController() {
  const { isMenuOpen, toggleMenu } = useModal();
  const handleDeleteClick = async (deleteId: string) => {
    const { data, error, ok } = await deleteAppointment(deleteId);

    if (data && ok) {
      toast.success("Horario cancelado com sucesso");
      toggleMenu();
    } else if (error) {
      toast.error("um erro ocorreu ao cancelar o horario");
    }
  };

  return { handleDeleteClick, isMenuOpen, toggleMenu };
}
