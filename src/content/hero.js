import heroImage from '@/assets/hero-image.png';
import ctaImage from '@/assets/cta-image.png';
import hidroelectricas from '@/assets/home/solutions/hidroelectricas.png';
import ptar from '@/assets/home/solutions/ptar.png';

/**
 * Imágenes del slideshow del hero en home (decorativas, van detrás del ícono).
 * `position` replica el recorte (object-position) cuando la foto no va centrada.
 * Para cambiar o agregar fotos basta con editar esta lista; con una sola no rota.
 * Ideal: fotos horizontales de al menos 1600px de ancho.
 */
export const HERO_HOME_IMAGES = [
  { src: heroImage, position: 'center 41%' },
  { src: hidroelectricas },
  { src: ptar },
  { src: ctaImage },
];
