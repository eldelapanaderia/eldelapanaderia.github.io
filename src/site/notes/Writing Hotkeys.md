---
{"dg-publish":true,"dg-permalink":"/W","permalink":"/W/"}
---

Em dash  — (diálogos)  `Alt + -`  (`Alt + 0151`)  `--`→`—`
Abrir Comillas latinas « (reflexiones, pensamientos o citar diálogos dentro de diálogos) `Ctrl + Alt + <` (`Alt + 174`) `<<`→`«`
Cerrar Comillas latinas » (reflexiones, pensamientos o citar diálogos dentro de diálogos) `Ctrl + Alt + Shift + <` (`Alt + 175`) `>>`→`»`
Tambien plugin smart typography que sustituye al escribir
test

<div class="dataview table-view"><table><tbody><tr><td>Dg-publish</td><td>true</td></tr><tr><td>Dg-permalink</td><td>/W</td></tr></tbody></table></div>

# esto es una prueba de h1

askmalksm
## esto es una prueba de h2

asl,sla
### esto es una prueba de h3

als,ñals

#### esto es una prueba de h4

oaksoask


```dataviewjs
// --- ESTILOS EN LÍNEA PARA LA SIDEBAR FLOTANTE ---
// Estilos del contenedor principal (para float: right, ancho y borde de callout)
const sidebarStyles = "float: right; width: 300px; padding: 0; margin: 0 0 1em 20px; font-size: 0.9em; border: 1px solid #ccc; border-radius: 5px; overflow: hidden; clear: both;";

// Estilos para el encabezado de la Infobox
const headerStyles = "background-color: #337ab7; color: white; font-weight: bold; text-align: center; padding: 8px;";

// Estilos para la tabla (sin borde exterior para que el estilo de la caja prevalezca)
const tableStyles = "width: 100%; border-collapse: collapse; margin: 0;";

// Estilos para las celdas de la tabla (para las líneas divisorias)
const cellStyles = "padding: 5px 10px; border: none; border-bottom: 1px solid #eee; vertical-align: top;";
// ----------------------------------------------------

const page = dv.current();
const headerText = "Metadatos de la Nota";
const ignoredKeys = [
    "file", "aliases", "cssclass", "tag", "tags", "outlinks", 
    "inlinks", "etags", "path", "position", "url", 
    "permalink", "layout", "eleventyComputed", "settings"
];

// 1. Crear el contenedor DIV principal con ESTILOS EN LÍNEA
const sidebarContainer = dv.el("div", "", { 
    attr: {
        style: sidebarStyles
    }
});

let htmlContent = '';

// 2. Generación del encabezado con ESTILOS EN LÍNEA
htmlContent += `<div style="${headerStyles}">${headerText}</div>`;

// 3. Inicio de la tabla con ESTILOS EN LÍNEA
htmlContent += `<table style="${tableStyles}"><tbody>`;

const frontmatterKeys = Object.keys(page)
    .filter(key => !ignoredKeys.includes(key) && typeof page[key] !== 'object');

for (const key of frontmatterKeys) {
    let value = page[key];
    
    if (Array.isArray(value)) {
        value = value.join(', ');
    } else if (value === undefined) {
        value = "N/A";
    }
    
    const displayName = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');

    // Fila de la tabla con ESTILOS EN LÍNEA para las celdas
    htmlContent += `<tr>
        <td style="${cellStyles} text-align: left; width: 40%; font-weight: 500;">${displayName}</td>
        <td style="${cellStyles}">${value}</td>
    </tr>`;
}

htmlContent += '</tbody></table>';

// 4. Insertar el contenido y añadirlo al renderizado
sidebarContainer.innerHTML = htmlContent;
dv.container.appendChild(sidebarContainer);