function userComputed(data) {
  const fm = data || {};

  // filtrar automáticamente todas las claves de frontmatter
  const result = {};

  for (const key in fm) {
    // ignorar claves internas (esto se puede afinar)
    if (key.startsWith("_") || key === "page" || key === "content") continue;

    result[key] = fm[key];
  }

  return result;
}

exports.userComputed = userComputed;
