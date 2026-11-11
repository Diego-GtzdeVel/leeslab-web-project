import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/components/Layout/Layout.jsx';
import Home from '@/pages/Home/Home.jsx';
import Soluciones from '@/pages/Soluciones/Soluciones.jsx';
import Solucion from '@/pages/Solucion/Solucion.jsx';
import Norma from '@/pages/Norma/Norma.jsx';
import Hydralog from '@/pages/Hydralog/Hydralog.jsx';
import Contacto from '@/pages/Contacto/Contacto.jsx';
import NotFound from '@/pages/NotFound/NotFound.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/soluciones', element: <Soluciones /> },
      { path: '/soluciones/:slug', element: <Solucion /> },
      { path: '/norma', element: <Norma /> },
      { path: '/hydralog', element: <Hydralog /> },
      { path: '/contacto', element: <Contacto /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
