import './PagePlaceholder.css';

/**
 * Contenido temporal para páginas que aún no tienen diseño.
 * Reemplazar por las secciones reales de cada página.
 */
export default function PagePlaceholder({ title, children }) {
  return (
    <main className="page-placeholder">
      <title>{`${title} | Lees Lab`}</title>
      <h1 className="page-placeholder__title">{title}</h1>
      {children && <div className="page-placeholder__body">{children}</div>}
    </main>
  );
}
