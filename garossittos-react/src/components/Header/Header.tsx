import { useState } from "react";
import { NEGOCIO, linkWhatsApp } from "../../data/negocio";
import styles from "./Header.module.css";

const ENLACES = [
  { href: "#inicio", texto: "Inicio" },
  { href: "#historia", texto: "Nuestra historia" },
  { href: "#catalogo", texto: "Catálogo" },
  { href: "#como-pedir", texto: "Cómo pedir" },
  { href: "#contacto", texto: "Contacto" },
];

export default function Header() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a className={styles.marca} href="#inicio">
          <img src="/assets/images/logo-garossittos.png" alt="Logo Garossittos" />
          <span className={styles.marcaTexto}>
            Garossittos
            <small>Tradición y Sabor</small>
          </span>
        </a>

        <button
          className={styles.hamburguesa}
          aria-label="Abrir menú"
          aria-expanded={abierto}
          onClick={() => setAbierto((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`${styles.navLinks} ${abierto ? styles.abierto : ""}`}>
          {ENLACES.map((e) => (
            <a key={e.href} href={e.href} onClick={() => setAbierto(false)}>
              {e.texto}
            </a>
          ))}
        </div>

        <div className={styles.navCta}>
          <a
            className="btn btn-primario btn-sm"
            href={linkWhatsApp(NEGOCIO.mensajeGenerico)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.22.62-1.28 1.2-1.76 1.24-.45.05-.9.22-3.02-.63-2.56-1.02-4.2-3.6-4.33-3.77-.13-.17-1.03-1.37-1.03-2.62 0-1.25.66-1.86.9-2.11.22-.24.5-.3.66-.3l.48.01c.15 0 .36-.06.56.43.22.53.74 1.83.8 1.96.07.14.11.3.02.48-.09.17-.13.28-.26.43-.13.15-.28.34-.4.46-.13.13-.27.28-.12.55.15.27.68 1.12 1.46 1.82 1 .9 1.85 1.18 2.12 1.31.27.13.43.11.6-.07.16-.18.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.82.86.27.14.44.2.5.32.07.12.07.68-.15 1.3z" />
            </svg>
            <span>Pedir por WhatsApp</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
