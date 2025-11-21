function userComputed(data) {
  const fm = data.note?.data || {};
  return {
    estado: fm.estado,
    tipo_contenido: fm.tipo_contenido,
    test: fm.test
  };
}

exports.userComputed = userComputed;
