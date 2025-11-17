// src/site/_data/navigation.js

module.exports = {
  // Función para obtener la lista de enlaces de navegación principal
  mainLinks: (eleventy) => {
    
    // 1. Busca la nota que tenga la propiedad 'dg-home' establecida a true.
    const homepage = eleventy.collections.all.find(item => 
        item.data['dg-home'] === true
    );

    // 2. Si se encuentra la página de inicio Y tiene la propiedad 'main_nav_links'
    if (homepage && homepage.data.main_nav_links) {
      // 3. Devuelve esa lista de enlaces
      return homepage.data.main_nav_links;
    }

    // 4. Devuelve una lista de respaldo
    return [];
  }
};
