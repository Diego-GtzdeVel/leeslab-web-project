import StaticHero from '@/sections/shared/StaticHero/StaticHero.jsx';
import MediaText from '@/sections/shared/MediaText/MediaText.jsx';
import Cta from '@/sections/shared/CTA/Cta.jsx';
import Process from '@/sections/norma/Process/Process.jsx';
import Standards from '@/sections/norma/Standards/Standards.jsx';
import PsiChange from '@/sections/norma/PsiChange/PsiChange.jsx';
import Certifications from '@/sections/norma/Certifications/Certifications.jsx';
import Button from '@/components/Button/Button.jsx';
import Link from '@/components/Link/Link.jsx';
import { NORMA_PDF_URL } from '@/content/norma.js';

import heroImage from '@/assets/norma/hero.png';
import heroIcon from '@/assets/hero-icon.png'; // el mismo logo del hero del home
import queEsImage from '@/assets/norma/que-es.png';
import participacionImage from '@/assets/norma/participacion.png';

// El Nav y el Footer los pone el Layout
export default function Norma() {
  return (
    <main className="norma">
      <title>Norma NMX-AA-179 | Lees Lab</title>

      <StaticHero
        title="Norma NMX-AA-179"
        subtitle="Somos Prestador de Servicios Integrados (PSI) certificado para la NMX-AA-179-SCFI-2018, con más de 600 aprovechamientos validados ante la CONAGUA."
        cta={{ label: 'Solicitar evaluación técnica', href: '/contacto', variant: 'green' }}
        image={heroImage}
        imagePosition="center bottom"
        icon={heroIcon}
      />

      <MediaText
        title="¿Qué es la NMX-AA-179?"
        text={[
          'La NMX-AA-179-SCFI-2018 establece los requisitos para la medición de volúmenes de agua en aprovechamientos, con el objetivo de garantizar mediciones confiables ante CONAGUA.',
          'En Lees Lab acompañamos a nuestros clientes en cada etapa del cumplimiento: desde el levantamiento inicial, la selección del medidor, adecuación del tren de descarga, hasta la validación y soporte permanente de sus sistemas de medición.',
        ]}
        image={queEsImage}
        alt="Tuberías de presión de una central hidroeléctrica"
      >
        <Link variant="blue" href={NORMA_PDF_URL} target="_blank" rel="noopener noreferrer">
          Más sobre la norma...
        </Link>
      </MediaText>

      <Process />
      <Standards />

      <MediaText
        reverse
        title="Participación en su elaboración"
        text="Colaboramos en conjunto con el Comité Técnico de Normalización Nacional de Medio Ambiente y Recursos Naturales (COTEMARNAT) para la elaboración de la norma, aportando experiencia de campo real en medición de flujo de agua."
        image={participacionImage}
        alt="Tuberías de presión de una central hidroeléctrica"
      >
        <Button variant="green" href={NORMA_PDF_URL} target="_blank" rel="noopener noreferrer">
          Ver documento oficial
        </Button>
      </MediaText>

      <PsiChange />
      <Certifications />
      <Cta />
    </main>
  );
}
