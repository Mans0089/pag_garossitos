import { NEGOCIO, linkWhatsApp } from "../../data/negocio";
import Reveal from "../Reveal";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={`wrap ${styles.grid}`}>
        <Reveal>
          <span className="eyebrow">Desde 2013 · Paipa, Boyacá</span>
          <h1 className={styles.titulo}>
            Los sabores de la cocina de la abuela, ahora a un mensaje de distancia
          </h1>
          <p className={styles.lead}>
            Tamales boyacenses, envueltos, tortas, kumis y postres hechos a mano, con recetas
            familiares que ya pasaron por tres generaciones. Todo por encargo, con el cariño de
            siempre.
          </p>
          <div className={styles.cta}>
            <a href="#catalogo" className="btn btn-primario">
              Ver catálogo
            </a>
            <a
              href={linkWhatsApp(NEGOCIO.mensajeGenerico)}
              className="btn btn-secundario"
              target="_blank"
              rel="noopener noreferrer"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
          <div className={styles.badges}>
            <div className={styles.badge}>
              <span className={styles.num}>12+</span>
              <span className={styles.txt}>años de tradición familiar</span>
            </div>
            <div className={styles.badge}>
              <span className={styles.num}>3</span>
              <span className={styles.txt}>generaciones en la cocina</span>
            </div>
            <div className={styles.badge}>
              <span className={styles.num}>100%</span>
              <span className={styles.txt}>hecho a mano, por encargo</span>
            </div>
          </div>
        </Reveal>

        <Reveal className={styles.collage}>
          <img
            className={styles.hc1}
            src="/assets/images/tamales-servidos.jpg"
            alt="Tamales boyacenses servidos"
          />
          <img
            className={styles.hc2}
            src="/assets/images/cheesecake-frutos-rojos.jpg"
            alt="Cheesecake de frutos rojos"
          />
          <img
            className={styles.hc3}
            src="/assets/images/torta-mantequilla.jpg"
            alt="Torta de mantequilla"
          />
          <div className={styles.sello}>
            hecho
            <br />a mano
          </div>
        </Reveal>
      </div>
    </section>
  );
}
