// src/site/helpers/userUtils.js

function userComputed(data) {
    return {};
}

function userEleventySetup(eleventyConfig) {}

exports.userComputed = userComputed;
exports.userEleventySetup = userEleventySetup;

exports.dynamics = {
    common: {
        head: [
            "components/user/common/head/expose-frontmatter-global.njk"
        ],
        beforeContent: [],
        afterContent: []
    },
    notes: {
        head: [],
        beforeContent: [],
        afterContent: []
    }
};
