import Link from '@/components/Link/Link.jsx';
import psiImage from '@/assets/psi-image.png';
import './Psi.css';

const STANDARDS = [
  'EC0913 - Asesoría en medidores de carrete para tubería a presión.',
  'EC0914 - Asesoría en sistemas fijos de medición de gasto para canales.',
  'EC1110 - Asesoría en sistemas de medición ultrasónicos de tiempo de travesía que no son de carrete para tubería a presión.',
  'EC1156 - Asesoría para la medición de volúmenes de aguas nacionales usados, explotados o aprovechados, con el método de presión diferencial Winter-Kennedy en turbinas con cámara espiral de acero.',
];

export default function Psi() {
  return (
    <section className="psi">
      <img className="psi__image" src={psiImage} alt="Técnicos dentro de una tubería de gran diámetro" />

      <div className="psi__text">
        <h2 className="psi__title">
          Contamos con la certificación como <strong>PSI</strong> para la norma{' '}
          <strong>NMX-AA-179-SCFI-2018</strong>
        </h2>

        <div className="psi__info">
          <p>Estamos acreditados ante la CONAGUA como PSI en 4 estándares de competencia:</p>
          <ul>
            {STANDARDS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <Link variant="blue" href="/norma" className="psi__link">
          Más información...
        </Link>
      </div>
    </section>
  );
}
