var gh_pages = require("gh-pages")
var compiler = require("webpack")(require("../webpack.config"))
var path = require("path")

compiler.run((error, stats) => {
  if (error) {
    console.error(error)
    return
  }

  gh_pages.publish(path.join(__dirname, "dist"), {
    repo: "git@github.com:ccutch/parse-blog.git",
    logger: function(message) {
      console.log(message);
    },
  }, (gh_err) => {
    if (gh_error)
      console.error("publish error", gh_error)
    console.log("blog published")
  })
})
