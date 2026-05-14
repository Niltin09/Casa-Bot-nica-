import { useState } from 'react';
import './Contato.css';

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', comentario: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ nome: '', email: '', comentario: '' });
  };

  return (
    <section id="contato" className="contato">
      <img src="/hero-bg.png" alt="" className="contato__leaf contato__leaf--top" aria-hidden="true" />

      <div className="contato__container">
        {/* Left: form */}
        <div className="contato__left">
          <p className="contato__eyebrow">Entre em Contato</p>
          <h2 className="contato__title">Fale com a gente e transforme seu espaço</h2>
          <p className="contato__desc">
            Tem dúvidas ou quer ajuda para escolher suas plantas? Envie uma
            mensagem e nossa equipe responde rapidamente.
          </p>

          <div className="contato__form-wrapper">
            {submitted ? (
              <div className="contato__success">
                <span>✅</span>
                <p>Mensagem enviada! Em breve entraremos em contato.</p>
              </div>
            ) : (
              <form className="contato__form" onSubmit={handleSubmit}>
                <div className="contato__field">
                  <label className="contato__label">Nome Completo</label>
                  <input type="text" name="nome" className="contato__input"
                    placeholder="Seu nome completo" value={form.nome} onChange={handleChange} required />
                </div>
                <div className="contato__field">
                  <label className="contato__label">Email</label>
                  <input type="email" name="email" className="contato__input"
                    placeholder="seuemail@email.com" value={form.email} onChange={handleChange} required />
                </div>
                <div className="contato__field">
                  <label className="contato__label">Comentário</label>
                  <textarea name="comentario" className="contato__textarea"
                    placeholder="Escreva sua mensagem ou dúvida..." value={form.comentario}
                    onChange={handleChange} rows={5} required />
                </div>
                <button type="submit" className="contato__btn">Enviar Mensagem</button>
              </form>
            )}
          </div>
        </div>

        {/* Right: mapa + info */}
        <div className="contato__right">
          <div className="contato__map">
            <img src="/map.png" alt="Mapa - Rua das Palmeiras, Blumenau" className="contato__map-img" />
          </div>

          <div className="contato__address-card">
            <div className="contato__address-icon">📍</div>
            <div>
              <p className="contato__address-main">Rua das Palmeiras, 123</p>
              <p className="contato__address-sub">Centro - Blumenau, SC - CEP: 89015-901</p>
            </div>
          </div>

          <div className="contato__socials">
            <a href="https://wa.me/5547999999999" className="contato__social-item" target="_blank" rel="noreferrer">
              <span className="contato__social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
              </span>
              <span>(47) 99999-9999</span>
            </a>
            <a href="https://instagram.com/casa_botanica" className="contato__social-item" target="_blank" rel="noreferrer">
              <span className="contato__social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </span>
              <span>@casa_botanica</span>
            </a>
            <a href="https://facebook.com" className="contato__social-item" target="_blank" rel="noreferrer">
              <span className="contato__social-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </span>
              <span>Casa Botânica</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
