// notes/.11tydata.js
module.exports = function(data) {
  const ignoreKeys = ["page", "layout", "content", "eleventyComputed", "eleventyExcludeFromCollections", "permalink", "tags", "dg-publish", "dg-permalink", "cssclasses", "dg-pinned"];

  const fm = {};
  for (const key in data) {
    if (!ignoreKeys.includes(key)) {
      fm[key] = data[key];
    }
  }

  return { userFrontmatter: fm };
};
