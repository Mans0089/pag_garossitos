import { NEGOCIO, linkWhatsApp } from "../../data/negocio";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contacto">
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <h3>Garossittos</h3>
            <p>
              Tradición y sabor desde 2013. Tamales, envueltos, tortas, kumis y postres
              artesanales, elaborados en Paipa, Boyacá. Todo por encargo.
            </p>
          </div>
          <div>
            <h5>Contacto</h5>
            <div className={styles.links}>
              <a href={linkWhatsApp(NEGOCIO.mensajeGenerico)} target="_blank" rel="noopener noreferrer">
                📱 311 531 3640 (WhatsApp)
              </a>
              <a href={`tel:+${NEGOCIO.telefonosSecundarios[0]}`}>📞 320 835 5430</a>
              <a href={`tel:+${NEGOCIO.telefonosSecundarios[1]}`}>📞 317 519 0627</a>
              <span>📍 {NEGOCIO.ubicacion}</span>
            </div>
          </div>
          <div>
            <h5>Navegación</h5>
            <div className={styles.links}>
              <a href="#historia">Nuestra historia</a>
              <a href="#catalogo">Catálogo</a>
              <a href="#como-pedir">Cómo pedir</a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Garossittos · Tradición y Sabor</span>
          <span>Hecho con cariño para tres generaciones más.</span>
        </div>
      </div>
    </footer>
  );
}
