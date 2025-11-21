// _data/notesFrontmatter.js
module.exports = function() {
  return function() {
    // `globalThis.ENV` no existe, necesitamos acceder a las colecciones desde los templates
    // Por lo tanto, aquí devolvemos un objeto vacío por ahora
    return {}; 
  };
};
