import ServicesCard from "./Services-card";

export default function ServicesCardContainer() {
  return (
    <section className="flex justify-center  gap-5 max-w-[940px] flex-wrap mt-10">
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
    </section>
  );
}
