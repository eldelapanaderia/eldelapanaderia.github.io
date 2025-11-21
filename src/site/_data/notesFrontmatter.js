// _data/notesFrontmatter.js
module.exports = function(eleventyConfig) {
  return function (data) {
    const notes = {};

    // Aseguramos que exista la colección "notes"
    if (data.collections && data.collections.notes) {
      for (const note of data.collections.notes) {
        // Filtramos claves internas
        const ignoreKeys = ["page", "layout", "content", "eleventyComputed", "eleventyExcludeFromCollections", "permalink", "tags", "dg-publish", "dg-permalink", "cssclasses", "dg-pinned"];
        notes[note.fileSlug] = {};

        for (const key in note.data) {
          if (!ignoreKeys.includes(key)) {
            notes[note.fileSlug][key] = note.data[key];
          }
        }
      }
    }

    return notes;
  };
};
