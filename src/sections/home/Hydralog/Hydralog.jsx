import Button from '@/components/Button/Button.jsx';
import hydralogImage from '@/assets/hydralog-image.png';
import appStoreBadge from '@/assets/badge-appstore.svg';
import googlePlayBadge from '@/assets/badge-googleplay.svg';
import './Hydralog.css';

const BULLETS = [
  'Monitoreo en tiempo real de todos sus puntos de medición',
  'Disponible en escritorio y móvil',
  'Notificaciones por desconexión, alarmas y reportes',
  'Acceso a históricos exportables en distintos formatos',
  'Consulta de lecturas enviadas a CONAGUA',
];

export default function Hydralog() {
  return (
    <section className="hydralog">
      <div className="hydralog__showcase">
        <img
          className="hydralog__image"
          src={hydralogImage}
          alt="Hydralog en computadora de escritorio y en teléfono"
        />
        <div className="hydralog__links">
          {/* TODO: poner las URLs reales de las tiendas */}
          <a className="appstore" href="#" aria-label="Descargar en App Store">
            <img src={appStoreBadge} alt="Descargar en App Store" />
          </a>
          <a className="googleplay" href="#" aria-label="Disponible en Google Play">
            <img src={googlePlayBadge} alt="Disponible en Google Play" />
          </a>
        </div>
      </div>

      <div className="hydralog__text">
        <div className="hydralog__heading">
          <h2 className="hydralog__title">Hydralog, su plataforma de monitoreo</h2>
          <p className="hydralog__subtitle">
            Visualice todos sus puntos de medición en un solo lugar, desde cualquier dispositivo.
          </p>
        </div>

        <ul className="hydralog__bullets">
          {BULLETS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <Button variant="green" href="/hydralog" className="hydralog__link">
          Conozca Hydralog
        </Button>
      </div>
    </section>
  );
}
