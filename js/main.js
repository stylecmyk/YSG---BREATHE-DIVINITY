// ===================================
// CONFIGURACIÓN
// ===================================
const CONFIG = {
    numeroWhatsApp: "+59171217869" // Cambia por tu número de WhatsApp
};

// ===================================
// FUNCIÓN PARA PRODUCTOS INDIVIDUALES
// ===================================
function comprarPorWhatsApp(boton) {
    // Obtener datos del producto desde el HTML
    const productCard = boton.closest('.product-card');
    const nombreProducto = productCard.querySelector('.product-title').innerText;
    const precio = productCard.querySelector('.product-price').innerText;
    const imagenProducto = productCard.querySelector('img').src;

    // Construir el mensaje
    const mensaje = `¡Hola! Quiero comprar este producto:

📦 *${nombreProducto}*
💰 Precio: ${precio}
🖼️ Imagen: ${imagenProducto}

¿Está disponible?`;

    // Enviar a WhatsApp
    enviarWhatsApp(mensaje, boton);
}

// ===================================
// FUNCIÓN PARA EL PACK COMPLETO
// ===================================
function comprarPackPorWhatsApp(boton) {
    // Obtener datos del pack
    const bundleContent = boton.closest('.bundle-content');
    const imagenPack = bundleContent.querySelector('img').src;
    const precioOriginal = bundleContent.querySelector('.old-price').innerText;
    const precioDescuento = bundleContent.querySelector('.new-price').innerText;

    // Construir el mensaje
    const mensaje = `¡Hola! Quiero comprar el PACK COMPLETO:

🎁 *PACK TOTAL COMPLETO* (-10% OFF)

Incluye:
✅ Canguro Thorn - Bs. 220
✅ Buzo Sigil - Bs. 220
✅ Polera + Malla - Bs. 400

💰 Precio normal: ${precioOriginal}
🔥 *Precio con descuento: ${precioDescuento}*

🖼️ Imagen: ${imagenPack}

¿Está disponible?`;

    // Enviar a WhatsApp
    enviarWhatsApp(mensaje, boton, "¡ENVIANDO A WHATSAPP!");
}

// ===================================
// FUNCIÓN AUXILIAR PARA ENVIAR A WHATSAPP
// ===================================
function enviarWhatsApp(mensaje, boton, textoBoton = "¡ENVIANDO!") {
    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Crear URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${CONFIG.numeroWhatsApp}?text=${mensajeCodificado}`;

    // Abrir WhatsApp en nueva pestaña
    window.open(urlWhatsApp, '_blank');

    // Animación del botón
    animarBoton(boton, textoBoton);
}

// ===================================
// FUNCIÓN PARA ANIMAR BOTONES
// ===================================
function animarBoton(boton, textoNuevo) {
    const originalText = boton.innerText;
    const originalBgColor = boton.style.backgroundColor;
    const originalColor = boton.style.color;

    // Cambiar apariencia
    boton.innerText = textoNuevo;
    boton.style.backgroundColor = "#25D366"; // Color de WhatsApp
    boton.style.color = "#fff";

    // Restaurar después de 1.5 segundos
    setTimeout(() => {
        boton.innerText = originalText;
        boton.style.backgroundColor = originalBgColor;
        boton.style.color = originalColor;
    }, 1500);
}

// ===================================
// FUNCIÓN PARA SCROLL SUAVE
// ===================================
function scrollToSection(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ===================================
// INICIALIZACIÓN (cuando carga la página)
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('YSG | Breathe Divinity - Sitio cargado correctamente');
    
    // Aquí puedes agregar más funcionalidades al cargar la página
    // Por ejemplo: animaciones, validaciones, etc.
});
