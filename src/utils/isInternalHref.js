/**
 * true para rutas propias del sitio ("/norma"); false para http, mailto, "#", etc.
 * Los archivos servidos desde /public ("/docs/certificado.pdf") tampoco son rutas:
 * se abren con un <a> normal para que no pasen por el router.
 */
export default function isInternalHref(href) {
  if (typeof href !== 'string' || !href.startsWith('/') || href.startsWith('//')) return false;
  const path = href.split(/[?#]/)[0];
  return !/\.[a-z0-9]+$/i.test(path);
}
