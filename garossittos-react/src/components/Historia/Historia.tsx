import Reveal from "../Reveal";
import styles from "./Historia.module.css";

const HITOS = [
  {
    anio: "2013",
    texto: "Garossittos nace en la casa de la abuelita, dedicado exclusivamente a los envueltos artesanales.",
  },
  {
    anio: "Con los años",
    texto: "Se suman los tamales boyacenses y las tortas por encargo, elaboradas en Paipa, Boyacá.",
  },
  {
    anio: "Más adelante",
    texto: "Llegan el kumis, el yogurt y los postres — cheesecakes, leche asada y más — a pedido de nuestros clientes.",
  },
  {
    anio: "Hoy",
    texto: "Tres generaciones de la familia siguen tecnificando procesos, sin perder la receta ni el cariño del primer día.",
  },
];

export default function Historia() {
  return (
    <section className={styles.historia} id="historia">
      <div className={`wrap ${styles.grid}`}>
        <Reveal>
          <span className="eyebrow">Nuestra historia</span>
          <h2>De la cocina de la abuelita a la mesa de tu familia</h2>
          <p className={styles.parrafo}>
            Garossittos nació en 2013 como un emprendimiento familiar en la casa de nuestra
            abuelita, inspirado en el amor por las recetas tradicionales. En sus comienzos nos
            dedicábamos solo a los envueltos, preparados de manera artesanal con recetas que han
            pasado de generación en generación.
          </p>
          <p className={styles.parrafo}>
            Hoy, tres generaciones de la familia participan en este proyecto. Aunque no contamos
            con un local físico y todo se elabora por encargo, hemos ampliado nuestra oferta con
            tamales, tortas, kumis y postres — sin perder jamás la esencia, la calidad y el cariño
            que nos caracteriza.
          </p>
          <a href="#catalogo" className="btn btn-secundario">
            Conocer los productos
          </a>
        </Reveal>

        <Reveal as="div" className={styles.timeline}>
          {HITOS.map((h) => (
            <div className={styles.item} key={h.anio}>
              <div className={styles.anio}>{h.anio}</div>
              <p>{h.texto}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
