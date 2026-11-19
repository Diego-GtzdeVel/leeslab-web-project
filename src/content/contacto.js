import { SOLUCIONES_LISTA } from '@/content/solucionesLista.js';

/** Datos de "Contacto Directo". `href` convierte el valor en enlace (mailto/tel). */
export const CONTACTO_DIRECTO = [
  { label: 'Correo electrónico', value: 'contacto@leeslab.com.mx', href: 'mailto:contacto@leeslab.com.mx' },
  { label: 'Teléfono y WhatsApp', value: '442 263 3990', href: 'tel:+524422633990' },
  { label: 'Ubicación', value: 'Querétaro, México' },
];

export const HORARIO = 'Lunes a viernes, de 8:30 a 18:00 h';

/** Opciones del dropdown "¿Qué servicio le interesa?" */
export const SERVICIOS = [
  ...SOLUCIONES_LISTA.map((solucion) => solucion.title),
  'Norma NMX-AA-179',
  'Hydralog',
  'Otro',
];
