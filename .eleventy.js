module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addWatchTarget("./style/*");

  eleventyConfig.addFilter("date", require("./filters/dates.js"));

  return {
    feed:
      process.env.MEDIUM_FEED ||
      "https://medium.com/feed/the-inspired-animator",
    passthroughFileCopy: true,
  };
};
