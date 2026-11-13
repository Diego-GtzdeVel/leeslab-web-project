import Button from '@/components/Button/Button.jsx';
import { CERTIFICACIONES } from '@/content/norma.js';
import './Certifications.css';

export default function Certifications({ items = CERTIFICACIONES }) {
  return (
    <section className="certifications">
      <div className="certifications__heading">
        <h2 className="certifications__title">Nuestras certificaciones</h2>
        <p className="certifications__subtitle">
          Respaldamos cada proyecto con acreditaciones oficiales que garantizan la calidad y validez
          normativa de nuestro trabajo, incluyendo nuestra certificación como PSI ante la entidad
          correspondiente de CONAGUA.
        </p>
      </div>

      <ul className="certifications__grid">
        {items.map((item) => (
          <li className="certifications__item" key={item.alt}>
            <div className={`certifications__media ${item.fill ? 'certifications__media--fill' : ''}`}>
              <img className="certifications__logo" src={item.logo} alt={item.alt} loading="lazy" />
            </div>
            <div className="certifications__content">
              <p className="certifications__text">{item.text}</p>
              <Button
                variant="green"
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="certifications__button"
              >
                Descargar certificado
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
