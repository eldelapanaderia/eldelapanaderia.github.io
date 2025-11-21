// src/site/helpers/userUtils.js (Sustituye a la anterior)

function userComputed(data) {
    // Devolvemos un objeto con una nueva clave de nivel superior.
    // Esta variable será accesible en Nunjucks como 'noteFinder'
    return {
        noteFinder: {
            // La función busca la nota por slug dentro de las colecciones.
            getFrontmatter: (fileSlug) => {
                // Accedemos a las colecciones a través de 'data.collections' 
                // que es lo que contiene el contexto JS completo.
                const allNotes = data.collections.all || []; 
                
                // Buscar la nota por el slug.
                const note = allNotes.find(item => item.fileSlug === fileSlug);

                // Devolver el Frontmatter completo (note.data) si se encuentra.
                return note ? note.data : null;
            }
        }
    };
}

exports.userComputed = userComputed;
