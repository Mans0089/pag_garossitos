import type { Producto } from "../../types/catalogo";
import { ETIQUETAS_CATEGORIA } from "../../types/catalogo";
import { formatoCOP, linkWhatsApp } from "../../data/negocio";
import styles from "./Catalogo.module.css";

const IconoSinFoto = () => (
  <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#8E301A" strokeWidth={1.6}>
    <path d="M4 5h16v14H4z" />
    <path d="M4 15l4-4 3 3 5-5 4 4" />
    <circle cx="9" cy="9" r="1.5" />
  </svg>
);

export default function ProductCard({ producto }: { producto: Producto }) {
  let precioHtml: React.ReactNode;
  let mensajePedido: string;

  if (producto.precio) {
    precioHtml = (
      <div className={styles.precio}>
        {formatoCOP(producto.precio)}
        <span className={styles.gramaje}>{producto.gramaje || ""}</span>
      </div>
    );
    mensajePedido = `¡Hola Garossittos! Quiero pedir: ${producto.nombre} (${formatoCOP(producto.precio)}).`;
  } else if (producto.precioDesde) {
    precioHtml = (
      <div className={styles.precio}>
        Desde {formatoCOP(producto.precioDesde)}
        <span className={styles.gramaje}>{producto.gramajeDesde || ""}</span>
      </div>
    );
    mensajePedido = `¡Hola Garossittos! Quiero pedir: ${producto.nombre} (desde ${formatoCOP(
      producto.precioDesde,
    )}). ¿Me confirman precio según tamaño?`;
  } else {
    precioHtml = <div className={`${styles.precio} ${styles.cotizar}`}>Precio bajo pedido</div>;
    mensajePedido = `¡Hola Garossittos! Quisiera cotizar: ${producto.nombre}.`;
  }

  return (
    <div className={styles.prodCard}>
      <div className={styles.prodImg}>
        <span className={styles.catChip}>{ETIQUETAS_CATEGORIA[producto.cat]}</span>
        {producto.img ? (
          <img src={`/assets/images/${producto.img}`} alt={producto.nombre} />
        ) : (
          <div className={styles.sinFoto}>
            <IconoSinFoto />
          </div>
        )}
      </div>
      <div className={styles.prodBody}>
        <h4>{producto.nombre}</h4>
        {producto.variantes && <div className={styles.variantes}>{producto.variantes}</div>}
        <p className={styles.nota}>{producto.nota}</p>
        <div className={styles.precioLinea}>{precioHtml}</div>
        <a
          className="btn btn-primario btn-sm"
          target="_blank"
          rel="noopener noreferrer"
          href={linkWhatsApp(mensajePedido)}
        >
          Pedir por WhatsApp
        </a>
      </div>
    </div>
  );
}
