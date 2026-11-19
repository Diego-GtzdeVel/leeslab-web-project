import { useState } from 'react';
import Button from '@/components/Button/Button.jsx';
import { CONTACTO_DIRECTO, HORARIO, SERVICIOS } from '@/content/contacto.js';
import chevron from '@/assets/contacto/chevron.svg';
import './ContactForm.css';

export default function ContactForm() {
  const [fileName, setFileName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: conectar el envío (backend o servicio de formularios)
  };

  return (
    <section className="contact">
      <div className="contact__info">
        <p className="contact__intro">
          Ya sea que necesite cumplir con la NMX-AA-179, instalar un sistema de medición o conocer
          más sobre Hydralog, estamos para ayudarle.
        </p>

        <div className="contact__group">
          <h2 className="contact__title">Contacto directo</h2>
          <dl className="contact__list">
            {CONTACTO_DIRECTO.map((item) => (
              <div className="contact__item" key={item.label}>
                <dt className="contact__label">{item.label}</dt>
                <dd className="contact__value">
                  {item.href ? (
                    <a className="contact__link" href={item.href}>
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="contact__group contact__group--schedule">
          <h2 className="contact__title">Horario de atención</h2>
          <p className="contact__value contact__value--light">{HORARIO}</p>
        </div>
      </div>

      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__row">
          <input
            className="contact__field"
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            aria-label="Nombre completo"
            autoComplete="name"
            required
          />
          <input
            className="contact__field"
            type="text"
            name="empresa"
            placeholder="Empresa"
            aria-label="Empresa"
            autoComplete="organization"
          />
        </div>

        <div className="contact__row">
          <input
            className="contact__field"
            type="email"
            name="correo"
            placeholder="Correo Electrónico"
            aria-label="Correo electrónico"
            autoComplete="email"
            required
          />
          <input
            className="contact__field"
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            aria-label="Teléfono"
            autoComplete="tel"
          />
        </div>

        <div className="contact__select">
          <select
            className="contact__field contact__field--select"
            name="servicio"
            aria-label="¿Qué servicio le interesa?"
            defaultValue=""
            required
          >
            <option value="" disabled>
              ¿Qué servicio le interesa?
            </option>
            {SERVICIOS.map((servicio) => (
              <option key={servicio} value={servicio}>
                {servicio}
              </option>
            ))}
          </select>
          <img className="contact__chevron" src={chevron} alt="" aria-hidden="true" />
        </div>

        <textarea
          className="contact__field contact__field--textarea"
          name="mensaje"
          placeholder="Cuéntenos sobre su proyecto"
          aria-label="Cuéntenos sobre su proyecto"
          required
        />

        <label className="contact__field contact__field--file">
          <input
            className="contact__file-input"
            type="file"
            name="archivo"
            onChange={(event) => setFileName(event.target.files[0]?.name ?? '')}
          />
          <span className={fileName ? 'contact__file-name' : 'contact__placeholder'}>
            {fileName || 'Adjuntar archivo'}
          </span>
        </label>

        <Button variant="green" type="submit" className="contact__submit">
          Enviar mensaje
        </Button>
      </form>
    </section>
  );
}
