import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Nav from '@/components/Nav/Nav.jsx';
import Footer from '@/components/Footer/Footer.jsx';
import './Layout.css';

/** Estructura común de todas las páginas: nav fijo, contenido de la ruta y footer */
export default function Layout() {
  const location = useLocation();
  // La primera carga tiene key "default": solo se anima al navegar entre páginas
  const isFirstLoad = location.key === 'default';

  return (
    <>
      <Nav />
      {/* La key remonta el contenido en cada cambio de ruta y reinicia la animación */}
      <div key={location.pathname} className={`layout__page ${isFirstLoad ? '' : 'layout__page--enter'}`}>
        <Outlet />
        <Footer />
      </div>
      {/* Al cambiar de página regresa arriba; con "atrás" recupera el scroll anterior */}
      <ScrollRestoration />
    </>
  );
}
