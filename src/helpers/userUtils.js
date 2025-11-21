// src/site/helpers/userUtils.js

function userComputed(data) {
    return {};
}

function userEleventySetup(eleventyConfig) {
    // Aquí van tus shortcodes si necesitas
}

exports.userComputed = userComputed;
exports.userEleventySetup = userEleventySetup;

exports.dynamics = {
    notes: {
        beforeContent: [
            "components/expose-frontmatter.njk"
        ],
        afterContent: []
    },
    common: {
        beforeContent: [],
        afterContent: []
    }
};
