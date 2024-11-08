import Container from "@/app/components/ui/container/Container";
import Search from "@/app/components/ui/icons/Search";

export default function UnidadesHeader() {
  return (
    <Container>
      <header className="flex flex-col items-center pp:gap-3 lg:flex-row w-[90%] justify-between">
        <h1 className="font-merriweather font-bold text-lg mini:text-2xl pp:text-3xl md:text-4xl text-black pp:relative before:content-[''] before:bg-cold-gray-900 pp:ml-[30px] before:w-4 before:h-4 before:absolute before:left-[-30px] before:top-1/2 before:-translate-y-1/2">
          Nossas unidades
        </h1>
        <form className="border border-Copper-300 rounded py-3 px-3 max-h-[48px] bg-slate-50 w-[90%]    pp:w-full max-w-[600px] flex items-center gap-2">
          <input
            id="search-unidade"
            type="text"
            placeholder="Pesquise por uma cidade ou estado"
            className="placeholder:font-poppins placeholder:text-black bg-transparent flex-1 outline-none w-[90%] "
          />
          <button className="hidden pp:block">
            <Search fill="#000" width={24} height={24} />
          </button>
        </form>
      </header>
    </Container>
  );
}
