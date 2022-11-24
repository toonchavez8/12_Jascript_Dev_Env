import express from "express";
import path from "path";
import open from "open";

/* eslint-disable no-console */

// import webpack and webpack config
import webpack from "webpack";
import config from "../webpack.config.dev";

const port = 3000;
const app = express();
const compiler = webpack(config);

// Tell express to use webpack-dev-middleware
app.use(
	require("webpack-dev-middleware")(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath,
	})
);

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, function (err) {
	if (err) {
		console.log(err);
	} else {
		open("http://localhost:" + port);
	}
});
