import CallToAction from "@/components/call-to-action";
import Clients from "@/components/clients";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <Testimonials />
      <CallToAction />
    </>
  );
}
