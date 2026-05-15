import './Hero.css';

const baseUrl = import.meta.env.BASE_URL;

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero__glow hero__glow--purple" />
      <div className="hero__glow hero__glow--green" />

      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            Cultivo natural • Bem-estar • Sustentabilidade
          </div>
          <h1 className="hero__title">
            Transforme seu espaço{' '}
            <span className="hero__title-highlight">com o poder das plantas</span>
          </h1>
          <p className="hero__description">
            Selecionamos plantas ideais para sua rotina e seu ambiente,
            com orientação completa para você cuidar sem complicação
          </p>
          <div className="hero__actions">
            <button className="hero__btn hero__btn--primary" onClick={() => handleScroll('#kits')}>
              Explorar Plantas
            </button>
            <button className="hero__btn hero__btn--secondary" onClick={() => handleScroll('#kits')}>
              Montar Meu Kit
            </button>
          </div>
        </div>

        <div className="hero__image-wrapper">
          <div className="hero__image-glow" />
          <img src={`${baseUrl}hero-plant.png`} alt="Planta decorativa" className="hero__image" />
        </div>
      </div>
    </section>
  );
}
