/**
 * Datos centrales del negocio.
 * Edita aquí el número de WhatsApp que recibe los pedidos y el mensaje inicial.
 * El teléfono debe llevar el indicativo 57 (Colombia), sin "+" ni espacios.
 */
export const NEGOCIO = {
  nombre: "Garossittos",
  telefonoPrincipal: "573115313640",
  telefonosSecundarios: ["573208355430", "573175190627"],
  mensajeGenerico: "¡Hola Garossittos! Quisiera hacer un pedido.",
  ubicacion: "Paipa, Boyacá — entregas y encargos a coordinar",
};

export function linkWhatsApp(texto: string, telefono: string = NEGOCIO.telefonoPrincipal): string {
  return `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
}

export function formatoCOP(n: number): string {
  return "$" + n.toLocaleString("es-CO");
}
