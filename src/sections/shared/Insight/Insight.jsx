import insightImage from '@/assets/insight-image.png';
import './Insight.css';

export default function Insight() {
  return (
    <section className="insight">
      <img className="insight__image" src={insightImage} alt="Tuberías de una central hidroeléctrica" />
      <div className="insight__text">
        <h2 className="insight__title">Sobre nosotros</h2>
        <p className="insight__subtitle">
          Somos especialistas en medición de flujo con más de 20 años de experiencia en el sector
          hídrico mexicano. Ofrecemos soluciones integrales para aprovechamientos, centrales
          hidroeléctricas, PTAR y sistemas de telemetría.
        </p>
      </div>
    </section>
  );
}
