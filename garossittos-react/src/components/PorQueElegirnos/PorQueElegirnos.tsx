import Reveal from "../Reveal";
import styles from "./PorQueElegirnos.module.css";

const VALORES = [
  {
    titulo: "Receta de la abuela",
    texto: "La misma receta familiar de 2013, pasada de generación en generación.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2}>
        <path d="M12 2v20M4 8c0-3 3-6 8-6s8 3 8 6-3 6-8 6-8-3-8-6z" />
      </svg>
    ),
  },
  {
    titulo: "100% artesanal",
    texto: "Cada tamal, envuelto y torta se hace a mano, por encargo, sin producción en masa.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2}>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l3 3 5-6" />
      </svg>
    ),
  },
  {
    titulo: "Tres generaciones",
    texto: "Abuela, hijos y nietos trabajando juntos para que la tradición no se pierda.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2}>
        <path d="M3 12h18M3 6h18M3 18h18" />
      </svg>
    ),
  },
  {
    titulo: "Elaborado en Paipa",
    texto: "Ingredientes frescos y productos preparados con cadena de frío, listos para tu mesa.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2}>
        <path d="M12 2l2.5 6.5L21 10l-5 4.5L17 21l-5-3.5L7 21l1-6.5L3 10l6.5-1.5z" />
      </svg>
    ),
  },
];

export default function PorQueElegirnos() {
  return (
    <section id="por-que">
      <Reveal className="wrap">
        <span className="eyebrow">Por qué elegirnos</span>
        <h2>Lo que no cambia desde 2013</h2>
        <div className={styles.grid}>
          {VALORES.map((v) => (
            <div className={styles.card} key={v.titulo}>
              <div className={styles.selloMini}>{v.icon}</div>
              <h4>{v.titulo}</h4>
              <p>{v.texto}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
