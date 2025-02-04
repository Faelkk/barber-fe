import getUnits from "@/actions/units/get-units";
import UnidadesSection from "../../unidades-section/Unidades-section";
import UnidadesEmpty from "../unidades-empty/Unidades-empty";

export default async function UnidadesContainer() {
  const { data, error, ok } = await getUnits();

  if (error) return <UnidadesEmpty />;

  if (data && ok) return <UnidadesSection units={data} />;
}
