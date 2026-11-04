import Hero from '@/sections/shared/Hero/Hero.jsx';
import Insight from '@/sections/shared/Insight/Insight.jsx';
import Hydralog from '@/sections/home/Hydralog/Hydralog.jsx';
import Psi from '@/sections/home/Psi/Psi.jsx';
import Clients from '@/sections/home/Clients/Clients.jsx';
import Benefits from '@/sections/home/Benefits/Benefits.jsx';
import Cta from '@/sections/shared/CTA/Cta.jsx';
import Footer from '@/components/Footer/Footer.jsx';

export default function Home() {
  return (
    <>
      <main className="home">
        <Hero />
        <Insight />
        {/* <Solutions /> — pendiente */}
        <Hydralog />
        <Psi />
        <Clients />
        <Benefits />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
