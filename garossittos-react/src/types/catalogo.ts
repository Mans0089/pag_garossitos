export type Categoria = "tamales" | "envueltos" | "tortas" | "kumis" | "postres";

export interface Producto {
  id: string;
  cat: Categoria;
  nombre: string;
  img: string | null;
  variantes?: string;
  nota: string;
  /** Precio fijo en COP, si aplica */
  precio?: number;
  gramaje?: string;
  /** Para productos con presentaciones (mediana/grande) */
  precioDesde?: number;
  gramajeDesde?: string;
}

export const ETIQUETAS_CATEGORIA: Record<Categoria, string> = {
  tamales: "Tamales",
  envueltos: "Envueltos",
  tortas: "Tortas",
  kumis: "Kumis · Yogurt",
  postres: "Postres",
};
