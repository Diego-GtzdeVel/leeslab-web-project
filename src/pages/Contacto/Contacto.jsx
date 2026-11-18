import StaticHero from '@/sections/shared/StaticHero/StaticHero.jsx';
import ContactForm from '@/sections/contacto/ContactForm/ContactForm.jsx';

// El Nav y el Footer los pone el Layout
export default function Contacto() {
  return (
    <main className="contacto">
      <title>Contacto | Lees Lab</title>

      <StaticHero
        variant="stacked"
        title="Hablemos de su proyecto"
        subtitle="Cuéntenos qué necesita y un especialista lo contactará para definir la mejor solución"
      />

      <ContactForm />
    </main>
  );
}
