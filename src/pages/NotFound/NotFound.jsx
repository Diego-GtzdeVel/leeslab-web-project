import Button from '@/components/Button/Button.jsx';
import PagePlaceholder from '@/components/PagePlaceholder/PagePlaceholder.jsx';

export default function NotFound() {
  return (
    <PagePlaceholder title="Página no encontrada">
      <Button variant="green" href="/">
        Volver al inicio
      </Button>
    </PagePlaceholder>
  );
}
