import ec0913 from '@/assets/norma/ec0913.png';
import ec0914 from '@/assets/norma/ec0914.png';
import ec1110 from '@/assets/norma/ec1110.png';
import ec1156 from '@/assets/norma/ec1156.png';
import logoEma from '@/assets/norma/ema.png';
import logoConagua from '@/assets/norma/conagua.png';
import logoConocer from '@/assets/norma/conocer.png';

export const NORMA_PDF_URL =
  'https://www.gob.mx/cms/uploads/attachment/file/714461/2_NMX-AA-179-SCFI-2018.pdf';

/**
 * Pasos del diagrama "Cómo le ayudamos a cumplir".
 * x, y, w, h: posición de cada tarjeta dentro de la imagen, en % (tomado de Figma).
 */
export const PROCESO_PASOS = [
  {
    title: 'Levantamiento de campo',
    text: 'Un ingeniero realiza una visita a sus instalaciones y una evaluación detallada para determinar el estado actual de su aprovechamiento.',
    x: 3.66, y: 4.28, w: 28.74, h: 30.33,
    align: 'start',
  },
  {
    title: 'Selección de medidor',
    text: 'Con los hallazgos del levantamiento de campo se entrega una matriz de comparación con la cual le apoyamos a seleccionar el equipo que más se adapte a las necesidades de su aprovechamiento.',
    x: 35.63, y: 4.28, w: 28.74, h: 30.33,
    align: 'center',
  },
  {
    title: 'Adecuación del tren de descarga',
    text: 'Realizamos todo el trabajo de adecuación e instalación de accesorios en el tren de descarga, desde instalar válvulas, hasta modificar las tuberías de su aprovechamiento.',
    x: 67.6, y: 4.28, w: 28.74, h: 30.33,
    align: 'end',
  },
  {
    title: 'Apoyo en el proceso de validación',
    text: 'Entregamos certificados de calibración vigentes de acuerdo con la OIML R 49, registro de actos, proyecto ejecutivo, manuales de operación, procedimientos de operación de nuestra UTR, etc.',
    x: 18.75, y: 54.17, w: 28.74, h: 30.33,
    align: 'center',
  },
  {
    title: 'Soporte permanente',
    text: 'El trabajo no termina en la instalación. Nos aseguramos de que en el evento de desconexión el equipo no deje de transmitir por más de 5 días, y brindamos soporte técnico durante toda la vida útil de su equipo.',
    x: 55.6, y: 54.17, w: 28.74, h: 30.33,
    align: 'center',
  },
];

export const ESTANDARES = [
  {
    code: 'EC0913',
    text: 'Asesoría en medidores de carrete para tubería a presión.',
    image: ec0913,
    imagePosition: 'center 80%',
  },
  {
    code: 'EC0914',
    text: 'Asesoría en sistemas fijos de medición de gasto para canales.',
    image: ec0914,
  },
  {
    code: 'EC1110',
    text: 'Asesoría en sistemas de medición ultrasónicos de tiempo de travesía que no son de carrete para tubería a presión.',
    image: ec1110,
  },
  {
    code: 'EC1156',
    text: 'Asesoría para la medición de volúmenes de aguas nacionales usados, explotados o aprovechados, con el método de presión diferencial Winter-Kennedy en turbinas con cámara espiral de acero.',
    image: ec1156,
  },
];

export const CAMBIO_PSI = [
  {
    name: 'Fácil implementación',
    desc: 'Nuestra solución se adapta a cualquier medidor del mercado, y mantenemos la infraestructura existente.',
  },
  {
    name: 'Plataforma robusta',
    desc: 'Hydralog nos permite concentrar cualquier punto de medición dentro de la plataforma, sin necesidad de hacer cambios mayores.',
  },
  {
    name: 'Soporte continuo',
    desc: 'Continuamos dando mantenimiento y asistencia técnica posterior al cambio de PSI.',
  },
  {
    name: 'Credibilidad',
    desc: 'Contamos con más de 600 puntos de medición acreditados en toda la república.',
  },
];

/**
 * Certificaciones. `fill: true` → el logo cubre toda la caja (EMA);
 * si no, se centra con aire alrededor.
 * Los PDF van en /public/docs/ (se sirven tal cual, sin importarlos).
 */
export const CERTIFICACIONES = [
  {
    text: 'Contamos con una certificación ante la Entidad Mexicana de Acreditación',
    logo: logoEma,
    alt: 'Entidad Mexicana de Acreditación (EMA)',
    fill: true,
    pdf: '/docs/certificado-ema.pdf',
  },
  {
    text: 'Estamos certificados ante la CONAGUA en 4 estándares de competencia',
    logo: logoConagua,
    alt: 'CONAGUA, Comisión Nacional del Agua',
    pdf: '/docs/certificado-conagua.pdf',
  },
  {
    text: 'Estamos certificados ante CONOCER en el EC17020',
    logo: logoConocer,
    alt: 'CONOCER',
    pdf: '/docs/certificado-conocer.pdf',
  },
];
