console.log("========== userComputed SE ESTÁ EJECUTANDO ==========");

function userComputed(data) {
  // Todas las claves del frontmatter están directamente en `data`
  // Filtramos las internas de Digital Garden y las que no nos interesen
  const ignore = [
    "permalink", "layout", "tags", "collections",
    "dg-publish", "dg-permalink", "dg-pinned",
    "cssclasses"
  ];

  const result = {};

  for (const [key, value] of Object.entries(data)) {
    // excluir metadatos internos
    if (ignore.includes(key)) continue;

    // excluir funciones u objetos internos de eleventy
    if (typeof value === "function") continue;

    // excluir objetos grandes (page, eleventy, etc.)
    if (typeof value === "object" && !Array.isArray(value)) continue;

    result[key] = value;
  }

  return result;
}

exports.userComputed = userComputed;
