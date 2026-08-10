import { useMemo, useState } from "react";
import { CATALOGO } from "../../data/catalogo";
import type { Categoria } from "../../types/catalogo";
import Reveal from "../Reveal";
import ProductCard from "./ProductCard";
import styles from "./Catalogo.module.css";

type Filtro = Categoria | "todos";

const TABS: { valor: Filtro; texto: string }[] = [
  { valor: "todos", texto: "Todos" },
  { valor: "tamales", texto: "Tamales" },
  { valor: "envueltos", texto: "Envueltos" },
  { valor: "tortas", texto: "Tortas" },
  { valor: "kumis", texto: "Kumis · Yogurt" },
  { valor: "postres", texto: "Postres" },
];

export default function Catalogo() {
  const [filtro, setFiltro] = useState<Filtro>("todos");

  const productos = useMemo(
    () => (filtro === "todos" ? CATALOGO : CATALOGO.filter((p) => p.cat === filtro)),
    [filtro],
  );

  return (
    <section className={styles.catalogo} id="catalogo">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Nuestros productos</span>
          <h2>Catálogo Garossittos</h2>
          <p className={styles.intro}>
            Elige tus favoritos y pídelos directo por WhatsApp. Los precios marcados vienen de
            nuestra ficha técnica; los que dicen "precio bajo pedido" se cotizan según cantidad.
          </p>
        </Reveal>

        <Reveal className={styles.tabs}>
          {TABS.map((t) => (
            <button
              key={t.valor}
              className={`${styles.tab} ${filtro === t.valor ? styles.tabActivo : ""}`}
              onClick={() => setFiltro(t.valor)}
            >
              {t.texto}
            </button>
          ))}
        </Reveal>

        <Reveal className={styles.grid}>
          {productos.map((p) => (
            <ProductCard producto={p} key={p.id} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
