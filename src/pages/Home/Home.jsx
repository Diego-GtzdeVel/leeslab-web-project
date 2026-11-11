import Hero from '@/sections/shared/Hero/Hero.jsx';
import Insight from '@/sections/shared/Insight/Insight.jsx';
import Solutions from '@/sections/home/Solutions/Solutions.jsx';
import Hydralog from '@/sections/home/Hydralog/Hydralog.jsx';
import Psi from '@/sections/home/Psi/Psi.jsx';
import Clients from '@/sections/home/Clients/Clients.jsx';
import Benefits from '@/sections/home/Benefits/Benefits.jsx';
import Cta from '@/sections/shared/CTA/Cta.jsx';
import { HERO_HOME_IMAGES } from '@/content/hero.js';

export default function Home() {
  return (
    <main className="home">
      <Hero images={HERO_HOME_IMAGES} />
      <Insight />
      <Solutions />
      <Hydralog />
      <Psi />
      <Clients />
      <Benefits />
      <Cta />
    </main>
  );
}
