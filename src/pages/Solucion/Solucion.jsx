import { useParams } from 'react-router-dom';
import PagePlaceholder from '@/components/PagePlaceholder/PagePlaceholder.jsx';
import NotFound from '@/pages/NotFound/NotFound.jsx';
import { SOLUCIONES_HOME } from '@/content/soluciones.js';

/** Detalle de una solución: /soluciones/:slug (slugs de content/soluciones.js) */
export default function Solucion() {
  const { slug } = useParams();
  const solucion = SOLUCIONES_HOME.find((item) => item.slug === slug);

  if (!solucion) return <NotFound />;

  return <PagePlaceholder title={solucion.title} />;
}
