
const cssNamingTemplate = process.env.NODE_ENV === "production" ?
                            "[hash:base64:15]" :
                            "file-[name]___class-[local]___production-[hash:base64:15]"


module.exports = {

  entry: {
    javascript: "./app/index.js",
    html: "./app/app.html"
  },

  output: {
    filename: "bundle.js",
    path: `${__dirname}/dist`
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/
      },

      {
        test: /\.css$/,
        loader: "style!css?modules&localIdentName=" + cssNamingTemplate,
        exclude: /node_modules/
      },

      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      }
    ]
  }
}
