function userComputed(data) {
  return {
    estado: fm.estado,
    tipo_contenido: fm.tipo_contenido,
    test: fm.test
  };
}

exports.userComputed = userComputed;
