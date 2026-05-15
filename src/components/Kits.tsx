import { useState } from 'react';
import './Kits.css';

const baseUrl = import.meta.env.BASE_URL;

const kits = [
  {
    id: 1,
    name: 'Kit Iniciante',
    description: 'Ideal para quem está começando no mundo das plantas.',
    price: 'R$ 79,90',
    defaultImg: `${baseUrl}kit1-default.png`,
    hoverImg: `${baseUrl}kit1-hover.png`,
  },
  {
    id: 2,
    name: 'Kit Relaxamento',
    description: 'Perfeito para criar um ambiente leve e tranquilo.',
    price: 'R$ 99,90',
    defaultImg: `${baseUrl}kit2-default.png`,
    hoverImg: `${baseUrl}kit2-hover.png`,
  },
  {
    id: 3,
    name: 'Kit Decoração',
    description: 'Transforme seu espaço com plantas sofisticadas.',
    price: 'R$ 149,90',
    defaultImg: `${baseUrl}kit3-default.png`,
    hoverImg: `${baseUrl}kit3-hover.png`,
  },
  {
    id: 4,
    name: 'Kit Produtividade',
    description: 'Perfeito para quem quer mais foco e organização mental.',
    price: 'R$ 89,90',
    defaultImg: `${baseUrl}kit4-default.png`,
    hoverImg: `${baseUrl}kit4-hover.png`,
  },
];

export default function Kits() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="kits" className="kits">
      <div className="kits__container">
        <p className="kits__eyebrow">Kits</p>

        <div className="kits__grid">
          {kits.map((kit) => {
            const isHovered = hoveredId === kit.id;
            const isCollapsed = hoveredId !== null && !isHovered;

            return (
              <div
                key={kit.id}
                className={`kits__card ${isHovered ? 'kits__card--expanded' : ''} ${isCollapsed ? 'kits__card--collapsed' : ''}`}
                onMouseEnter={() => setHoveredId(kit.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Imagem default (P&B) */}
                <img
                  src={kit.defaultImg}
                  alt={kit.name}
                  className={`kits__img kits__img--default ${isHovered ? 'kits__img--hidden' : ''}`}
                />
                {/* Imagem hover (colorida) */}
                <img
                  src={kit.hoverImg}
                  alt={kit.name + ' colorido'}
                  className={`kits__img kits__img--hover ${isHovered ? 'kits__img--visible' : ''}`}
                />
                {/* Overlay com info */}
                <div className={`kits__overlay ${isHovered ? 'kits__overlay--visible' : ''}`}>
                  <div className="kits__info">
                    <div className="kits__info-top">
                      <h3 className="kits__name">{kit.name}</h3>
                      <span className="kits__price">{kit.price}</span>
                    </div>
                    <p className="kits__desc">{kit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="kits__action">
          <button className="kits__btn" onClick={() => handleScroll('#contato')}>
            Montar meu espaço
          </button>
        </div>
      </div>
    </section>
  );
}
