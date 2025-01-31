"use client";

import { useParams } from "next/navigation";
import UnidadesByIdHorario from "../components/unidades-by-id-horario/Unidades-by-id-horario";
import UnidadesByIdLanding from "../components/unidades-by-id-landing/Unidades-by-id-landing";
import UnidadesByIdService from "../components/unidades-by-id-service/components/unidades-by-id-service/Unidades-by-id-service";
import UnidadesByIdTime from "../components/unidades-by-id-time/unidades-by-id-time/Unidades-by-id-time";
import getUnitById, { UnitByIdProps } from "@/actions/units/get-unit-by-id";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import getServices, {
  GlobalService,
} from "@/actions/services/get-global-services";

export default function UnidadesByIdSection() {
  const { unidadeId } = useParams() as { unidadeId: string | undefined };
  const [barbearia, setBarbearia] = useState<UnitByIdProps | null>(null);
  const [services, setServices] = useState<GlobalService[] | null>(null);
  const [error, setError] = useState<boolean | null>(false);
  const [loading, setIsLoading] = useState(false);
  const [servicesLoading, setServicesLoading] = useState(false);
  const [servicesError, setServicesError] = useState<boolean | null>(false);

  useEffect(() => {
    const fetchUnit = async () => {
      try {
        setIsLoading(true);
        const { data, error, ok } = await getUnitById(unidadeId);
        if (ok && !error) {
          setBarbearia(data);
          setError(false);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (unidadeId) {
      fetchUnit();
    }
  }, [unidadeId]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setServicesLoading(true);
        const { data, error, ok } = await getServices();
        if (ok && !error) {
          setServices(data);
          setServicesError(false);
        } else {
          setServicesError(true);
        }
      } catch {
        setServicesError(true);
      } finally {
        setServicesLoading(false);
      }
    };

    if (unidadeId) {
      fetchServices();
    }
  }, [unidadeId]);

  if (loading || servicesLoading) return <Loading />;
  if (error || servicesError) return <h2>Um erro ocorreu.</h2>;

  if (barbearia && !error && services)
    return (
      <div className="flex flex-col min-h-screen">
        <UnidadesByIdLanding unidade={barbearia} />
        <UnidadesByIdHorario unidade={barbearia} />
        <UnidadesByIdTime barbeiros={barbearia.auth} />
        <UnidadesByIdService
          servicos={barbearia.localService}
          globalServices={services}
        />
      </div>
    );
}
