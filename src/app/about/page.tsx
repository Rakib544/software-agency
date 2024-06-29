import Clients from "@/components/clients";
import OurCulture from "@/components/culture";
import Team from "@/components/team";

export default function About() {
  return (
    <div className="">
      <section className="mt-20 md:mt-40 mb-20 md:mb-32 container">
        <h1 className="inline-block text-3xl md:text-[44px] leading-none max-w-3xl font-extrabold tracking-tight text-gradient text-transparent bg-clip-text text-balance pb-2">
          Narative is a tight-knit team with senior product experience.
        </h1>
        <p className="text-lg max-w-[550px] mt-4">
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
      </section>
      <Clients />
      <OurCulture />
      <Team />
    </div>
  );
}
