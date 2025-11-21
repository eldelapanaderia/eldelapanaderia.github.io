// src/site/helpers/userUtils.js (Sustituye a la anterior)

function userComputed(data) {
    const keysToIgnore = ['page', 'collections', 'eleventyComputed', 'userComputed', 'customDataTools'];
    const safeFrontmatter = {};
    
    // Copia todas las propiedades de data (incluyendo Frontmatter custom)
    // EXCLUYENDO las referencias circulares de Eleventy.
    for (const key in data) {
        if (data.hasOwnProperty(key) && !keysToIgnore.includes(key)) {
            safeFrontmatter[key] = data[key];
        }
    }

    // Retorna el objeto de Frontmatter limpio, en una clave simple.
    return {
        // Renombramos la clave a algo muy simple y único
        noteFrontmatter: safeFrontmatter
    };
}
exports.userComputed = userComputed;
