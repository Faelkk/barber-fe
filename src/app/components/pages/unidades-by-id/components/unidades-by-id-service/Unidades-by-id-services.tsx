import UnidadesByIdService from "./components/unidades-by-id-service/Unidades-by-id-service";

export default function UnidadesByIdServices() {
  return (
    <section
      aria-labelledby="unidades-heading"
      className="bg-gray-100  flex justify-center items-center  mt-20 w-full drop-shadow-md py-10 md:py-20 px-4"
    >
      <UnidadesByIdService />
    </section>
  );
}
