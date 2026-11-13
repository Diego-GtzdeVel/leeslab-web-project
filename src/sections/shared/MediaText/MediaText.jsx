import './MediaText.css';

/**
 * Bloque imagen + texto reutilizable.
 * - text: string o arreglo de párrafos
 * - reverse: imagen a la derecha
 * - children: contenido extra debajo del texto (Link, Button…)
 */
export default function MediaText({ title, text, image, alt = '', reverse = false, children }) {
  const paragraphs = Array.isArray(text) ? text : text ? [text] : [];

  return (
    <section className={`media-text ${reverse ? 'media-text--reverse' : ''}`}>
      <img className="media-text__image" src={image} alt={alt} loading="lazy" />
      <div className="media-text__text">
        <h2 className="media-text__title">{title}</h2>
        {paragraphs.length > 0 && (
          <div className="media-text__subtitle">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
