import medicion from '@/assets/home/solutions/medicion.png';
import hidroelectricas from '@/assets/home/solutions/hidroelectricas.png';
import telemetria from '@/assets/home/solutions/telemetria.png';
import equipos from '@/assets/home/solutions/equipos.png';
import ptar from '@/assets/home/solutions/ptar.png';
import bombeo from '@/assets/home/solutions/bombeo.png';
import compuertas from '@/assets/home/solutions/compuertas.png';

/**
 * Contenido del carrusel de soluciones del home.
 * `body` es una lista de bloques: { type: 'p', text } o { type: 'ul', items }.
 * `imagePosition` replica el recorte de Figma cuando la foto no va centrada.
 */
export const SOLUCIONES_HOME = [
  {
    slug: 'medicion',
    title: 'Medición de flujo',
    body: [
      {
        type: 'p',
        text: 'Canales abiertos, tuberías con instalación interior y exterior. Tenemos amplia experiencia en la instalación de medidores de carrete para tubería a presión.',
      },
    ],
    image: medicion,
    alt: 'Medidor de carrete instalado en tubería azul a presión',
  },
  {
    slug: 'hidroelectricas',
    title: 'Monitoreo de eficiencia en centrales hidroeléctricas',
    body: [
      { type: 'p', text: 'Medición de niveles, presión, temperatura, flujo y cálculo de eficiencia.' },
    ],
    image: hidroelectricas,
    alt: 'Instalaciones de una central hidroeléctrica',
  },
  {
    slug: 'telemetria',
    title: 'Telemetría',
    body: [
      {
        type: 'p',
        text: 'Llevamos sus mediciones de campo a la nube vía comunicación celular, satelital y radiofrecuencia. Herramientas de monitoreo disponibles en todo momento.',
      },
    ],
    image: telemetria,
    alt: 'Equipo de telemetría en campo',
  },
  {
    slug: 'equipos',
    title: 'Venta e instalación de equipos',
    body: [
      { type: 'p', text: 'Medidores de flujo:' },
      {
        type: 'ul',
        items: [
          'Medidores ultrasónicos para grandes diámetros',
          'Medidores electromagnéticos',
          'Medidores clamp-on',
          'Aforadores de garganta larga (AGL)',
          'Aforadores doppler laterales y de fondo',
        ],
      },
      { type: 'p', text: 'Instrumentos de medición:' },
      {
        type: 'ul',
        items: [
          'Sensores de conductividad, cloro, nivel de agua, presión, pH, oxígeno disuelto, parámetros eléctricos, amonio y nitrato, etc...',
        ],
      },
    ],
    image: equipos,
    imagePosition: '63% 100%',
    alt: 'Equipos de medición de flujo',
  },
  {
    slug: 'ptar',
    title: 'Planta de Tratamiento de Aguas Residuales (PTAR)',
    body: [
      {
        type: 'p',
        text: 'Instrumentación en plantas de tratamiento de aguas residuales para la medición de nivel, turbidez, pH, oxígeno disuelto, etc...',
      },
    ],
    image: ptar,
    alt: 'Planta de tratamiento de aguas residuales',
  },
  {
    slug: 'bombeo',
    title: 'Automatización equipos de bombeo',
    body: [
      { type: 'p', text: 'Ofrecemos servicio de instrumentación y control remoto de bombas hidráulicas' },
    ],
    image: bombeo,
    alt: 'Equipo de bombeo automatizado',
  },
  {
    slug: 'compuertas',
    title: 'Automatización equipos de compuertas de riego',
    body: [
      { type: 'p', text: 'Ofrecemos servicio de instrumentación y control remoto de compuertas de riego' },
    ],
    image: compuertas,
    alt: 'Compuerta de riego automatizada',
  },
];
