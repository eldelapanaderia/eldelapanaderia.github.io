function userComputed(data) {
  return {
    estado: data.estado,
    tipo_contenido: data.tipo_contenido,
    test: data.test
  };
}

exports.userComputed = userComputed;
