import App from "../App";

import APIDatabaseAnimals from "./animals/APIDatabaseAnimals";

class FireApi {
	app: App;
	animals: APIDatabaseAnimals;
	constructor(app: App) {
		this.app = app;
		this.animals = new APIDatabaseAnimals(app);
	}
}
export default FireApi;
