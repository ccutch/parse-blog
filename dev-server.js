const express = require("express")
const app = express()
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpack = require("webpack")

const compiler = webpack(require("./webpack.config"))

app.use(webpackDevMiddleware(compiler))

app.use(express.static("dist"))

app.use((req, res) => {
  res.sendFile(__dirname + "/dist/index.html")
})


app.listen(5150)
