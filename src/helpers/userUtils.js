function userComputed(data) {
  // Las propiedades de frontmatter de la nota están al nivel de "data"
  const reservedKeys = [
    "siteconfig", "dynamics", "eleventyComputed", "meta", "templateEngineOverride",
    "page", "collections", "tags", "layout",
    "eleventyExcludeFromCollections",
    "permalink", "content", "templateContent",
    "template", "date", "updated", "created", "graph", "filetree", "userComputed"
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
