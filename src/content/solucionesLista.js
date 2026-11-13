import iconMedicion from '@/assets/soluciones/medicion.png';
import iconHidroelectricas from '@/assets/soluciones/hidroelectricas.png';
import iconTelemetria from '@/assets/soluciones/telemetria.png';
import iconEquipos from '@/assets/soluciones/equipos.png';
import iconPtar from '@/assets/soluciones/ptar.png';
import iconAutomatizacion from '@/assets/soluciones/automatizacion.png';

/** Lista de la página /soluciones. `slug` arma la ruta de cada subpágina. */
export const SOLUCIONES_LISTA = [
  {
    slug: 'medicion',
    title: 'Medición de flujo',
    summary: 'Medimos con precisión el caudal en pozos y grandes diámetros, cumpliendo con la NMX-179.',
    icon: iconMedicion,
  },
  {
    slug: 'hidroelectricas',
    title: 'Monitoreo de eficiencia en centrales hidroeléctricas',
    summary: 'Sistemas de medición y monitoreo para eficientar la operación y anticipar fallas.',
    icon: iconHidroelectricas,
  },
  {
    slug: 'telemetria',
    title: 'Telemetría',
    summary: 'Monitoreo en tiempo real de todos sus puntos de medición.',
    icon: iconTelemetria,
  },
  {
    slug: 'equipos',
    title: 'Venta e instalación de equipos',
    summary: 'Distribución de equipos de medición y control de marcas líderes, con soporte técnico especializado.',
    icon: iconEquipos,
  },
  {
    slug: 'ptar',
    title: 'Planta de tratamiento de Aguas Residuales (PTAR)',
    summary: 'Medición y control del proceso de tratamiento para asegurar el cumplimiento normativo.',
    icon: iconPtar,
  },
  {
    slug: 'bombeo',
    title: 'Automatización de equipos de bombeo',
    summary: 'Control remoto de equipos de bombeo para reducir desplazamientos.',
    icon: iconAutomatizacion,
  },
  {
    slug: 'compuertas',
    title: 'Automatización de compuertas de riego',
    summary: 'Control remoto de compuertas de riego para reducir la intervención manual.',
    icon: iconAutomatizacion,
  },
];
