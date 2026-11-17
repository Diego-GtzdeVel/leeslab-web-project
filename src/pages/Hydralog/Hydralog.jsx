import StaticHero from '@/sections/shared/StaticHero/StaticHero.jsx';
import MediaText from '@/sections/shared/MediaText/MediaText.jsx';
import Cta from '@/sections/shared/CTA/Cta.jsx';
import Features from '@/sections/hydralog/Features/Features.jsx';
import TryHydralog from '@/sections/hydralog/TryHydralog/TryHydralog.jsx';
import { HYDRALOG_DEMO_URL } from '@/content/hydralog.js';

import heroImage from '@/assets/hydralog/hero.png';
import heroIcon from '@/assets/hero-icon.png'; // el mismo logo del hero del home
import queEsImage from '@/assets/hydralog/que-es.png';

// El Nav y el Footer los pone el Layout
export default function Hydralog() {
  return (
    <main className="hydralog-page">
      <title>Hydralog | Lees Lab</title>

      <StaticHero
        variant="hydralog"
        title="Todos sus puntos de medición en un solo lugar"
        subtitle="Hydralog es la plataforma de monitoreo desarrollada por Lees Lab, donde concentra todos los puntos de medición de su empresa."
        cta={{ label: 'Solicitar demo', href: '/contacto', variant: 'blue' }}
        image={heroImage}
        imagePosition="center bottom"
        icon={heroIcon}
      />

      <MediaText
        title="¿Qué es Hydralog?"
        text="Nuestra plataforma de monitoreo y centralización de puntos de medición es compatible con equipos de medición de diversas marcas, incluyendo equipos de terceros ya instalados, y está disponible tanto en versión web como en aplicación móvil compatible con cualquier dispositivo."
        image={queEsImage}
        alt="Tuberías de presión instaladas en una ladera"
      />

      <Features />
      <TryHydralog />

      <Cta
        title="Conozca como Hydralog le ayuda a tener un monitoreo centralizado"
        secondary={{ label: 'Demo de Hydralog', href: HYDRALOG_DEMO_URL }}
      />
    </main>
  );
}
