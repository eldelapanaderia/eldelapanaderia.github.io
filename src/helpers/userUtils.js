// Este objeto vacío se usa para evitar conflictos con la inyección de datos del plugin.
function userComputed(data) {
    return {};
}

// Lógica para generar el HTML de la ficha usando el contexto completo de la página (this).
function noteCardShortcode() {
    // 1. Acceder a las variables de contexto garantizadas en un shortcode.
    const fileSlug = this.page.fileSlug;
    const allNotes = this.collections.all || [];

    // 2. Buscar la nota actual en las colecciones.
    const note = allNotes.find(item => item.fileSlug === fileSlug);
    
    if (!note || !note.data) {
        return ''; // No renderizar si no se encuentra la nota.
    }

    const noteData = note.data;
    const displayedProperties = [];
    
    // 3. Definir claves a ignorar (títulos, rutas, claves internas de Eleventy/Plugin).
    const keysToIgnore = [
        'title', 'permalink', 'layout', 'tags', 'page', 'collections', 
        'eleventyComputed', 'date', 'noteIcon', 'hide', 'pinned', 'dg-home', 
        'image', 'settings', 'meta', 'graph', 'filetree', 'userComputed', 
        'noteFinder', 'dynamics', 'siteconfig', 'pkg', 'templateEngineOverride'
    ];
    
    // 4. Filtrar propiedades custom.
    for (const key in noteData) {
        if (noteData.hasOwnProperty(key) && !keysToIgnore.includes(key)) {
            // Solo incluimos cadenas y arrays (ej. tags)
            if (typeof noteData[key] === 'string' || Array.isArray(noteData[key])) {
                 displayedProperties.push({ key: key, value: noteData[key] });
            }
        }
    }

    // Si no hay imagen ni propiedades custom, devolver vacío.
    if (!noteData.image && displayedProperties.length === 0) {
        return '';
    }

    // ********* 5. Generación del HTML *********
    
    // Puedes usar una plantilla Nunjucks para esto, pero por simplicidad usamos una cadena HTML.
    let html = `<aside class="wiki-card-container">
        <div class="wiki-card-header">
            <h3>${noteData.title || 'Ficha de Nota'}</h3>
        </div>
        <div class="wiki-card-content">`;
            
    // Agregamos las propiedades clave: estado y tipo_contenido (si existen)
    if (noteData.estado) {
        html += `<p><strong>Estado:</strong> ${noteData.estado}</p>`;
    }
    if (noteData.tipo_contenido) {
        html += `<p><strong>Tipo Contenido:</strong> ${noteData.tipo_contenido}</p>`;
    }

    // Agregar el resto de propiedades filtradas
    displayedProperties.forEach(prop => {
        const value = Array.isArray(prop.value) ? prop.value.join(', ') : prop.value;
        html += `<p><strong>${prop.key}:</strong> ${value}</p>`;
    });

    html += `</div></aside>`;
    
    return html;
}

// Función principal de configuración de Eleventy para registrar el shortcode.
function userEleventySetup(eleventyConfig) {
    // Registramos el shortcode 'wikiCard'
    eleventyConfig.addShortcode("wikiCard", noteCardShortcode);
}

exports.userEleventySetup = userEleventySetup;
exports.userComputed = userComputed;
// Exporta cualquier otra función que el plugin necesite (p. ej., userMarkdownSetup)
