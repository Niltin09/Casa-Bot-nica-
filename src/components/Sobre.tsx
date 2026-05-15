import './Sobre.css';

const baseUrl = import.meta.env.BASE_URL;

const features = [
  { icon: `${baseUrl}icon-plant.svg`,   title: 'Curadoria de plantas para iniciantes' },
  { icon: `${baseUrl}icon-book.svg`,    title: 'Guia completo de manutenção' },
  { icon: `${baseUrl}icon-package.svg`, title: 'Kits prontos e fáceis de cuidar' },
];

export default function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="sobre__container">
        <div className="sobre__content">
          <p className="sobre__eyebrow">Sobre nós</p>
          <h2 className="sobre__title">Criamos experiências naturais para sua casa</h2>
          <p className="sobre__text">
            Na <span className="sobre__brand">Casa Botânica</span>, acreditamos que o contato com a
            natureza transforma não só os ambientes, mas também a forma como vivemos e
            nos sentimos no dia a dia.
          </p>
          <p className="sobre__text">
            Por isso, selecionamos cuidadosamente plantas e criamos soluções práticas
            para que qualquer pessoa, mesmo sem experiência, consiga cultivar um espaço
            mais leve, saudável e cheio de vida.
          </p>
          <div className="sobre__features">
            {features.map((f) => (
              <div key={f.title} className="sobre__feature-card">
                <img src={f.icon} alt="" className="sobre__feature-icon" aria-hidden="true" />
                <p className="sobre__feature-title">{f.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sobre__image-wrapper">
          <img src={`${baseUrl}grid.png`} alt="Plantas e ambientes naturais" className="sobre__grid-img" />
        </div>
      </div>
    </section>
  );
}
