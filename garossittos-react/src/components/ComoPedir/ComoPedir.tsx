import Reveal from "../Reveal";
import styles from "./ComoPedir.module.css";

const PASOS = [
  { titulo: "Elige tus productos", texto: "Recorre el catálogo o pregúntale a nuestro asistente qué hay disponible." },
  { titulo: "Escríbenos", texto: "Envía tu pedido por WhatsApp o arma tu lista con el asistente virtual." },
  { titulo: "Confirmamos", texto: "Te confirmamos cantidad, precio final y fecha de entrega según disponibilidad." },
  { titulo: "Recibes tu pedido", texto: "Coordinamos punto de entrega o recogida — siempre recién hecho." },
];

export default function ComoPedir() {
  return (
    <section id="como-pedir">
      <Reveal className="wrap">
        <span className="eyebrow">¿Cómo funciona?</span>
        <h2>De tu antojo a tu mesa en 4 pasos</h2>
        <div className={styles.pasos}>
          {PASOS.map((p, i) => (
            <div className={styles.card} key={p.titulo}>
              <div className={styles.num}>{i + 1}</div>
              <h4>{p.titulo}</h4>
              <p>{p.texto}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
