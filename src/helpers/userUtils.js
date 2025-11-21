// src/site/helpers/userUtils.js (Versión para evitar la sobrescritura del plugin)

function userComputed(data) {
    
    // Devolvemos un objeto con una nueva clave de nivel superior
    // Esta variable será accesible en Nunjucks como 'customDataTools'
    return {
        // Inyectamos la función buscadora en esta nueva clave
        customDataTools: {
            getNoteFrontmatter: (fileSlug) => {
                // Accedemos a las colecciones a través de 'data' que tiene el contexto JS completo.
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
