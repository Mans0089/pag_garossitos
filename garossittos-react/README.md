# Garossittos — Sitio web (Vite + React + TypeScript)

Versión "profesional" del sitio: mismo diseño y funcionalidad que la versión estática, pero
reescrita como proyecto React con componentes, tipos y una arquitectura que se puede hacer crecer
(carrito real, panel de administración, blog, etc.) sin tener que empezar de cero.

## Requisitos

- [Node.js](https://nodejs.org) versión 18 o superior (incluye `npm`).

## Cómo correrlo en tu computador

```bash
npm install       # instala las dependencias (solo la primera vez)
npm run dev       # levanta el servidor de desarrollo
```

Abre la URL que te muestre la terminal (normalmente `http://localhost:5173`). Los cambios que
hagas en el código se reflejan al instante en el navegador (hot reload).

## Cómo generar la versión final para publicar

```bash
npm run build
```

Esto genera una carpeta `dist/` con el sitio ya optimizado (HTML, CSS y JS minificados). Esa es la
carpeta que se publica — no `src/`.

Para revisarla localmente antes de publicar:

```bash
npm run preview
```

## Cómo publicarlo gratis

**Netlify (arrastrar y soltar):**
1. Corre `npm run build`.
2. Ve a https://app.netlify.com/drop
3. Arrastra la carpeta `dist/` (solo esa carpeta, no todo el proyecto).

**Netlify / Vercel conectado a GitHub (recomendado a futuro):**
1. Sube este proyecto a un repositorio de GitHub.
2. Conecta el repositorio en Netlify o Vercel.
3. Configura: *Build command* = `npm run build`, *Publish/Output directory* = `dist`.
4. Cada vez que hagas `git push`, el sitio se vuelve a publicar solo.

## Estructura del proyecto

```
src/
  components/        Un componente por sección (Header, Hero, Historia, Catalogo, Chatbot, etc.)
                      Cada uno con su archivo .tsx y su .module.css al lado.
  data/
    negocio.ts        Número de WhatsApp, mensaje inicial, helpers de formato de precio.
    catalogo.ts        Todo el catálogo de productos (nombre, precio, imagen, categoría...).
  types/
    catalogo.ts        Tipos de TypeScript compartidos (Producto, Categoria).
  hooks/
    useReveal.ts        Hook para las animaciones al hacer scroll.
  styles/
    global.css          Paleta de colores, tipografía y estilos base compartidos.
public/
  assets/images/         Fotos y logo del negocio.
```

## Qué cambia frente a la versión estática (index.html suelto)

- **Componentes reutilizables** en vez de un solo archivo gigante — más fácil de mantener y de
  extender.
- **TypeScript**: los datos del catálogo tienen un tipo definido (`Producto`), así que si te
  equivocas escribiendo un campo, el editor te avisa antes de publicar.
- **Vite** como bundler: build optimizado, recarga instantánea en desarrollo, código dividido en
  archivos con hash para mejor cacheo del navegador.
- Misma paleta, misma tipografía, mismo asistente virtual y catálogo — nada visual cambia para
  quien visita el sitio.

## Editar precios o productos

Todo el catálogo vive en `src/data/catalogo.ts`. Cada producto es un objeto:

```ts
{
  id: "tamal-boyacense",
  cat: "tamales",
  nombre: "Tamal Boyacense",
  img: "tamales-servidos.jpg",       // debe existir en public/assets/images/
  variantes: "Con chorizo · Sin chorizo",
  nota: "Descripción corta del producto.",
  precio: 7500,                        // en pesos, sin puntos ni signo $
  gramaje: "400 g",
}
```

Si un producto no tiene precio fijo, simplemente omite `precio` (o `precioDesde`) y la tarjeta
mostrará "Precio bajo pedido" automáticamente.

Para cambiar el número de WhatsApp que recibe los pedidos, edita `telefonoPrincipal` en
`src/data/negocio.ts` (con el `57` de Colombia, sin `+` ni espacios).

## Qué falta confirmar (igual que en la versión anterior)

- Precio de envueltos, kumis/yogurt y postres.
- Zona exacta de entrega y tiempo mínimo de anticipación.
- Redes sociales y horario de atención, si quieren mostrarlos.

## Próximos pasos posibles (ya con esta base es mucho más fácil)

- Panel simple para que edites el catálogo sin tocar código (ej. un archivo JSON conectado a un
  CMS gratuito como Google Sheets o Notion).
- Carrito de compras real con checkout, si en algún momento dejan de depender solo de WhatsApp.
- Página de administración de pedidos.
- Tests automáticos de los componentes con Vitest.
