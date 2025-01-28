"use client";

import { useParams } from "next/navigation";
import UnidadesByIdHorario from "../components/unidades-by-id-horario/Unidades-by-id-horario";
import UnidadesByIdLanding from "../components/unidades-by-id-landing/Unidades-by-id-landing";
import UnidadesByIdService from "../components/unidades-by-id-service/components/unidades-by-id-service/Unidades-by-id-service";
import UnidadesByIdTime from "../components/unidades-by-id-time/unidades-by-id-time/Unidades-by-id-time";
import getUnitById, { UnitByIdProps } from "@/actions/units/get-unit-by-id";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";

export default function UnidadesByIdSection() {
  const { unidadeId } = useParams() as { unidadeId: string | undefined };
  const [barbearia, setBarbearia] = useState<UnitByIdProps | null>(null);
  const [error, setError] = useState<boolean | null>(false);
  const [loading, setIsLoading] = useState(false);
  // const barbearia = {
  //   unidade: {
  //     id: 2,
  //     description:
  //       "Inaugurada em 27 de novembro de 2022, a unidade Barberagender em Florianópolis oferece quatro estações de atendimento em um ambiente moderno e confortável. Além disso, conta com uma área de lazer equipada com videogames, fla-flu e sinuca, proporcionando uma experiência única e completa para nossos clientes.",
  //     image: "/defaults/barber.jpg",
  //     cidade: "São Paulo",
  //     estado: "SP",
  //     pais: "Brasil",
  //     endereco: "Rua Augusta, 1010 – Consolação",
  //     telefone: "(11) 91234-5678",
  //   },
  //   barbeiros: [
  //     {
  //       id: 1,
  //       name: "Gabriel Pedro",
  //       role: "Barbeiro",
  //       description:
  //         "Formado pelo instituto Senac/RS. Minha meta é entregar o melhor para meus clientes, buscando sempre evoluir com novas técnicas e aperfeiçoamento.",
  //       image: "/defaults/barber-unity.jpg",
  //     },
  //     {
  //       id: 2,
  //       name: "João Silva",
  //       role: "Barbeiro Sênior",
  //       description:
  //         "Especialista em cortes modernos e tradicionais, com 10 anos de experiência.",
  //       image: "/defaults/barber-unity.jpg",
  //     },
  //   ],
  //   servicos: [
  //     {
  //       id: 1,
  //       title: "Corte",
  //       price: 90,
  //       description:
  //         "Feito com base na estética e harmonia adequadas para o formato do seu rosto.",
  //     },
  //     {
  //       id: 2,
  //       title: "Barba",
  //       price: 50,
  //       description: "Modelagem e cuidado para um visual impecável.",
  //     },
  //     {
  //       id: 3,
  //       title: "Combo Corte + Barba",
  //       price: 120.0,
  //       description: "Pacote especial para uma transformação completa.",
  //     },
  //   ],
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data, error, ok } = await getUnitById(unidadeId);
        if (ok && !error) {
          setIsLoading(false);
          setBarbearia(data);
          setError(false);
        } else {
          setIsLoading(false);
          setError(true);
        }
      } catch {
        setIsLoading(false);
        setError(true);
      }
    };

    if (unidadeId) {
      fetchData();
    }
  }, [unidadeId]);

  if (loading) return <Loading />;
  if (error) return <h2>Um erro ocorreu.</h2>;

  if (barbearia && !error)
    return (
      <div className="flex flex-col min-h-screen">
        <UnidadesByIdLanding unidade={barbearia} />
        <UnidadesByIdHorario unidade={barbearia} />
        <UnidadesByIdTime barbeiros={barbearia.auth} />
        <UnidadesByIdService servicos={barbearia.localService} />
      </div>
    );
}
