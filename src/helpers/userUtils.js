console.log("========== userComputed SE ESTÁ EJECUTANDO ==========");
function userComputed(data) {
  // data es lo que Eleventy pasa al template
  // intenta acceder a lo que tengas disponible (puede ser data.note, data.page, etc.)
  const fm = data.note?.data || {}; // si note.data no existe, fm será {}
  
  return {
    estado: fm.estado || "N/A",
    tipo_contenido: fm.tipo_contenido || "N/A",
    test: fm.test || "N/A"
  };
}

exports.userComputed = userComputed;
