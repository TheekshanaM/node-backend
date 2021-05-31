module.exports = function (expressApp) {
  expressApp.use("/api/test", require("./test_route"));
  expressApp.use("/api/post", require("./post_route"));
};
