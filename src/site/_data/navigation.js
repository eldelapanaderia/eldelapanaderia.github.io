// src/site/_data/navigation.js

module.exports = {
  mainLinks: (eleventy) => {
    // 1. Buscamos la colección generada automáticamente por Eleventy para la etiqueta 'navconfig'.
    // Esta colección SIEMPRE es un array, garantizando que el acceso sea seguro.
    const configNotes = eleventy.collections.navconfig; 

    // Verificamos si existe la colección y tiene al menos una nota
    if (configNotes && configNotes.length > 0) {
      // Tomamos la primera nota que tenga esta etiqueta (la más reciente)
      const configNote = configNotes[0]; 
      
      // Verificamos y devolvemos los enlaces
      if (configNote.data.main_nav_links) {
        return configNote.data.main_nav_links;
      }
    }

    // Devolvemos un array vacío como respaldo
    return [];
  }
};
