// src/site/notes/custom.11tydata.js

module.exports = {
  eleventyComputed: {
    // Sobrescribimos la clave 'userComputed' para añadir nuestros propios datos.
    // El objeto 'data' contiene todo el Frontmatter.
    userComputed: (data) => {
      // Asume que userComputed ya existe o es un objeto vacío, 
      // y le añade la nueva propiedad.
      const currentComputed = data.userComputed || {};
      
      // Inyectamos todo el Frontmatter crudo de la nota bajo una clave única
      currentComputed.frontmatterRaw = data;

      return currentComputed;
    },
  },
};
