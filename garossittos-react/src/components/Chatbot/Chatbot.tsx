import { useEffect, useRef, useState } from "react";
import { CATALOGO } from "../../data/catalogo";
import { ETIQUETAS_CATEGORIA } from "../../types/catalogo";
import type { Categoria, Producto } from "../../types/catalogo";
import { NEGOCIO, formatoCOP, linkWhatsApp } from "../../data/negocio";
import styles from "./Chatbot.module.css";

interface Mensaje {
  id: number;
  texto: string;
  autor: "bot" | "user";
}
interface Opcion {
  texto: string;
  accion: () => void;
}

const CATEGORIAS: Categoria[] = ["tamales", "envueltos", "tortas", "kumis", "postres"];

export default function Chatbot() {
  const [abierto, setAbierto] = useState(false);
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);
  const [opciones, setOpciones] = useState<Opcion[]>([]);
  const [pedido, setPedido] = useState<Producto[]>([]);
  const cuerpoRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);

  useEffect(() => {
    cuerpoRef.current?.scrollTo({ top: cuerpoRef.current.scrollHeight, behavior: "smooth" });
  }, [mensajes]);

  function agregarMensaje(texto: string, autor: "bot" | "user") {
    idRef.current += 1;
    setMensajes((m) => [...m, { id: idRef.current, texto, autor }]);
  }

  function elegir(opcion: Opcion) {
    agregarMensaje(opcion.texto, "user");
    setOpciones([]);
    setTimeout(opcion.accion, 320);
  }

  function mostrarMenuPrincipal(saludo: boolean) {
    if (saludo) {
      agregarMensaje(`¡Hola! Soy el asistente de ${NEGOCIO.nombre} 🧑‍🍳. ¿En qué te ayudo hoy?`, "bot");
    }
    setOpciones([
      { texto: "🫔 Armar mi pedido", accion: iniciarArmadoPedido },
      {
        texto: "🕒 Tiempos de entrega",
        accion: () =>
          responder(
            "Trabajamos por encargo: entre más anticipación nos des, mejor te podemos cumplir. Al confirmar tu pedido por WhatsApp te decimos la fecha exacta disponible según cantidad.",
          ),
      },
      {
        texto: "❄️ ¿Cómo se conservan?",
        accion: () =>
          responder(
            "Nuestros productos son perecederos y artesanales: te recomendamos guardarlos en refrigeración y consumirlos frescos. Cada producto mantiene cadena de frío hasta la entrega.",
          ),
      },
      {
        texto: "💳 Formas de pago",
        accion: () =>
          responder("Coordinamos la forma de pago directamente por WhatsApp (efectivo o transferencia), según lo que te quede más fácil."),
      },
      {
        texto: "📍 Zona de entrega",
        accion: () =>
          responder(
            "Elaboramos en Paipa, Boyacá. Cuéntanos tu ciudad o barrio por WhatsApp y te confirmamos si hacemos entrega o coordinamos un punto de recogida.",
          ),
      },
      { texto: "💬 Hablar con una persona", accion: irAWhatsApp },
    ]);
  }

  function responder(texto: string) {
    agregarMensaje(texto, "bot");
    setTimeout(() => {
      agregarMensaje("¿Algo más en lo que te pueda ayudar?", "bot");
      mostrarMenuPrincipal(false);
    }, 500);
  }

  function irAWhatsApp() {
    agregarMensaje("¡Con gusto! Te paso directo con nosotros por WhatsApp 👇", "bot");
    setTimeout(() => window.open(linkWhatsApp(NEGOCIO.mensajeGenerico), "_blank"), 400);
    setTimeout(() => {
      agregarMensaje("¿Necesitas algo más mientras tanto?", "bot");
      mostrarMenuPrincipal(false);
    }, 500);
  }

  function iniciarArmadoPedido() {
    agregarMensaje("Perfecto, ¿qué categoría te antoja hoy?", "bot");
    setOpciones([
      ...CATEGORIAS.map((cat) => ({
        texto: `${iconoCategoria(cat)} ${ETIQUETAS_CATEGORIA[cat]}`,
        accion: () => mostrarProductosChat(cat),
      })),
      { texto: "⬅️ Volver", accion: () => mostrarMenuPrincipal(false) },
    ]);
  }

  function mostrarProductosChat(cat: Categoria) {
    const items = CATALOGO.filter((p) => p.cat === cat);
    agregarMensaje(`Estos son nuestros ${ETIQUETAS_CATEGORIA[cat].toLowerCase()}:`, "bot");
    setOpciones([
      ...items.map((p) => ({
        texto:
          p.nombre +
          (p.precio ? ` — ${formatoCOP(p.precio)}` : p.precioDesde ? ` — desde ${formatoCOP(p.precioDesde)}` : " — a cotizar"),
        accion: () => agregarAlPedido(p),
      })),
      { texto: "⬅️ Otra categoría", accion: iniciarArmadoPedido },
    ]);
  }

  function agregarAlPedido(p: Producto) {
    setPedido((prev) => [...prev, p]);
    agregarMensaje(`Agregué "${p.nombre}" a tu pedido. ¿Quieres añadir algo más?`, "bot");
    setOpciones([
      { texto: "➕ Seguir agregando", accion: iniciarArmadoPedido },
      { texto: "✅ Ya terminé, enviar pedido", accion: finalizarPedido },
    ]);
  }

  function finalizarPedido() {
    agregarMensaje(
      "¡Listo! Ya tienes tu pedido armado. Toca el botón de abajo para enviármelo por WhatsApp y coordinamos el resto 🎉",
      "bot",
    );
    setOpciones([{ texto: "⬅️ Menú principal", accion: () => mostrarMenuPrincipal(false) }]);
  }

  function iconoCategoria(cat: Categoria) {
    return { tamales: "🫔", envueltos: "🌿", tortas: "🎂", kumis: "🥤", postres: "🍰" }[cat];
  }

  function alternarChat() {
    if (abierto) {
      setAbierto(false);
      return;
    }
    setAbierto(true);
    if (mensajes.length === 0) mostrarMenuPrincipal(true);
  }

  const linkPedido = (() => {
    const texto =
      `${NEGOCIO.mensajeGenerico}\n\nEsto es lo que quiero:\n` +
      pedido.map((p) => `- ${p.nombre}`).join("\n") +
      `\n\n¿Me confirman precio total y fecha de entrega? 🙏`;
    return linkWhatsApp(texto);
  })();

  return (
    <>
      <div className={`${styles.panel} ${abierto ? styles.abierto : ""}`}>
        <div className={styles.head}>
          <img src="/assets/images/logo-garossittos.png" alt="" />
          <div>
            <div className={styles.titulo}>Asistente Garossittos</div>
            <div className={styles.estado}>🟢 Responde al instante</div>
          </div>
          <button className={styles.cerrar} onClick={() => setAbierto(false)} aria-label="Cerrar asistente">
            ✕
          </button>
        </div>

        <div className={styles.body} ref={cuerpoRef}>
          {mensajes.map((m) => (
            <div key={m.id} className={`${styles.msg} ${m.autor === "bot" ? styles.msgBot : styles.msgUser}`}>
              {m.texto}
            </div>
          ))}
        </div>

        <div className={styles.opciones}>
          {opciones.map((op) => (
            <button key={op.texto} className={styles.chip} onClick={() => elegir(op)}>
              {op.texto}
            </button>
          ))}
        </div>

        {pedido.length > 0 && (
          <div className={styles.carrito}>
            <strong>Tu pedido:</strong>
            <ul>
              {pedido.map((p, i) => (
                <li key={`${p.id}-${i}`}>{p.nombre}</li>
              ))}
            </ul>
            <a className="btn btn-primario btn-sm" href={linkPedido} target="_blank" rel="noopener noreferrer">
              Enviar pedido por WhatsApp
            </a>
          </div>
        )}
      </div>

      <button className={styles.fabChat} onClick={alternarChat} aria-label={abierto ? "Cerrar asistente virtual" : "Abrir asistente virtual"} title="Asistente virtual">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
      </button>
    </>
  );
}
