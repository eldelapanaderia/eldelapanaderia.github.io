// src/site/helpers/userUtils.js

function userComputed(data) {
    const currentComputed = data.userComputed || {};

    // Inyectamos una FUNCIÓN que toma las colecciones y busca la nota.
    // Esto es seguro porque la función se ejecuta DESPUÉS de la compilación.
    currentComputed.getNoteFrontmatter = (fileSlug) => {
        // La variable 'collections' está disponible aquí porque estamos en el contexto de Eleventy JS.
        const allNotes = data.collections.all || []; 
        
        // Buscar la nota por el slug.
        const note = allNotes.find(item => item.fileSlug === fileSlug);

        // Devolver el Frontmatter completo de la nota si se encuentra.
        return note ? note.data : null;
    };

    return currentComputed;
}

exports.userComputed = userComputed;
