module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addWatchTarget("./style/*");

  eleventyConfig.addFilter("date", require("./filters/dates.js"));

  // Add markdown support to Nunjucks
  const markdownIt = require("markdown-it");
  const md = new markdownIt({
    html: true,
    linkify: true,
    typographer: true
  });

  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
  });

  return {
    feed:
      process.env.MEDIUM_FEED ||
      "https://medium.com/feed/the-inspired-animator",
    passthroughFileCopy: true,
  };
};
