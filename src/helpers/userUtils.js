function userComputed(data) {
  // Si existe data.page.fileSlug, entonces estamos en una nota real.
  // Y sus datos propios están en "data" PERO tenemos que excluir
  // todo lo que Eleventy añade por defecto.

  const reservedKeys = [
    "page", "collections", "tags", "layout",
    "eleventyExcludeFromCollections",
    "permalink", "content", "templateContent",
    "template", "date", "updated", "created",
    "graph", "filetree", "userComputed"
  ];

  const fm = {};

  for (const key in data) {
    if (!reservedKeys.includes(key)) {
      fm[key] = data[key];
    }
  }

  return fm;
}

exports.userComputed = userComputed;
