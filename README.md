# YSG - Breathe Divinity

Tienda online de ropa deportiva con integración directa a WhatsApp.

## 📁 Estructura del Proyecto

```
proyecto/
│
├── index.html          # Archivo HTML principal
├── css/
│   └── styles.css      # Todos los estilos CSS
├── js/
│   └── main.js         # Todas las funciones JavaScript
├── img/                # Carpeta para las imágenes
│   ├── canguroM2.png
│   ├── busoM1.jpeg
│   ├── malla0.png
│   ├── malla01.png
│   ├── poleraM1.png
│   ├── poleraM1R.png
│   └── pack1.png
└── README.md           # Este archivo
```

## ⚙️ Configuración

### 1. Cambiar número de WhatsApp

Edita el archivo `js/main.js` y cambia la línea:

```javascript
const CONFIG = {
    numeroWhatsApp: "+59171217869" // TU NÚMERO AQUÍ
};
```

### 2. Cambiar enlaces de redes sociales

Edita el archivo `index.html` en la sección `<div class="social-icons">` y cambia:

- `https://www.tiktok.com/@tu_usuario`
- `https://www.facebook.com/tu_pagina`
- `https://www.instagram.com/tu_usuario`

## 🚀 Cómo usar

1. **Desarrollo local**: Abre `index.html` directamente en tu navegador
2. **Publicar en Netlify**:
   - Arrastra toda la carpeta del proyecto a Netlify
   - Netlify detectará automáticamente que es un sitio estático
   - ¡Listo! Tu sitio estará en línea

## 🎨 Personalización

### Cambiar colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
    --bg-color: #050505;
    --card-bg: #111111;
    --text-main: #e0e0e0;
    --text-muted: #888888;
    --accent: #ff0000;        /* Color principal */
    --accent-hover: #cc0000;  /* Color hover */
    --border-color: #333;
}
```

### Agregar más productos

Copia este bloque en `index.html` dentro de `<div class="product-grid">`:

```html
<div class="product-card">
    <img src="img/tu-imagen.jpg" alt="Descripción">
    <div class="product-info">
        <h3 class="product-title">Nombre del Producto</h3>
        <p class="product-price">Bs. 000.00</p>
        <button class="btn-sm" onclick="comprarPorWhatsApp(this)">COMPRAR</button>
    </div>
</div>
```

## 📱 Funcionalidades

- ✅ Compra directa por WhatsApp
- ✅ Diseño responsive (móvil y desktop)
- ✅ Animaciones suaves
- ✅ Enlaces a redes sociales
- ✅ Pack con descuento especial

## 🛠️ Tecnologías

- HTML5
- CSS3 (Variables CSS, Grid, Flexbox)
- JavaScript Vanilla (ES6+)
- Google Fonts (Oswald, Roboto)

## 📝 Notas

- Las imágenes se cargan desde la carpeta `img/`
- El sitio es 100% estático (no requiere servidor backend)
- Compatible con todos los navegadores modernos

---

**YSG | Breathe Divinity** © 2026
