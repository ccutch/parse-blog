
const cssNamingTemplate = process.env.NODE_ENV === "production" ?
                            "[hash:base64:15]" :
                            "file-[name]___class-[local]___production-[hash:base64:15]"


module.exports = {

  entry: {
    "service-worker": "./app/service-worker/service-worker.static.js",
    config: "./app/config/manifest.json",
    bundle: "./app/app.js",
    html: "./app/index.html",
  },

  output: {
    filename: "[name].js",
    path: `${__dirname}/dist`,
    publicPath: "/",
  },

  resolve: {
    modulesDirectories: [
      "node_modules",
      "app"
    ]
  },

  module: {
    loaders: [
      {
        test: /\.static\.js$/,
        loaders: [/*"file?name=service-worker.js",*/ "babel"],
        exclude: /node_modules/
      },

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
      },

      {
        test: /\.json$/,
        loader: "file?name=[name].[ext]",
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      /* {
        test: /\.svg$/,
        loader: 'svg-inline'
      },*/
    ]
  }
}
