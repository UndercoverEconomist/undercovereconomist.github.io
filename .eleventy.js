module.exports = function(eleventyConfig) {
  // Additional configuration here
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};