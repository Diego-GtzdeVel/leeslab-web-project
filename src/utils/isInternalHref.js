/** true para rutas propias del sitio ("/norma"); false para http, mailto, "#", etc. */
export default function isInternalHref(href) {
  return typeof href === 'string' && href.startsWith('/') && !href.startsWith('//');
}
