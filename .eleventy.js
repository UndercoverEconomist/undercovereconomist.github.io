const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Define the dateIso filter
  eleventyConfig.addFilter("dateIso", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toISO({
      suppressMilliseconds: true,
      includeOffset: false
    });
  });

  // Define the dateReadable filter
  eleventyConfig.addFilter("dateReadable", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat("dd LLL yyyy");
  });

  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets"
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};