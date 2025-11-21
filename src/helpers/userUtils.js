module.exports = {
  // ... otras configuraciones

  dynamics: {
    // ... otros slots
    notes: {
      head: [],
      header: [],
      // AÑADE TU NUEVO ARCHIVO AQUÍ
      beforeContent: [
        "components/user/common/expose-frontmatter.njk"
      ],
      afterContent: [],
      footer: []
    }
    // ...
  },

  // ...
};
