function userComputed(data) {
  // data.note.data contiene las propiedades frontmatter de la nota actual
  const noteData = data.note?.data || {};

  const reservedKeys = [
    "page", "collections", "tags", "layout",
    "eleventyExcludeFromCollections",
    "permalink", "content", "templateContent",
    "template", "date", "updated", "created", "graph", "filetree", "userComputed"
  ];

  const fm = {};
  for (const key in noteData) {
    if (!reservedKeys.includes(key)) {
      fm[key] = noteData[key];
    }
  }
  return fm;
}

exports.userComputed = userComputed;
