module.exports = {
  eleventyComputed: {
    description: data => data.description || "default description",
    title: data => data.title || "default title"
  }
};
