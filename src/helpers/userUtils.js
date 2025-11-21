// src/site/helpers/userUtils.js

// 1. userComputed debe ser una función, ya que el plugin la llama.
function userComputed(data) {
    // La dejamos vacía para evitar problemas de inyección
    // si el plugin usa esta función internamente.
    return {}; 
}

// 2. userEleventySetup para la configuración (si lo usas para shortcodes, etc.)
function userEleventySetup(eleventyConfig) {
    // Si tienes shortcodes u otras configuraciones, van aquí.
    // eleventyConfig.addShortcode("myShortcode", ...);
}

// 3. Exportación Final: ES CRUCIAL que userComputed sea exportada.
exports.userComputed = userComputed;
exports.userEleventySetup = userEleventySetup; 

// Asegúrate de que no hay ningún otro 'module.exports = ...' en este archivo que sobrescriba estas funciones.
