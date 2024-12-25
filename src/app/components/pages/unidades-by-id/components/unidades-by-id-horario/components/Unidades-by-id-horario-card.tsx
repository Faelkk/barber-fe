interface HorarioCardProps {
  icon: React.ReactNode;
  content: React.ReactNode;
}

export default function UnidadesByIdHorarioCard({
  icon,
  content,
}: HorarioCardProps) {
  return (
    <>
      <section
        className="border-2 bg-Copper-100 border-Copper-300 rounded py-5 px-4 md:min-w-[400px] cursor-pointer w-full md:w-auto"
        style={{ boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)" }}
      >
        <section className="flex flex-col lg:items-center lg:justify-between lg:gap-2 lg:flex-row w-full">
          <header className="flex items-center gap-4">
            <div className="hidden rounded-full min-w-12 min-h-12 h-12 w-12 bg-Copper-300 mini:flex items-center justify-center">
              {icon}
            </div>
            <h1 className="font-poppins font-medium text-sm pp:text-lg text-Seashell-950">
              {content}
            </h1>
          </header>
        </section>
      </section>
    </>
  );
}
