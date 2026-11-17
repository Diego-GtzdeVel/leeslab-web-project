import Button from '@/components/Button/Button.jsx';
import { HYDRALOG_DEMO_URL } from '@/content/hydralog.js';
import hydralogImage from '@/assets/hydralog-image.png';
import appStoreBadge from '@/assets/badge-appstore.svg';
import googlePlayBadge from '@/assets/badge-googleplay.svg';
import './TryHydralog.css';

export default function TryHydralog() {
  return (
    <section className="try-hydralog">
      <div className="try-hydralog__container">
        <img
          className="try-hydralog__image"
          src={hydralogImage}
          alt="Hydralog en computadora de escritorio y en teléfono"
          loading="lazy"
        />

        <div className="try-hydralog__text">
          <div className="try-hydralog__heading">
            <h2 className="try-hydralog__title">Pruebe Hydralog</h2>
            <p className="try-hydralog__subtitle">
              Visualice todos sus puntos de medición en un solo lugar, desde cualquier dispositivo.
            </p>
          </div>

          <Button
            variant="green"
            href={HYDRALOG_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="try-hydralog__cta"
          >
            Demo de Hydralog
          </Button>

          <div className="try-hydralog__links">
            {/* TODO: poner las URLs reales de las tiendas */}
            <a className="try-hydralog__badge" href="#" aria-label="Descargar en App Store">
              <img src={appStoreBadge} alt="Descargar en App Store" />
            </a>
            <a className="try-hydralog__badge" href="#" aria-label="Disponible en Google Play">
              <img src={googlePlayBadge} alt="Disponible en Google Play" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
