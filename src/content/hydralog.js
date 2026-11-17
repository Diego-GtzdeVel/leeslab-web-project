import iconMonitoreo from '@/assets/hydralog/icons/monitoreo.svg';
import iconWebApp from '@/assets/hydralog/icons/web-app.svg';
import iconAlertas from '@/assets/hydralog/icons/alertas.svg';
import iconHistoricos from '@/assets/hydralog/icons/historicos.svg';
import iconMultiplesSitios from '@/assets/hydralog/icons/multiples-sitios.svg';
import iconAcceso from '@/assets/hydralog/icons/acceso.svg';

export const HYDRALOG_DEMO_URL = 'https://hydralog.mx/logind.php';

/** Tarjetas de "Funciones de Hydralog" (en el orden de Figma: 2 filas de 3). */
export const FUNCIONES = [
  {
    title: 'Monitoreo en tiempo real',
    text: 'Consulte niveles, caudales y estatus de operación de todos sus puntos de medición al instante.',
    icon: iconMonitoreo,
  },
  {
    title: 'Web y app móvil',
    text: 'Acceda desde el navegador o desde la aplicación móvil: la misma plataforma, donde la necesite.',
    icon: iconWebApp,
  },
  {
    title: 'Alertas automáticas',
    text: 'Reciba notificaciones por desconexión antes de que se conviertan en un problema.',
    icon: iconAlertas,
  },
  {
    title: 'Históricos y reportes',
    text: 'Consulte el comportamiento de sus sistemas a lo largo del tiempo y genere reportes exportables para trámites, auditorías o análisis interno.',
    icon: iconHistoricos,
  },
  {
    title: 'Múltiples sitios, una sola vista',
    text: 'Administre puntos de medición en distintas ubicaciones desde un mismo panel.',
    icon: iconMultiplesSitios,
  },
  {
    title: 'Acceso seguro y permisos',
    text: 'Controle quién tiene acceso a qué información dentro de su organización.',
    icon: iconAcceso,
  },
];
