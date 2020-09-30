module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('style')
    eleventyConfig.addPassthroughCopy('img')
    eleventyConfig.addWatchTarget('./style/*')

    return {
      passthroughFileCopy: true
    }
  }