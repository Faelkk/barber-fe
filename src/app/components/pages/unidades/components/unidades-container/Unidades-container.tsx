import getUnits from "@/actions/units/get-units";
import UnidadesSection from "../../unidades-section/Unidades-section";

export default async function UnidadesContainer() {
  const { data, error, ok } = await getUnits();

  if (error) return <h2>Um erro ocorreu.</h2>;

  if (data && ok) return <UnidadesSection units={data} />;
}
