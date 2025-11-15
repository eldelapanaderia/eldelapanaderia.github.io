---
{"dg-publish":true,"dg-permalink":"/W","permalink":"/W/"}
---

Em dash  — (diálogos)  `Alt + -`  (`Alt + 0151`)  `--`→`—`
Abrir Comillas latinas « (reflexiones, pensamientos o citar diálogos dentro de diálogos) `Ctrl + Alt + <` (`Alt + 174`) `<<`→`«`
Cerrar Comillas latinas » (reflexiones, pensamientos o citar diálogos dentro de diálogos) `Ctrl + Alt + Shift + <` (`Alt + 175`) `>>`→`»`
Tambien plugin smart typography que sustituye al escribir
test

<div class="dataview table-view"><table><tbody><tr><td>Dg-publish</td><td>true</td></tr><tr><td>Dg-permalink</td><td>/W</td></tr></tbody></table></div>
# H1
askmalksm
## H2
asl,sla
### H3
als,ñals
#### H4
oaksoask
```
// --- CONFIGURACIÓN DE ESTILOS Y PARÁMETROS ---
// CLASES CSS: Define las clases para el posicionamiento (wiki-sidebar) y el estilo (callout-info).
// Necesitarás definir 'wiki-sidebar' en tu CSS/SASS para el 'float: right' y el ancho.
const customClasses = "wiki-sidebar callout-info"; 
// ---------------------------------------------

const page = dv.current();
const headerText = page.file.name;
const ignoredKeys = [
    "file", "aliases", "cssclass", "tag", "tags", "outlinks", 
    "inlinks", "etags", "path", "position", "url", 
    "permalink", "layout", "eleventyComputed", "settings" // Añadidos campos comunes de Eleventy
];

// 1. Creamos el contenedor DIV principal con las clases de estilo y posicionamiento
const sidebarContainer = dv.el("div", "", { cls: customClasses });

let htmlContent = '';

// 2. Generación del encabezado (Header)
htmlContent += `<div class="sidebar-header">${headerText}</div>`;

// 3. Inicio de la tabla de metadatos (transpuesta)
htmlContent += '<table><tbody>';

const frontmatterKeys = Object.keys(page)
    .filter(key => !ignoredKeys.includes(key) && typeof page[key] !== 'object');

for (const key of frontmatterKeys) {
    let value = page[key];
    
    // Formateo de valores: arrays a string, undefined a "N/A"
    if (Array.isArray(value)) {
        value = value.join(', ');
    } else if (value === undefined) {
        value = "N/A";
    }
    
    // Formateo de la clave (ej. 'estado_revision' -> 'Estado Revision')
    const displayName = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');

    // Fila de la tabla transpuesta (Campo | Valor)
    // Se recomienda usar <th> para la clave para mejor semántica.
    htmlContent += `<tr><td>${displayName}</td><td>${value}</td></tr>`;
}

htmlContent += '</tbody></table>';

// 4. Insertamos el HTML generado en el contenedor
sidebarContainer.innerHTML = htmlContent;

// 5. Añadimos el contenedor al renderizado final
dv.container.appendChild(sidebarContainer);