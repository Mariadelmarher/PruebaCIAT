import App from "../App";

import FireDatabaseAnimals from "./animals/FireDatabaseAnimals";

class FireApi {
	app: App;
	animals: FireDatabaseAnimals;
	constructor(app: App) {
		this.app = app;
		this.animals = new FireDatabaseAnimals(app);
	}
}
export default FireApi;
