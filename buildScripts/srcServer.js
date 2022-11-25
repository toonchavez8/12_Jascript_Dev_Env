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

app.get("/users", function (req, res) {
	// Hard coding for simplicity. Pretend this hits a real database
	res.json([
		{ id: 1, firstName: "Bob", lastName: "Smith", email: "bob@gmail.com" },
		{ id: 2, firstName: "Tammy", lastName: "Norton", email: "temp@gmail.com" },
		{ id: 3, firstName: "Tina", lastName: "Lee", email: "tina@dev.com" },
	]);
});

app.listen(port, function (err) {
	if (err) {
		console.log(err);
	} else {
		open("http://localhost:" + port);
	}
});
