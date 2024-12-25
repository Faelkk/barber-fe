import { ReactNode } from "react";

export default function AgendamentoCard({ children }: { children: ReactNode }) {
  return (
    <section className="bg-Seashell-50 border-2 border-Copper-300 rounded py-5  px-4 md:px-8">
      {children}
    </section>
  );
}
