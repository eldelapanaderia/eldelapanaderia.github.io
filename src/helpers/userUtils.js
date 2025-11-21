function userComputed(data) {
    // Claves de Eleventy que son grandes y causan la referencia circular.
    const keysToIgnore = ['page', 'collections', 'eleventyComputed', 'userComputed'];
    
    // Objeto para almacenar solo las propiedades seguras del Frontmatter.
    const safeFrontmatter = {};
    
    // Iteramos sobre todas las claves del objeto 'data' (Frontmatter + Eleventy)
    for (const key in data) {
        // Copiamos solo si la clave NO es una clave grande o peligrosa
        if (data.hasOwnProperty(key) && !keysToIgnore.includes(key)) {
            // Solo copiamos las claves que probablemente son Frontmatter custom
            safeFrontmatter[key] = data[key];
        }
    }

    const currentComputed = data.userComputed || {};
    
    // Inyectamos el objeto LIMPIO, sin referencias circulares.
    currentComputed.frontmatterRaw = safeFrontmatter; 
    
    return currentComputed;
}

exports.userComputed = userComputed;
