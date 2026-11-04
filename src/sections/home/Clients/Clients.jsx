import './Clients.css';

// Importa todos los logos de /assets/clients
const logos = import.meta.glob('/src/assets/clients/*.png', { eager: true, import: 'default' });
const logo = (file) => logos[`/src/assets/clients/${file}.png`];

// Orden y anchos tal como están en Figma (alto fijo: 110px)
const ROWS = [
  [
    { file: 'xcaret', name: 'Grupo Xcaret', width: 219 },
    { file: 'grupo-mexico', name: 'Grupo México' },
    { file: 'cfe', name: 'CFE' },
    { file: 'conagua', name: 'CONAGUA' },
    { file: 'jumapac', name: 'JUMAPAC Cortazar' },
    { file: 'jumapa', name: 'JUMAPA' },
  ],
  [
    { file: 'dreams', name: 'Dreams Resorts & Spas' },
    { file: 'atelier', name: 'Atelier Hoteles' },
    { file: 'mayakoba', name: 'Mayakoba', width: 168 },
    { file: 'finsa', name: 'FINSA', width: 217 },
    { file: 'bridgestone', name: 'Bridgestone' },
    { file: 'refineria-dos-bocas', name: 'Refinería Olmeca Dos Bocas', width: 109 },
  ],
  [
    { file: 'grand-park-royal', name: 'Grand Park Royal' },
    { file: 'catalonia', name: 'Catalonia Hotels & Resorts' },
    { file: 'secrets', name: 'Secrets Resorts & Spas' },
    { file: 'vitro', name: 'Vitro' },
    { file: 'kimberly-clark', name: 'Kimberly-Clark' },
    { file: 'barcelo', name: 'Barceló Hotels & Resorts' },
  ],
];

export default function Clients() {
  return (
    <section className="clients">
      <h2 className="clients__title">Colaboramos con empresas líderes:</h2>
      <div className="clients__container">
        {ROWS.map((row, i) => (
          <ul className="clients__row" key={i}>
            {row.map((client) => (
              <li className="clients__logo" key={client.file}>
                <img
                  src={logo(client.file)}
                  alt={client.name}
                  width={client.width ?? 220}
                  height={110}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
