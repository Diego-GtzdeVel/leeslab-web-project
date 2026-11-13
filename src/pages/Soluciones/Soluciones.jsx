import StaticHero from '@/sections/shared/StaticHero/StaticHero.jsx';
import MediaText from '@/sections/shared/MediaText/MediaText.jsx';
import SolutionsList from '@/sections/soluciones/SolutionsList/SolutionsList.jsx';
import Cta from '@/sections/shared/CTA/Cta.jsx';

import heroImage from '@/assets/soluciones/hero.png';
import heroIcon from '@/assets/hero-icon.png';
import workImage from '@/assets/soluciones/nuestro-trabajo.png';

// El Nav y el Footer los pone el Layout
export default function Soluciones() {
  return (
    <main className="soluciones">
      <title>Soluciones | Lees Lab</title>

      <StaticHero
        title="Servicios completos para la gestión del agua"
        subtitle="Desde la medición precisa hasta la automatización de infraestructura, ofrecemos soluciones técnicas completas para cada etapa del ciclo del agua"
        cta={{ label: 'Solicite información', href: '/contacto', variant: 'blue' }}
        image={heroImage}
        icon={heroIcon}
      />

      <MediaText
        title="Nuestro trabajo"
        text="Cada proyecto de agua tiene necesidades distintas. Un pozo no se mide igual que una central hidroeléctrica, y una PTAR no se automatiza igual que un sistema de compuertas. Por eso desarrollamos soluciones a la medida, respaldadas por más de 20 años de experiencia y por nuestra participación directa en el desarrollo de la NMX-AA-179."
        image={workImage}
        alt="Tuberías de presión de una central hidroeléctrica"
      />

      <SolutionsList />
      <Cta />
    </main>
  );
}
