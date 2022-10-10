import App from "./App";
import * as express from "express";

const TAG = "index";

const myApp = new App("localization-animals"); //serial

const onStart = () => {
	const port = (() => {
		let num = 3001;
		if (process.env.NODE_ENV !== "development") {
			const envPort = Number(process.env.PORT);
			if (!isNaN(envPort)) num = envPort;
		}
		return num;
	})();

	const app = express();
	const api = myApp.api;

	let listeners: Record<string, () => { creationDate: string; id: string }> =
		{};

	const exit = () => {
		let counter = 0;
		let message = "";
		//remove listeners when database is connect
		Object.keys(listeners).forEach((item) => {
			if (typeof listeners[item] === "function") {
				const res = listeners[item]();
				message += res.creationDate + " - " + res.id + "\n";
				listeners[item] = null;
				delete listeners[item];
				counter++;
			}
		});
		return message + "\n" + "listeners closed (" + counter + ")";

	};

	app.get("/", (req, response) => {
		const bad = () => {
			response.status(400); //Bad Request
			response.send("bad request");
		};

		try {
			response.send("its live")
		} catch (error) {
			bad();
		}
	});
	app.get("/getVulnerableAnimals", (req, response) => {
		const bad = () => {
			response.status(400); //Bad Request
			response.send("bad request");
		};

		api.animals.getVulnerableAnimals().then((animals) => {
			response.send(animals)
		}).catch((error) => {
			bad();
		})
	});
	app.get("/addAnimal/:lat/:lng/:owner", (req, res) => {
		try {
			res.send("in the futurue you can use this endpoint to add animals");
		} catch (error) { }
	});
	app.post("/addAnimal", (req, res) => {
		try {
			res.send("in the futurue you can use this endpoint to add animals");
		} catch (error) { }
	});

	app.get("/close", (req, res) => {
		try {
			const resultExit = exit();
			res.send(resultExit);
		} catch (error) { }
	});

	app.listen(port, () => {
		console.log("The application is listening on port http://localhost:" + port + "");
	});

	process.on("exit", () => {
		exit();
		process.exit();
	});
};

myApp
	.start()
	.then((res) => {
		onStart();
	})
	.catch((err) => {
		console.log(err);
	});
